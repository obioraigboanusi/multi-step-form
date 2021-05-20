"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const defaultSlide = document.querySelector(".default-slide");
  const form = document.querySelector("form");
  const nextBtns = document.getElementsByClassName("next");
  const prevBtns = document.getElementsByClassName("prev");
  const progressBars = document.getElementsByClassName("step");
 
  const radioElements = document.querySelectorAll("input[type=radio]");

  const confirmSubmitBtn = document.getElementById("confirm-submit");
  const returnToEdithBtn = document.getElementById("return-to-edith");

  let currentSlide = 1;

  // Handle next buttons click
  for (let i = 0; i <= nextBtns.length - 1; i++) {
    nextBtns[i].addEventListener("click", (e) => {
      if (i === nextBtns.length - 1) {
        e.preventDefault();

       // preview form at the end of the slide
        progressForward();
        previewForm();
      } else {
        // slide forward
        e.preventDefault();
        slideForward(i);
        progressForward();
      }
    });
  }
// handle previous button click
  for (let i = 0; i <= prevBtns.length - 1; i++) {
    prevBtns[i].addEventListener("click", (e) => {
      e.preventDefault();
      slideBackward(i);
      progressBackward();
    });
  }

  confirmSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("submit.html");
  });
  returnToEdithBtn.addEventListener("click", (e) => {
    e.preventDefault();
    progressBackward();
    returnToEdithForm();
  });
  function slideForward(slideIndex) {
    defaultSlide.style.marginLeft = calcMarginLeftForward(slideIndex);
  }
  function slideBackward(slideIndex) {
    defaultSlide.style.marginLeft = calcMarginLeftBack(slideIndex);
  }

  function calcMarginLeftForward(slideIndex) {
    let num = slideIndex + 1;
    return `-${20 * num}%`;
  }
  function calcMarginLeftBack(slideIndex) {
    return `-${20 * slideIndex}%`;
  }
  function progressForward() {
    progressBars[currentSlide - 1].classList.add("active");
    currentSlide += 1;
  }
  function progressBackward() {
    progressBars[currentSlide - 2].classList.remove("active");
    currentSlide -= 1;
  }
  function previewForm() {
    form.classList.remove("slide-mode");
    form.classList.add("preview-mode");
    defaultSlide.style.marginLeft = "0%";

//disable radio buttons
    for (let i = 0; i < radioElements.length; i++) {
      radioElements[i].setAttribute("disabled", "true");
    }
  }

  function returnToEdithForm() {
    form.classList.add("slide-mode");
    form.classList.remove("preview-mode");
    defaultSlide.style.marginLeft = "-80%";

//enable radio buttons
    for (let i = 0; i < radioElements.length; i++) {
      radioElements[i].setAttribute("disabled", "false");
    }
  }
});
