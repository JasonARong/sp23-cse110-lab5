// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // getting HTML elements
  const hornImg = document.querySelector('img');
  const selection = document.getElementById('horn-select');
  const control = document.getElementById('volume-controls');
  const audio = document.querySelector('audio');

  // When the selected option changed, start change picture and audio
  selection.addEventListener('change', (event) => {
    //console.log(event.target.value);
    // change picture source
    hornImg.setAttribute('src', `assets/images/${event.target.value}.svg`);
    // change audio source
    audio.setAttribute('src', `assets/audio/${event.target.value}.mp3`);
  });
}