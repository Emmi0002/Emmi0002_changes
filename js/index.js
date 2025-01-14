// Musik til videoen

const video = document.querySelector("video_HeroSection");

video.addEventListener("mouseover", () => {
  console.log("unmute")
  video.muted = false;
});

video.addEventListener("mouseout", () => {
  video.muted = true;
});

// Ovenstående arrow funktion forkortelse af følgende:

// video.addEventListener("mouseover", unmuteVideo);

// function unmuteVideo() {
//   video.muted = false;
// }

// video.addEventListener("mouseout", muteVideo);

// function muteVideo() {
//   video.muted = true;
// }

// Funktion til underline af menupunkter

document.querySelector("#indexLink").addEventListener("mouseover", underline1);
document.querySelector("#portfolioLink").addEventListener("mouseover", underline2);
document.querySelector("#kompetencerLink").addEventListener("mouseover", underline3);

function underline1() {
  console.log("underline1");
  document.querySelector("#indexLink").classList.add("underline_menu");
}

function underline2() {
  console.log("underline2");
  document.querySelector("#portfolioLink").classList.add("underline_menu");
}

function underline3() {
  console.log("underline3");
  document.querySelector("#kompetencerLink").classList.add("underline_menu");
}
