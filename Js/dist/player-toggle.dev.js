"use strict";

var navLi = document.querySelectorAll('.nav__li');
var audiosong = document.querySelector('#audio');
var song = audiosong.src;
var musiContainer = document.querySelector('.music-container');
var playerClose = document.querySelector('.music-container > .player__close');
var playerToggle = navLi.forEach(function (x) {
  var musiContainer = document.querySelector('.music-container');

  if (x.className === 'nav__li player__toggle') {
    x.addEventListener('click', function () {
      return musiContainer.classList.add('show');
    });
  } else {
    return;
  }
});
playerClose.addEventListener('click', function (audiosong) {
  musiContainer.classList.remove('show');
  pauseSong(audiosong);
  audiosong.currentTime = 0;
});
playerToggle;