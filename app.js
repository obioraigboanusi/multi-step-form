"use strict";
const defaultSlide = document.querySelector(".default-slide");

const nextBtns = document.getElementsByClassName("next");
const prevBtns = document.getElementsByClassName("prev");
const progressBars = document.getElementsByClassName("step");
const inputFields = document.getElementsByClassName("field");
const formFields = document.getElementsByClassName("form-field");

let currentSlide = 1;

// Handle next buttons click
console.log(nextBtns.length)
for (let i = 0; i <= nextBtns.length - 1; i++) {
  nextBtns[i].addEventListener("click", (e) => {
    if (i + 1 === nextBtns.length) {
      e.preventDefault();

      //submit form
      alert("Success!!! You have submited the form");
    } else {
      //slide forward
      e.preventDefault();
      slideForward(i);
      progressForward()
    }
  });
}
for (let i = 0; i <= prevBtns.length - 1; i++) {
  prevBtns[i].addEventListener("click", (e) => {
    e.preventDefault();
    slideBackward(i);
    progressBackward()
  });
}
console.log(inputFields)
for (let i = 0; i <= inputFields.length; i++) {
  // if (inputFields[i].value) {
  //   formFields[i].classList.add('active')
  // } else {
  //   formFields[i].classList.remove('active')
  // }
}

function slideForward(slideIndex) {
  defaultSlide.style.marginLeft = calcMarginLeftForward(slideIndex);
}
function slideBackward(slideIndex) {
  defaultSlide.style.marginLeft = calcMarginLeftBack(slideIndex);
}
console.log(((100/600)*100))
function calcMarginLeftForward(slideIndex) {
  let num = slideIndex + 1;
  return `-${ ((100/600)*100) * num}%`;
}
function calcMarginLeftBack(slideIndex) {
  return `-${((100/600)*100) * slideIndex}%`;
}
function progressForward() {
  progressBars[currentSlide - 1].classList.add("active");
  currentSlide += 1
}
function progressBackward() {
  progressBars[currentSlide - 2].classList.remove("active");
  currentSlide -= 1
}
