function magicText() {
  let text = document.getElementById("userText").value;
  let output = document.getElementById("output");
  let sound = document.getElementById("typeSound");

  output.innerHTML = "";

  sound.currentTime = 0;
  sound.play();

  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.innerText = text[i];
    span.style.color = randomColor();
    span.style.animationDelay = `${i * 0.1}s`;

    output.appendChild(span);

    // 👇 Auto erase after 2 seconds
    setTimeout(() => {
      span.style.animation = "fadeOut 0.8s forwards";
    }, 2000);
  }

  // 👇 Full clear after fade
  setTimeout(() => {
    output.innerHTML = "";
    document.getElementById("userText").value = "";
  }, 2800);
}

function randomColor() {
  let colors = ["red", "orange", "yellow", "lime", "cyan", "pink", "violet"];
  return colors[Math.floor(Math.random() * colors.length)];
}
function playTypeSound() {
  let sound = document.getElementById("typeSound");

  sound.pause();          // stop previous
  sound.currentTime = 0;  // reset to start
  sound.volume = 0.2;     // safe volume
  sound.play();
}
