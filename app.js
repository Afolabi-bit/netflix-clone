var faq = document.querySelectorAll(".faq");
var answersNodelist = document.querySelectorAll(".answer");
var linesBtn = document.querySelectorAll(".lines");

var removeShow = function () {
  answersNodelist.forEach((item) => item.classList.remove("show"));
};

var removeRotate = function () {
  linesBtn.forEach((item) => item.classList.remove("rotate"));
};

var openAnswer = function () {
  //dynamically select the answer contents
  let answer = document.querySelector(`#${this.id}-answer`);
  //check if answer is open, opens if not, closes all other opened answers.
  if (answer.classList.contains("show")) {
    removeShow();
  } else {
    removeShow();
    answer.classList.add("show");
  }

  //rotate the buttons

  let button = document.querySelector(`#${this.id}-btn`);

  if (button.classList.contains("rotate")) {
    removeRotate();
  } else {
    removeRotate();
    button.classList.add("rotate");
  }
};

faq.forEach((item) => item.addEventListener("click", openAnswer));

console.log("Thanks for checking up to this point... Love!");
