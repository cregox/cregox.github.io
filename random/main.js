/*
*  sources:
*  https://webrtc.github.io/samples/
*    canvas-record (stream capture)
*    input-output (query media devices microphone camera)
*/

/*eslint-disable semi */
'use strict';

const lucky = document.querySelector('lucky')
const maxEl = document.querySelector('max')
let maxN = 0

const mediaSource = new MediaSource()
mediaSource.addEventListener('sourceopen', handleSourceOpen, false)
let mediaRecorder
let recordedBlobs
let sourceBuffer

const audioInputSelect = document.querySelector('select#audioSource')
const videoSelect = document.querySelector('select#videoSource')
const selectors = [audioInputSelect, videoSelect]

function max () {
  // maxN = number input
  if (maxN < 1) maxEl.textContent = 'infinity'
  else maxEl.textContent = maxN
}

function encode(str) {
  return str.replace(/./g, function(c) {
    return ('00' + c.charCodeAt(0)).slice(-3)
  })
}

function decode(str) {
  return str.replace(/.{3}/g, function(c) {
    return String.fromCharCode(c)
  })
}

function handleSourceOpen(event) {
  console.log('MediaSource opened')
  sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"')
  console.log('Source buffer: ', sourceBuffer)
}

function handleDataAvailable(event) {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data)
  }
}

function handleStop(event) {
  console.log('Recorder stopped: ', event)
  const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'})
  //video.src = window.URL.createObjectURL(superBuffer)
}

// The nested try blocks will be simplified when Chrome 47 moves to Stable
function startRecording() {
  const stream = window.stream // frames per second
  console.log('will start stream capture from canvas element: ', stream)
  
  let options = {mimeType: 'video/webm'}
  recordedBlobs = []
  try {
    mediaRecorder = new MediaRecorder(stream, options)
  } catch (e0) {
    console.log('Unable to create MediaRecorder with options Object: ', e0)
    try {
      options = {mimeType: 'video/webm,codecs=vp9'}
      mediaRecorder = new MediaRecorder(stream, options)
    } catch (e1) {
      console.log('Unable to create MediaRecorder with options Object: ', e1)
      try {
        options = 'video/vp8'; // Chrome 47
        mediaRecorder = new MediaRecorder(stream, options)
      } catch (e2) {
        alert('MediaRecorder is not supported by this browser or this is not on HTTPS.\n\n' +
          'Try Firefox 29 or later, or Chrome 47 or later, ' +
          'with Enable experimental Web Platform features enabled from chrome://flags.')
        console.error('Exception while creating MediaRecorder:', e2)
        return
      }
    }
  }
  console.log('Created MediaRecorder', mediaRecorder, 'with options', options)
  mediaRecorder.onstop = handleStop
  mediaRecorder.ondataavailable = handleDataAvailable
  mediaRecorder.start(100) // collect 100ms of data
  console.log('MediaRecorder started', mediaRecorder)
}

function stopRecording() {
  mediaRecorder.stop();
  console.log('Recorded Blobs: ', recordedBlobs);
  //video.controls = true;
}

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  const values = selectors.map(select => select.value)
  selectors.forEach(select => {
    while (select.firstChild) {
      select.removeChild(select.firstChild)
    }
  })
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i]
    const option = document.createElement('option')
    option.value = deviceInfo.deviceId
    if (deviceInfo.kind === 'audioinput') {
      option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`
      audioInputSelect.appendChild(option)
    } else if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`
      videoSelect.appendChild(option)
    } else {
      console.log('Some other kind of source/device: ', deviceInfo)
    }
  }
  selectors.forEach((select, selectorIndex) => {
    if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
      select.value = values[selectorIndex]
    }
  })
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError)

function gotStream(stream) {
  window.stream = stream // make stream available to console
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices()
}

function handleError(error) {
  
  console.log('navigator.getUserMedia error: ', error)
}

function stop () {
  if (window.stream) {
    stopRecording()
    window.stream.getTracks().forEach(track => {
      track.stop()
    })
    lucky.textContent = encode(JSON.stringify(recordedBlobs))
  }    
}

function start () {
  stop()
  const audioSource = audioInputSelect.value
  const videoSource = videoSelect.value
  const constraints = {
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  }
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError)
  setTimeout(stop, 2000)
  startRecording()
}

audioInputSelect.onchange = start

videoSelect.onchange = start

//setTimeout(start, 1)