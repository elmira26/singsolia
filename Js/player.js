const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress-player');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const titleSub = document.querySelector('#title_sub');
const cover = document.querySelector('#cover');

// song titles
const songs =[
  
  {title:'Lead the way',
  titleSub: 'song by Mariah C'},
  {title:'No tears left to cry',
  titleSub:'song by Ariana G'},
  {title:'Listen',
   titleSub:'song by Beyonce' },
  {title:'Remedy',
  titleSub: 'song by Adele'},
 
  ];

// keep track of songs
let songIndex = 1;
let subIndex = 1;
//initially load song into Dom
loadSong(songs[songIndex]);

//update song details
function loadSong(song){
  console.log(song);
  console.log(song.title);
  console.log(song.titleSub);
  title.innerText = song.title;
  titleSub.innerText = song.titleSub;
  audio.src = `./music/${song.title}.mp3`;
  cover.src = `./img/${song.title}.svg`;
  console.log(audio.src)
}
// function loadSongSub(sub){
//   titleSub.innerText = sub;
//   audio.src = `../Music/${song}.mp3`;
//   cover.src = `../Img/${song}.png`;
// }


function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.uil').classList.remove('uil-play-circle');
  playBtn.querySelector('i.uil').classList.add('uil-pause');
  audio.play();
}

function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.uil').classList.add('uil-play-circle');
  playBtn.querySelector('i.uil').classList.remove('uil-pause');
  audio.pause();
}
function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong(){

  songIndex++;
  if(songIndex > songs.length - 1){
    songIndex = 0
  }
  loadSong(songs[songIndex]);
  playSong();
}
function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e){
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  
  audio.currentTime = (clickX / width) * duration;
}
//event listeners
playBtn.addEventListener('click', ()=>{
  const isPlaying = musicContainer.classList.contains('play');
  if(isPlaying){
    pauseSong()
  }else{
    playSong()
  }
})
//change prev next
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress )

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong);