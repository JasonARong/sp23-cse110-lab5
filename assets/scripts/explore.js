// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("select");
  const inputTxt = document.querySelector("textarea");
  const speakBtn = document.querySelector("button");

  // initialize a SpeechSynthesis
  const synth = window.speechSynthesis;

  let voices = [];
  function populateVoiceList() {
    // Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.
    voices = synth.getVoices();
    //console.log(voices.length);
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  //populateVoiceList();
  
  // check whether the onvoiceschanged event is supported by the browser
  if (speechSynthesis.onvoiceschanged !== undefined) {
    // when the onvoiceschanged event is triggered, the populateVoiceList callback function will be called
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  let selectedVoice;
  voiceSelect.addEventListener('change', (event) =>{
    // get the name of the selected voice
    const selectedOption = event.target.selectedOptions[0].getAttribute("data-name")
    //console.log(selectedOption);
    // find the selected voice in the voices array, and apply to the speech
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        //console.log(voices[i].name);
        selectedVoice = voices[i];
      }
    }

  })

  speakBtn.addEventListener('click',() => {
    //console.log('pressed');
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.voice = selectedVoice;
    synth.speak(utterThis);
  
    inputTxt.blur();
  })
}