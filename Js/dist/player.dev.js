"use strict";

var musicContainer = document.querySelector('.music-container');
var playBtn = document.querySelector('#play');
var prevBtn = document.querySelector('#prev');
var nextBtn = document.querySelector('#next');
var audio = document.querySelector('#audio');
var progress = document.querySelector('.progress-player');
var progressContainer = document.querySelector('.progress-container');
var title = document.querySelector('#title');
var titleSub = document.querySelector('#title_sub');
var cover = document.querySelector('#cover'); // song titles

var songs = [{
  title: 'My everything',
  titleSub: 'song by Ariana.G'
}, {
  title: 'Listen',
  titleSub: 'song by Beyonce'
}, {
  title: 'Remedy',
  titleSub: 'song by Adele'
}]; // keep track of songs

var songIndex = 1;
var subIndex = 1; //initially load song into Dom

loadSong(songs[songIndex]); //update song details

function loadSong(song) {
  console.log(song);
  console.log(song.title);
  console.log(song.titleSub);
  title.innerText = song.title;
  titleSub.innerText = song.titleSub;
  audio.src = "../music/".concat(song.title, ".mp3");
  cover.src = "../img/".concat(song.title, ".svg");
  console.log(audio.src);
} // function loadSongSub(sub){
//   titleSub.innerText = sub;
//   audio.src = `../Music/${song}.mp3`;
//   cover.src = `../Img/${song}.png`;
// }


function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.uil').classList.remove('uil-play-circle');
  playBtn.querySelector('i.uil').classList.add('uil-pause');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.uil').classList.add('uil-play-circle');
  playBtn.querySelector('i.uil').classList.remove('uil-pause');
  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  var _e$srcElement = e.srcElement,
      duration = _e$srcElement.duration,
      currentTime = _e$srcElement.currentTime;
  var progressPercent = currentTime / duration * 100;
  progress.style.width = "".concat(progressPercent, "%");
}

function setProgress(e) {
  var width = this.clientWidth;
  var clickX = e.offsetX;
  var duration = audio.duration;
  audio.currentTime = clickX / width * duration;
} //event listeners


playBtn.addEventListener('click', function () {
  var isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}); //change prev next

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);