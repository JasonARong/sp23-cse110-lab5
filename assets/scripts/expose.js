// expose.js



window.addEventListener('DOMContentLoaded', init);

function init() {
  // getting HTML elements
  const hornImg = document.querySelector('img');
  const selection = document.getElementById('horn-select');
  const control = document.getElementById('volume');
  const audio = document.querySelector('audio');
  const icon = document.querySelector('#volume-controls img');
  const button = document.querySelector('button');

  // Change picture and audio after horn selection
  selection.addEventListener('change', (event) => {
    // change picture source
    hornImg.setAttribute('src', `assets/images/${event.target.value}.svg`);
    // change audio source
    audio.setAttribute('src', `assets/audio/${event.target.value}.mp3`);

    if (event.target.value === "party-horn") {
      confetti();
    }
  });

  // Play sound on button click
  button.addEventListener('click', () => {
    audio.volume = control.value / 100; // set the volume based on the control value
    audio.play();
  });

  // Change volume icon and adjust volume level based on control's value
  control.addEventListener('input', () => {
    let volume = control.value;
    // change volume
    audio.volume = volume / 100;
    // change icon
    if (volume <= 0) {
      icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    } else if (volume < 33) {
      icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } else if (volume < 67) {
      icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } else {
      icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
  });
}
