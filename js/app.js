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

let allVolume = document.querySelector('.allVolume');
let mute_volume = document.querySelector('#mute_volume');
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

//relax button
 
function relax(){
  if(isPlaying){
    song[3].play();
    song[4].play();
    song[7].play();
    showHiddenVolume[3].style.display = 'block';
    showHiddenVolume[4].style.display = 'block';
    showHiddenVolume[7].style.display = 'block';
    isPlaying = false;
    playBtn[3].style.color = "#498374";
    playBtn[4].style.color = "#498374";
    playBtn[7].style.color = "#498374";}
    else {
      for (let i =0; i<12 ;i++){ 
        song[i].pause(),
        showHiddenVolume[i].style.display = 'none',
        isPlaying = true,
        playBtn[i].style.color = "#000"
     }
     }
 }


// function relax(){
//   if(isPlaying){
//     song[3].play();
//     song[4].play();
//     song[7].play();
//     showHiddenVolume[3].style.display = 'block';
//     showHiddenVolume[4].style.display = 'block';
//     showHiddenVolume[7].style.display = 'block';
//     isPlaying = false;
//     playBtn[3].style.color = "#498374";
//     playBtn[4].style.color = "#498374";
//     playBtn[7].style.color = "#498374";
//   } else if (isPlaying=true){ if( 

//     song[0].play(),
//     song[6].play(),
//     song[9].play(),
//     showHiddenVolume[0].style.display = 'block',
//     showHiddenVolume[6].style.display = 'block',
//     showHiddenVolume[9].style.display = 'block',
//     isPlaying = false,
//     playBtn[0].style.color = "#498374",
//     playBtn[6].style.color = "#498374",
//     playBtn[9].style.color = "#498374"
//     ){
//     song[3].pause(),
//     song[4].pause(),
//     song[7].pause(),
//     showHiddenVolume[3].style.display = 'none',
//     showHiddenVolume[4].style.display = 'none',
//     showHiddenVolume[7].style.display = 'none',
//     isPlaying = true,
//     playBtn[3].style.color = "#000",
//     playBtn[4].style.color = "#000",
//     playBtn[7].style.color = "#000"
   
//   } else {song[0].pause(),
//     song[6].pause(),
//     song[9].play(),
//     showHiddenVolume[0].style.display = 'none',
//     showHiddenVolume[6].style.display = 'block',
//     showHiddenVolume[9].style.display = 'block',
//     isPlaying = false,
//     playBtn[0].style.color = "#498374",
//     playBtn[6].style.color = "#498374",
//     playBtn[9].style.color = "#498374"}
   
//   }}
 function productivity(){
  if(isPlaying){
    song[0].play();
    song[1].play();
    song[6].play();
    showHiddenVolume[0].style.display = 'block';
    showHiddenVolume[1].style.display = 'block';
    showHiddenVolume[6].style.display = 'block';
    isPlaying = false;
    playBtn[0].style.color = "#498374";
   
    playBtn[1].style.color = "#498374";
    playBtn[6].style.color = "#498374";}
 else {
  for (let i =0; i<12 ;i++){ 

    song[i].pause(),
    showHiddenVolume[i].style.display = 'none',
    isPlaying = true,
    playBtn[i].style.color = "#000"
 }
 }}

 function noiseBlocker(){
  if(isPlaying){
    song[2].play();
    song[5].play();
    song[7].play();
    showHiddenVolume[2].style.display = 'block';
    showHiddenVolume[5].style.display = 'block';
    showHiddenVolume[7].style.display = 'block';
    isPlaying = false;
    playBtn[2].style.color = "#498374";
    playBtn[5].style.color = "#498374";
    playBtn[7].style.color = "#498374";}
    else {
      for (let i =0; i<12 ;i++){ 
        song[i].pause(),
        showHiddenVolume[i].style.display = 'none',
        isPlaying = true,
        playBtn[i].style.color = "#000"
     }
     }
 }
 
 function motivation(){
  if(isPlaying){
    song[4].play();
    song[6].play();
    song[10].play();
    showHiddenVolume[4].style.display = 'block';
    showHiddenVolume[6].style.display = 'block';
    showHiddenVolume[10].style.display = 'block';
    isPlaying = false;
    playBtn[4].style.color = "#498374";
    playBtn[6].style.color = "#498374";
    playBtn[10].style.color = "#498374";}
    else {
      for (let i =0; i<12 ;i++){ 
        song[i].pause(),
        showHiddenVolume[i].style.display = 'none',
        isPlaying = true,
        playBtn[i].style.color = "#000"
     }
     }
 }
  
 function sleep(){
  if(isPlaying){
    song[7].play();
    song[8].play();
    song[9].play();
    showHiddenVolume[7].style.display = 'block';
    showHiddenVolume[8].style.display = 'block';
    showHiddenVolume[9].style.display = 'block';
    isPlaying = false;
    playBtn[7].style.color = "#498374";
    playBtn[8].style.color = "#498374";
    playBtn[9].style.color = "#498374";}
    else {
      for (let i =0; i<12 ;i++){ 
        song[i].pause(),
        showHiddenVolume[i].style.display = 'none',
        isPlaying = true,
        playBtn[i].style.color = "#000"
     }
     }
 }

// 

// random sounds

function randomSong(){
  let randomSong = [
  
  ];
for( let i = 0; i<3; ){
  let randomIndex = Math.floor(Math.random()*12)
  for(let j = 0; j<randomSong.length;j++){
    if (randomSong[j]==randomIndex){
    
      break;
    
    }
  }
  i++
  randomSong.push(Math.floor(Math.random()*12))
}
  for(let i = 0; i<randomSong.length;i++ ){
    if (isPlaying){
      song[randomSong[i]].play();
      showHiddenVolume[randomSong[i]].style.display = 'block';
      playBtn[randomSong[i]].style.color = "#498374";
      isPlaying = false;
    } else {
    showHiddenVolume[randomSong[i]].style.display = 'none'; 
    playBtn[randomSong[i]].style.color = "#0000";
    song[randomSong[i]].pause();
    isPlaying = true;
    }
    console.log(randomSong[i]);
  }}
//



/// mute  nhạc
mute_volume.addEventListener('click',function(){

if(this.classList.contains('fa-volume-high')){
this.classList.replace('fa-volume-high','fa-volume-xmark')
song[0].volume=0;
song[1].volume=0;
song[2].volume=0;
song[3].volume=0;
song[4].volume=0;
song[6].volume=0;
song[6].volume=0;
song[7].volume=0;
song[8].volume=0;
song[9].volume=0;
song[10].volume=0;
song[11].volume=0;
} else{ this.classList.replace('fa-volume-xmark','fa-volume-high')
song[0].volume=1;
song[1].volume=1;
song[2].volume=1;
song[3].volume=1;
song[4].volume=1;
song[6].volume=1;
song[6].volume=1;
song[7].volume=1;
song[8].volume=1;
song[9].volume=1;
song[10].volume=1;
song[11].volume=1}
})

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
  // set volume tổng
 function setAllVolume(){
  song1.volume = allVolume.value / 100
  song2.volume = allVolume.value / 100
  song3.volume = allVolume.value / 100
  song4.volume = allVolume.value / 100
  song5.volume = allVolume.value / 100
  song6.volume = allVolume.value / 100
  song7.volume = allVolume.value / 100
  song8.volume = allVolume.value / 100
  song9.volume = allVolume.value / 100
  song10.volume = allVolume.value / 100
  song11.volume = allVolume.value / 100
  song12.volume = allVolume.value / 100
  
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