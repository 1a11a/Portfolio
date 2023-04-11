const rotatingText = document.querySelector("#rotating-text");
const words = ["UI Designer", "UI/UX Developer", "Programmer", "Creator"];
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;

function type() {
  const word = words[currentWordIndex];
  const text = isDeleting ? word.slice(0, currentCharacterIndex - 1) : word.slice(0, currentCharacterIndex);
  rotatingText.textContent = text + (isDeleting ? "" : "|");
  
  if (!isDeleting && currentCharacterIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (isDeleting && currentCharacterIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    rotatingText.textContent = ""; // clear the text content before typing the new word
  }
  
  currentCharacterIndex += isDeleting ? -1 : 1;
  setTimeout(type, isDeleting ? 100 : 250);
}

type();
