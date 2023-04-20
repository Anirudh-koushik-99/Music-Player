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
let songIndex = 4;

//Initially load song
loadSong(songs[songIndex])

//Update song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp4`
    cover.src = `background/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause();
}

function prevSong(){
    songIndex = songIndex - 1;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong();
}

function nextSong(){
    songIndex = songIndex + 1;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong();
}

//Event Listeners
playBtn.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

