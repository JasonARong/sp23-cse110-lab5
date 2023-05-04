// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("select");
  const inputTxt = document.querySelector("textarea");
  const speakBtn = document.querySelector("button");
const faceImg = document.querySelector("img");
  faceImg.setAttribute("src", "assets/images/smiling.png");
  const exploreSection = document.querySelector("#explore");
  exploreSection.insertBefore(faceImg, exploreSection.firstChild);

  // initialize a SpeechSynthesis
  const synth = window.speechSynthesis;

  let voices = [];
  let selectedVoice;

  function populateVoiceList() {
    // Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.
    voices = synth.getVoices();

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

  // check whether the onvoiceschanged event is supported by the browser
  if (speechSynthesis.onvoiceschanged !== undefined) {
    // when the onvoiceschanged event is triggered, the populateVoiceList callback function will be called
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakBtn.addEventListener('click',() => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.voice = selectedVoice;
    synth.speak(utterThis);
    faceImg.setAttribute("src", "assets/images/smiling-open.png");

    utterThis.onend = function() {
      faceImg.setAttribute("src", "assets/images/smiling.png");
    };
    inputTxt.blur();
  });

  voiceSelect.addEventListener('change', (event) =>{
    // get the name of the selected voice
    const selectedOption = event.target.selectedOptions[0].getAttribute("data-name")

    // find the selected voice in the voices array, and apply to the speech
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        selectedVoice = voices[i];
      }
    }
  });
}
