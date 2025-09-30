

const navLi =  document.querySelectorAll('.nav__li');
const audiosong = document.querySelector('#audio');
 let song = audiosong.src;
const musiContainer = document.querySelector('.music-container');
const playerClose = document.querySelector('.music-container > .player__close');
const playerToggle = navLi.forEach(x => {
  const musiContainer = document.querySelector('.music-container');
  if(x.className === 'nav__li player__toggle'){
    x.addEventListener('click', () => musiContainer.classList.add('show'))
  }
    else{
      return;
    }
  });
   playerClose.addEventListener('click', function(audiosong){ 
   musiContainer.classList.remove('show');
   pauseSong(audiosong);
   audiosong.currentTime = 0;

   })
  

playerToggle;


