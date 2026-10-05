// ==========================================
// 1. TYPING EFFECT
// ==========================================

const staticLines = [
  {
    id: "line1",
    text: "Chào mừng tụi bây, khi đã bước đến nơi đây !!"
  },
  {
    id: "line2",
    text: "Wellome to.... ANH ĐẠT TỚI CHƠI"
  },
  {
    id: "line3",
    text: "Tụi bây đã bị 1 mình tao bao vây !! Lên nhạc :)))"
  }
];

const texts = [
  "Nếu như vào ngày đó, anh nói hết những điều anh nghĩ",
  "Thì giờ mình chẳng phải nổi đóa, với những vết cắt thâu đêm",
  "Mắt hoen lệ mi ướt, yêu thương của cuộc tình rơi xuống",
  "Nhìn người lạc vào dòng đời, trôi cùng những ký ức êm đềm"
];

let speed = 150;
let staticLineIndex = 0;
let charIndex = 0;
let textIndex = 0;

const typedText = document.getElementById("typed-text");


function typeStaticLines() {

  if (staticLineIndex < staticLines.length) {

    const currentLine =
      staticLines[staticLineIndex];

    const element =
      document.getElementById(
        currentLine.id
      );

    if (charIndex < currentLine.text.length) {

      element.textContent +=
        currentLine.text.charAt(charIndex);

      charIndex++;

      setTimeout(
        typeStaticLines,
        speed
      );

    } else {

      staticLineIndex++;

      charIndex = 0;

      setTimeout(
        typeStaticLines,
        300
      );

    }

  } else {

    charIndex = 0;

    typeEffect();
  }
}


function typeEffect() {

  if (
    charIndex <
    texts[textIndex].length
  ) {

    typedText.textContent +=
      texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(
      typeEffect,
      speed
    );

  } else {

    setTimeout(
      eraseEffect,
      1500
    );
  }
}


function eraseEffect() {

  if (
    typedText.textContent.length > 0
  ) {

    typedText.textContent =
      typedText.textContent.slice(0, -1);

    setTimeout(
      eraseEffect,
      50
    );

  } else {

    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(
      typeEffect,
      300
    );
  }
}


// Kích hoạt hiệu ứng gõ chữ
typeStaticLines();



// ==========================================
// 2. COUNTER ANIMATION
// ==========================================

const counters =
  document.querySelectorAll(".counter");


counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target =
      +counter.getAttribute(
        "data-target"
      );

    const current =
      +counter.innerText;

    const increment =
      target / 100;


    if (current < target) {

      counter.innerText =
        `${Math.ceil(
          current + increment
        )}`;

      setTimeout(
        updateCounter,
        20
      );

    } else {

      counter.innerText =
        target + "+";
    }

  };

  updateCounter();

});



// ==========================================
// 3. SCROLL FADE-IN ANIMATION
// ==========================================

const faders =
  document.querySelectorAll(
    ".fade-in"
  );


const appearOptions = {

  threshold: 0.15,

  rootMargin:
    "0px 0px -40px 0px"
};


const appearOnScroll =
  new IntersectionObserver(
    function(entries, observer) {

      entries.forEach(entry => {

        if (!entry.isIntersecting)
          return;


        entry.target.classList.add(
          "appear"
        );


        observer.unobserve(
          entry.target
        );

      });

    },
    appearOptions
  );


faders.forEach(fader => {

  appearOnScroll.observe(
    fader
  );

});
