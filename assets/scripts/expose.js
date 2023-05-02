// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // getting HTML elements
  const hornImg = document.querySelector('img');
  const selection = document.getElementById('horn-select');
  const control = document.getElementById('volume');
  const audio = document.querySelector('audio');
  const icon = document.querySelector('#volume-controls img');


  // Change picture and audio after horn selection
  selection.addEventListener('change', (event) => {
    //console.log(event.target.value);
    // change picture source
    hornImg.setAttribute('src', `assets/images/${event.target.value}.svg`);
    // change audio source
    audio.setAttribute('src', `assets/audio/${event.target.value}.mp3`);
  });

  // Change volumn icon based on control's value
  control.addEventListener('change',() => {
    let volume = control.value;
    // change volume
    audio.setAttribute('volumn', `${volume/100}`);
    // change icon
    if(volume <= 0){
      icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
    }
    else if(1 <= volume && volume < 33){
      icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
    }
    else if(33 <= volume && volume < 67){
      icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
    }
    else if(67 <= volume){
      icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
  })
}