document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  // Dessin du triangle avec un bord de 1px
  ctx.beginPath();
  ctx.moveTo(6, 6);
  ctx.lineTo(14, 10);
  ctx.lineTo(6, 14);
  ctx.closePath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Chargement du son
  const audio = new Audio("./triangle.ogg");

  // Détection clic dans le triangle
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (ctx.isPointInPath(x, y)) {
      audio.play();
    }
  });

  // Boutons
  const [pauseBtn, stopBtn, muteBtn] = document.querySelectorAll("footer button");

  pauseBtn.addEventListener("click", () => {
    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0; // revient au début
  });

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "Unmute" : "Mute";
  });
});