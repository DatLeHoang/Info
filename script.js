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
// 3. SCROLL FADE-IN ANIMATION (HIỆU ỨNG CUỘN HIỂN THỊ)
// ==========================================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.15,          // Phần tử xuất hiện 15% diện tích thì kích hoạt
  rootMargin: "0px 0px -40px 0px" // Kích hoạt sớm hơn một chút trước khi chạm đáy màn hình
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    // Thêm class 'appear' để kích hoạt hiệu ứng CSS trượt và hiện hình
    entry.target.classList.add('appear');
    // Đã xuất hiện rồi thì không cần theo dõi nữa (tăng hiệu năng trang web)
    observer.unobserve(entry.target); 
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
