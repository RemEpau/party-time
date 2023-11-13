document.getElementsByClassName("party")[0].addEventListener("click", () => {
  let container = document.getElementsByTagName("main")[0];
  let canvas = document.createElement("canvas");

  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);
  confetti_button({
    particleCount: 10,
    spread: 360,
    startVelocity: 20,
    scalar: 1,
    ticks: 30,
    gravity: 0,
  })
})