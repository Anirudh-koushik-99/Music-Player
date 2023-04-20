const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//Song titles
const songs  = ['audio1', 'audio2', 'audio3', 'audio4', 'audio5'];

//keep track of song
let songIndex = 2;

//Initially load song
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp4`
    cover.src = `background/${song}.jpeg`
}


