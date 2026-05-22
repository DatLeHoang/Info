// ==========================================
// 1. TYPING EFFECT (CHẠY TUẦN TỰ CẢ 4 DÒNG)
// ==========================================

// Nội dung chữ chạy của 3 dòng đầu tiên
const staticLines = [
  { id: "line1", text: "initializing portfolio..." },
  { id: "line2", text: "importing datasets..." },
  { id: "line3", text: "building dashboard..." }
];

// Mảng chữ thay đổi liên tục của dòng thứ 4
const texts = [
  "SQL Specialist",
  "Power BI Developer",
  "Python Data Analyst",
  "Dashboard Builder"
];

let speed = 100;
let staticLineIndex = 0; // Quản lý xem đang gõ dòng cố định nào (0, 1, 2)
let charIndex = 0;
let textIndex = 0; // Quản lý mảng chữ của dòng 4

const typedText = document.getElementById("typed-text");

// Hàm gõ tuần tự 3 dòng đầu
function typeStaticLines() {
  if (staticLineIndex < staticLines.length) {
    const currentLine = staticLines[staticLineIndex];
    const element = document.getElementById(currentLine.id);

    if (charIndex < currentLine.text.length) {
      element.textContent += currentLine.text.charAt(charIndex);
      charIndex++;
      setTimeout(typeStaticLines, speed);
    } else {
      // Khi gõ xong một dòng tĩnh hoàn chỉnh -> chuyển sang dòng tiếp theo
      staticLineIndex++;
      charIndex = 0;
      setTimeout(typeStaticLines, 300); // Nghỉ 300ms trước khi gõ dòng mới
    }
  } else {
    // Đã gõ xong 3 dòng đầu, bắt đầu kích hoạt hiệu ứng gõ/xóa của dòng 4
    charIndex = 0;
    typeEffect();
  }
}

// Hàm gõ chữ dòng thứ 4 (Logic gốc của bạn)
function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

// Hàm xóa chữ dòng thứ 4 (Logic gốc của bạn)
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
