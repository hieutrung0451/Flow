let song = document.querySelectorAll(".song");
let song1 = document.querySelector(".song1");
let song2 = document.querySelector(".song2");
let song3 = document.querySelector(".song3");
let song4 = document.querySelector(".song4");
let song5 = document.querySelector(".song5");
let song6 = document.querySelector(".song6");
let song7 = document.querySelector(".song7");
let song8 = document.querySelector(".song8");
let song9 = document.querySelector(".song9");
let song10 = document.querySelector(".song10");
let song11 = document.querySelector(".song11");
let song12 = document.querySelector(".song12");

let playBtn = document.querySelectorAll(".play_inner");
let playBtn1 = document.querySelector("#play_inner1");
let playBtn2 = document.querySelector("#play_inner2");
let playBtn3 = document.querySelector("#play_inner3");
let playBtn4 = document.querySelector("#play_inner4");
let playBtn5 = document.querySelector("#play_inner5");
let playBtn6 = document.querySelector("#play_inner6");
let playBtn7 = document.querySelector("#play_inner7");
let playBtn8 = document.querySelector("#play_inner8");
let playBtn9 = document.querySelector("#play_inner9");
let playBtn10 = document.querySelector("#play_inner10");
let playBtn11 = document.querySelector("#play_inner11");
let playBtn12 = document.querySelector("#play_inner12");
let volume_slider1 = document.querySelector(".volume_slider1");
let volume_slider2 = document.querySelector(".volume_slider2");
let volume_slider3 = document.querySelector(".volume_slider3");
let volume_slider4 = document.querySelector(".volume_slider4");
let volume_slider5 = document.querySelector(".volume_slider5");
let volume_slider6 = document.querySelector(".volume_slider6");
let volume_slider7 = document.querySelector(".volume_slider7");
let volume_slider8 = document.querySelector(".volume_slider8");
let volume_slider9 = document.querySelector(".volume_slider9");
let volume_slider10 = document.querySelector(".volume_slider10");
let volume_slider11 = document.querySelector(".volume_slider11");
let volume_slider12 = document.querySelector(".volume_slider12");

let allVolume = document.querySelector('allVolume');
let isPlaying = true;

let showHiddenVolume = document.querySelectorAll('.volume');
let showHiddenVolume1 = document.querySelector('.volume_1')
let showHiddenVolume2 = document.querySelector('.volume_2')
let showHiddenVolume3 = document.querySelector('.volume_3')   
let showHiddenVolume4 = document.querySelector('.volume_4')
let showHiddenVolume5 = document.querySelector('.volume_5')
let showHiddenVolume6 = document.querySelector('.volume_6')
let showHiddenVolume7 = document.querySelector('.volume_7')
let showHiddenVolume8 = document.querySelector('.volume_8')
let showHiddenVolume9 = document.querySelector('.volume_9')
let showHiddenVolume10 = document.querySelector('.volume_10')
let showHiddenVolume11 = document.querySelector('.volume_11')
let showHiddenVolume12 = document.querySelector('.volume_12')


// Top Menu
let clearBtn = document.querySelector(".clear-button");
let playlistBtn = document.querySelector(".playlist-btn");
let musicBtn = document.querySelector(".music-btn");
let musicPlaylist = document.querySelector(".music-playlist");


// Set volume cho từng âm thanh
function setVolume(){
  song1.volume = volume_slider1.value / 100;
  song2.volume = volume_slider2.value / 100;
  song3.volume = volume_slider3.value / 100;
  song4.volume = volume_slider4.value / 100;
  song5.volume = volume_slider5.value / 100;
  song6.volume = volume_slider6.value / 100;
  song7.volume = volume_slider7.value / 100;
  song8.volume = volume_slider8.value / 100;
  song9.volume = volume_slider9.value / 100;
  song10.volume = volume_slider10.value / 100;
  song11.volume = volume_slider11.value / 100;
  song12.volume = volume_slider12.value / 100;
}

//

// Click icon để nghe và tắt
playBtn1.onclick = function playPause(){
  if (isPlaying){
    showHiddenVolume1.style.display = 'block';
    playBtn1.style.color = "#498374";
    song1.play();
    isPlaying = false;
  } else {
    showHiddenVolume1.style.display = 'none'; 
    playBtn1.style.color = "#000";
    song1.pause();
    isPlaying = true;
  }
}

