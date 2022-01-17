const headerOpenToggle = document.querySelector(".header_open");
const headerMenu = document.querySelector(".header_menu");
const darkMode = document.querySelector(".iconBox");
const modeBg = document.querySelector(".dark-mode");
// Open header list
headerOpenToggle.onclick = () => {
  headerMenu.classList.toggle("active");
  headerOpenToggle.classList.toggle("active");
};

// Dark mode
darkMode.onclick = () => {
  modeBg.classList.toggle("active");
};

const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");

const prevBtn = document.querySelector("#prev");

const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");

//song title

const songs = [
  "Kimi ga Kureta Mono ~ Anohana",
  "Koi wo Shita no wa ~ Silent Voice",
  "Reescaled ~ Rent A Girlfriend",
  "Sparkle ~ Your Name",
  "Wotaku ni koi wa muzukashii  ~ OP",
  "Orange ~ Your Lie In April",
];

let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

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

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// event listeners

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// change song events

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", () => {
  var currentTime = audio.currentTime;
  var duration = audio.duration;
  $(".progress")
    .stop(true, true)
    .animate({ width: (currentTime / duration) * 100 + "%" }, 100, "linear");
});

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
});
