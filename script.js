// TYPING EFFECT

const texts = [
  "SQL Specialist",
  "Power BI Developer",
  "Python Data Analyst",
  "Dashboard Builder"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typedText = document.getElementById("typed-text");

function typeEffect(){

  if(charIndex < texts[textIndex].length){

    typedText.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, speed);

  }else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(typedText.textContent.length > 0){

    typedText.textContent =
      typedText.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);

  }else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 300);

  }

}

typeEffect();


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText =
        `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);

    }else{

      counter.innerText = target + "+";

    }

  };

  updateCounter();

});