playBtn2.onclick = function playPause(){
  if (isPlaying){
    showHiddenVolume2.style.display = 'block';
    playBtn2.style.color = "#498374";
    song2.play();
    isPlaying = false;
  } else {
    showHiddenVolume2.style.display = 'none';
    playBtn2.style.color = "#000";
    song2.pause();
    isPlaying = true;
  }
}

playBtn3.onclick = function playPause(){
  if (isPlaying){
    song3.play();
    showHiddenVolume3.style.display = 'block';
    playBtn3.style.color = "#498374";
    isPlaying = false;
  } else {
    song3.pause();
    showHiddenVolume3.style.display = 'none';
    playBtn3.style.color = "#000";
    isPlaying = true;
  }
}

playBtn4.onclick = function playPause(){
  if (isPlaying){
    song4.play();
    showHiddenVolume4.style.display = 'block';
    playBtn4.style.color = "#498374";
    isPlaying = false;
  } else {
    song4.pause();
    showHiddenVolume4.style.display = 'none';
    playBtn4.style.color = "#000";
    isPlaying = true;
  }
}


playBtn5.onclick = function playPause(){
  if (isPlaying){
    song5.play();
    showHiddenVolume5.style.display = 'block';
    playBtn5.style.color = "#498374";
    isPlaying = false;
  } else {
    song5.pause();
    showHiddenVolume5.style.display = 'none';
    playBtn5.style.color = "#000";
    isPlaying = true;
  }
} 

playBtn6.onclick = function playPause(){
  if (isPlaying){
    song6.play();
    showHiddenVolume6.style.display = 'block';
    playBtn6.style.color = "#498374";
    isPlaying = false;
  } else {
    song6.pause();
    showHiddenVolume6.style.display = 'none';
    playBtn6.style.color = "#000";
    isPlaying = true;
  }
}

playBtn7.onclick = function playPause(){
  if (isPlaying){
    song7.play();
    showHiddenVolume7.style.display = 'block';
    playBtn7.style.color = "#498374";
    isPlaying = false;
  } else {
    song7.pause();
    showHiddenVolume7.style.display = 'none';
    playBtn7.style.color = "#000";
    isPlaying = true;
  }
}

playBtn8.onclick = function playPause(){
  if (isPlaying){
    song8.play();
    showHiddenVolume8.style.display = 'block';
    playBtn8.style.color = "#498374";
    isPlaying = false;
  } else {
    song8.pause();
    showHiddenVolume8.style.display = 'none';
    playBtn8.style.color = "#000";
    isPlaying = true;
  }
}

playBtn9.onclick = function playPause(){
  if (isPlaying){
    song9.play();
    showHiddenVolume9.style.display = 'block';
    playBtn9.style.color = "#498374";
    isPlaying = false;
  } else {
    song9.pause();
    showHiddenVolume9.style.display = 'none';
    playBtn9.style.color = "#000";
    isPlaying = true;
  }
}

playBtn10.onclick = function playPause(){
  if (isPlaying){
    song10.play();
    showHiddenVolume10.style.display = 'block';
    playBtn10.style.color = "#498374";
    isPlaying = false;
  } else {
    song10.pause();
    showHiddenVolume10.style.display = 'none';
    playBtn10.style.color = "#000";
    isPlaying = true;
  }
}

playBtn11.onclick = function playPause(){
  if (isPlaying){
    song11.play();
    showHiddenVolume11.style.display = 'block';
    playBtn11.style.color = "#498374";
    isPlaying = false;
  } else {
    song11.pause();
    showHiddenVolume11.style.display = 'none';
    playBtn11.style.color = "#000";
    isPlaying = true;
  }
}

playBtn12.onclick = function playPause(){
  if (isPlaying){
    song12.play();
    showHiddenVolume12.style.display = 'block';
    playBtn12.style.color = "#498374";
    isPlaying = false;
  } else {
    song12.pause();
    showHiddenVolume12.style.display = 'none';
    playBtn12.style.color = "#000";
    isPlaying = true;
  }
}

// Top menu
clearBtn.onclick = function clear() {
    for (let i = 0; i < song.length; i++) {
      song[i].pause();
      playBtn[i].style.color = "#000";
      showHiddenVolume[i].style.display = 'none';
    }
}

musicBtn.onclick = function showAndHidden() {
  musicPlaylist.style.display = "flex";
}

playlistBtn.onclick = function showAndHidden() {
  musicPlaylist.style.display = "none";
}