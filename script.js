console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Aaja We Mahiya x Bewafa(Remix) ",    filePath:"songs/1.mp3", coverPath:"covers/1.PNG"},
    {songName:"Nashe Si Chadh Gayi | Full Song ",   filePath:"songs/2.mp3", coverPath:"covers/2.PNG"},
    {songName:"Saiyaara Full Song | Ek Tha Tiger ", filePath:"songs/3.mp3", coverPath:"covers/3.PNG"},
    {songName:"Pal Lyric Video -|Arijit Singh",     filePath:"songs/4.mp3", coverPath:"covers/4.PNG"},
    {songName:" Sultan Song | KGF | Yash Raj" ,     filePath:"songs/5.mp3", coverPath:"covers/5.PNG"},
    {songName:"Swag Se Swagat | Tiger Zinda Hai",   filePath:"songs/6.mp3", coverPath:"covers/6.PNG"},
    {songName:"Love Dose  | Yo Yo Honey Singh",     filePath:"songs/7.mp3", coverPath:"covers/7.PNG"},
    {songName:"BLUE EYES | YO YO HONEY SINGH ",     filePath:"songs/8.mp3", coverPath:"covers/8.PNG"},
    {songName:"Badshah - Jugnu | Nikhita Gandhi",   filePath:"songs/9.mp3", coverPath:"covers/9.PNG"},
    {songName:"Give Me Some Sunshine | 3 Idiots",  filePath:"songs/10.mp3", coverPath:"covers/10.PNG"},

]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

