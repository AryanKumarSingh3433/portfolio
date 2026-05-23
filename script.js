// script.js

// Typing Animation
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

    setTimeout(() => {

      index = 0;

      count++;

      type();

    }, 1000);

  } else {

    setTimeout(type, 150);

  }

})();


// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", async function(e) {

  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    successMsg.style.display = "block";
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }

}); 
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});
