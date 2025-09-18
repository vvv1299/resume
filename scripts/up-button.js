"use strict";

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 750) {
    console.log(window.pageYOffset);
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};