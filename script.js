```javascript
// ==========================================
// 1. TYPING EFFECT (CHẠY TUẦN TỰ CẢ 4 DÒNG)
// ==========================================

const staticLines = [
  { id: "line1", text: "initializing portfolio..." },
  { id: "line2", text: "importing datasets..." },
  { id: "line3", text: "building dashboard..." }
];

const texts = [
  "SQL Specialist",
  "Power BI Developer",
  "Python Data Analyst",
  "Dashboard Builder"
];

let speed = 100;
let staticLineIndex = 0; 
let charIndex = 0;
let textIndex = 0; 

const typedText = document.getElementById("typed-text");

function typeStaticLines() {
  if (staticLineIndex < staticLines.length) {
    const currentLine = staticLines[staticLineIndex];
    const element = document.getElementById(currentLine.id);

    if (charIndex < currentLine.text.length) {
      element.textContent += currentLine.text.charAt(charIndex);
      charIndex++;
      setTimeout(typeStaticLines, speed);
    } else {
      staticLineIndex++;
      charIndex = 0;
      setTimeout(typeStaticLines, 300); 
    }
  } else {
    charIndex = 0;
    typeEffect();
  }
}

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (typedText.textContent.length > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    setTimeout(eraseEffect, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    charIndex = 0;
    setTimeout(typeEffect, 300);
  }
}

// Kích hoạt chạy hiệu ứng gõ chữ ngay khi tải trang
typeStaticLines();


// ==========================================
// 2. COUNTER ANIMATION (GIỮ NGUYÊN GỐC)
// ==========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});


// ==========================================
// 3. SCROLL FADE-IN ANIMATION
// ==========================================

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// ==========================================
// ===== MATRIX EFFECT ADDED =====
// ==========================================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "010101010101010101010101";
const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {

  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00f2fe";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {

    const text = letters.charAt(
      Math.floor(Math.random() * letters.length)
    );

    ctx.fillText(
      text,
      i * fontSize,
      drops[i] * fontSize
    );

    if (
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});
```
