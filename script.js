// script.js

// Typing Animation
const text = ["Web Developer", "Programmer", "CSE Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type, 150);

})();


// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


