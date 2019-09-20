var list, arr // for poor debugging
shuffle()

function shuffle() {
  list = document.getElementById('random')
  arr = list.innerHTML.split('\n')
  shuffleArray(arr)
  list.innerHTML = arr.join('\n')
}

// from https://stackoverflow.com/a/12646864/274502 how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
