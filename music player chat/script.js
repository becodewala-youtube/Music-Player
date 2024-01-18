const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let songs = [
    { 
    title: 'Play Dead',
     artist: 'NEFFEX', 
     coverPath: 'https://dl.dropbox.com/s/6urej0ju11vi1uc/vinyl-record-isolated-removebg-preview.png?dl=0', 
     songPath: 'https://dl.dropbox.com/s/sb8aqglssgpj9o5/Play%20Dead%20-%20NEFFEX.mp3?dl=0' },

    {
     title: 'Take Me Back', 
    artist: 'NEFFEX', 
    coverPath: 'https://dl.dropbox.com/s/6urej0ju11vi1uc/vinyl-record-isolated-removebg-preview.png?dl=0', 
    songPath: 'https://dl.dropbox.com/s/5komtz5g6nvi2jk/Take%20Me%20Back%20-%20NEFFEX.mp3?dl=0' },
    // Add more songs as needed
];

let songIndex = 0;

function loadSong(songIndex) {
    title.textContent = songs[songIndex].title;
    artist.textContent = songs[songIndex].artist;
    cover.src = songs[songIndex].coverPath;
    audio.src = songs[songIndex].songPath;
}

function playSong() {
    audio.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
}

function pauseSong() {
    audio.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songIndex);
    playSong();
}

loadSong(songIndex);

playBtn.addEventListener('click', () => (audio.paused ? playSong() : pauseSong()));
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
