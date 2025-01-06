
const video = document.querySelector(".video_HeroSection");

video.addEventListener("mouseover", () => {
  video.muted = false;
});

video.addEventListener("mouseout", () => {
  video.muted = true;
});
