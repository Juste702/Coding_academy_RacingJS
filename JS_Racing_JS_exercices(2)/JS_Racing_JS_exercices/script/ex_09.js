document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const display = document.querySelectorAll("footer div")[1];

  let isDraggin = false;
  let offsetX, offsetY;

  /* display.style.position = "relative"; */
  /* canvas.style.position = "absolute"; */
  canvas.style.left = "0px";
  canvas.style.top = "0px";

  canvas.addEventListener("mousedown", e => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    isDraggin = true;

  });

  canvas.addEventListener("mousemove", e => {
    if (!isDraggin) return;

   /*  let displayRect = display.getBoundingClientRect();
    let canvasRect = canvas.getBoundingClientRect(); */

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Empêcher de sortir du canvas
   /*  if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + canvasRect.width > displayRect.width)
      x = displayRect.width - canvas.width;
    if (y + canvasRect.height > displayRect.height)
      y = displayRect.height - canvas.height; */

    canvas.style.left = x + "px";
    canvas.style.top = y + "px";

    display.textContent = `New coordinates => {x:${x}, y:${y}}`;

  });

  canvas.addEventListener("mouseup", () => {
    isDraggin = false;
  });

})
/* const ctx = canvas.getContext("2d");

// On suppose que le carré existe déjà : récupérons sa position via un objet
const square = {
  x: 50, // position initiale approximative
  y: 50,
  size: 40
};

let dragging = false;
let offsetX = 0;
let offsetY = 0;

function updateCoords() {
  coordDiv.textContent = `New coordinates => {x:${square.x}, y:${square.y}}`;
}

function isInsideSquare(mx, my) {
  return (
    mx >= square.x &&
    mx <= square.x + square.size &&
    my >= square.y &&
    my <= square.y + square.size
  );
}

canvas.addEventListener("mousedown", e => {
  const mx = e.offsetX;
  const my = e.offsetY;
  if (isInsideSquare(mx, my)) {
    dragging = true;
    offsetX = mx - square.x;
    offsetY = my - square.y;
  }
});

canvas.addEventListener("mousemove", e => {
  if (dragging) {
    square.x = e.offsetX - offsetX;
    square.y = e.offsetY - offsetY;

    // Empêcher de sortir du canvas
    if (square.x < 0) square.x = 0;
    if (square.y < 0) square.y = 0;
    if (square.x + square.size > canvas.width)
      square.x = canvas.width - square.size;
    if (square.y + square.size > canvas.height)
      square.y = canvas.height - square.size;

    // On redessine le carré (optionnel si CSS déjà gère la couleur)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(square.x, square.y, square.size, square.size);

    updateCoords();
  }
});

canvas.addEventListener("mouseup", () => {
  dragging = false;
});

canvas.addEventListener("mouseleave", () => {
  dragging = false;
});

// Affiche les coordonnées initiales
updateCoords();
}); */