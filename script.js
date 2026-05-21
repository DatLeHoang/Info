// script.js

// Animation simple khi load

window.addEventListener("load", () => {

  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const image = document.querySelector(".center-image");

  left.style.opacity = "0";
  right.style.opacity = "0";
  image.style.opacity = "0";

  left.style.transform = "translateX(-80px)";
  right.style.transform = "translateX(80px)";
  image.style.transform = "translate(-50%, -50%) scale(0.9)";

  setTimeout(() => {

    left.style.transition = "1s";
    right.style.transition = "1s";
    image.style.transition = "1.2s";

    left.style.opacity = "1";
    right.style.opacity = "1";
    image.style.opacity = "1";

    left.style.transform = "translateX(0)";
    right.style.transform = "translateX(0)";
    image.style.transform = "translate(-50%, -50%) scale(1)";

  }, 200);

});
