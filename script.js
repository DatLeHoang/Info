// script.js

const hero = document.querySelector(".hero");
const centerImage = document.querySelector(".center-image img");

let isDown = false;
let startX = 0;
let currentX = 0;

// Kéo ảnh

hero.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.clientX;
});

window.addEventListener("mouseup", () => {
  isDown = false;

  // Tự quay về giữa
  centerImage.style.transition = "0.5s ease";
  centerImage.style.transform = "translateX(0px)";

  setTimeout(() => {
    centerImage.style.transition = "0s";
  }, 500);
});

window.addEventListener("mousemove", (e) => {

  if (!isDown) return;

  currentX = e.clientX - startX;

  // Giới hạn kéo
  if(currentX > 250) currentX = 250;
  if(currentX < -250) currentX = -250;

  centerImage.style.transform = `translateX(${currentX}px)`;

});


// Mobile support

hero.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].clientX;
});

window.addEventListener("touchend", () => {
  isDown = false;

  centerImage.style.transition = "0.5s ease";
  centerImage.style.transform = "translateX(0px)";

  setTimeout(() => {
    centerImage.style.transition = "0s";
  }, 500);
});

window.addEventListener("touchmove", (e) => {

  if (!isDown) return;

  currentX = e.touches[0].clientX - startX;

  if(currentX > 250) currentX = 250;
  if(currentX < -250) currentX = -250;

  centerImage.style.transform = `translateX(${currentX}px)`;

});
