document.getElementsByClassName("party")[0].addEventListener("click", () => {
  let container = document.getElementsByTagName("main")[0];
  let canvas = document.createElement("canvas");
  const audioHorn = document.getElementById("audio");

  const randomPitch = Math.random() * (1.15 - 0.85) + 0.85;
  audioHorn.playbackRate = randomPitch;
  audioHorn.preservesPitch = false;
  audioHorn.volume = 0.5;
  audioHorn.play();

  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);
  confetti_button({
    particleCount: 50,
    spread: 360,
    startVelocity: 20,
    scalar: 0.8,
    ticks: 30,
    gravity: .3,
  })


})