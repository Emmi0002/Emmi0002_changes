window.addEventListener("load", start);

const BGSound = document.querySelector("#snd1");
const Sound = document.querySelector("#sound");
const MuteSound = document.querySelector("#sound_mute");

function start() {
  // sound on and off

  Sound.classList.add("hide");
  Sound.addEventListener("click", stopSound);
  MuteSound.addEventListener("click", startSound);
}

function stopSound() {
  console.log("stopSound");
  Sound.classList.add("hide");
  MuteSound.classList.remove("hide");
  BGSound.pause();
}

function startSound() {
  console.log("startSound");
  Sound.classList.remove("hide");
  MuteSound.classList.add("hide");
  BGSound.currentTime = 0;
  BGSound.play();
  BGSound.addEventListener("ended", loopSound_start);
}

function loopSound_start() {
  console.log("loopSound");
  BGSound.play();
}
// ******************************************
// Tidligere kode til at få musik til videoen
// ******************************************

const video = document.querySelector("video_HeroSection");

video.addEventListener("mouseover", () => {
  console.log("unmute");
  video.muted = false;
});

video.addEventListener("mouseout", () => {
  video.muted = true;
});
