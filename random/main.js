/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

/*eslint-disable semi */
'use strict';

const videoElement = document.querySelector('video')
const audioInputSelect = document.querySelector('select#audioSource')
const videoSelect = document.querySelector('select#videoSource')
const selectors = [audioInputSelect, videoSelect]


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
//  videoElement.srcObject = stream
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices()
}

function handleError(error) {
  
  console.log('navigator.getUserMedia error: ', error)
}


function stop() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop()
    })
  }    
}

function start() {
  stop()
  const audioSource = audioInputSelect.value
  const videoSource = videoSelect.value
  const constraints = {
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  }
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError)
  setTimeout(stop, 2000)
}

audioInputSelect.onchange = start

videoSelect.onchange = start

setTimeout(start, 1)