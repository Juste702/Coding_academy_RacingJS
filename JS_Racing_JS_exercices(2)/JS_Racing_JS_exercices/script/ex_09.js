document.addEventListener("DOMContentLoaded", () => {
  const footerDivs = document.querySelectorAll("footer > div");
  if (!footerDivs || footerDivs.length < 2) return;

  const canvasContainer = footerDivs[0];
  const infoDiv = footerDivs[1];
  const canvas = canvasContainer.querySelector("canvas");
  if (!canvas) return;

  if (getComputedStyle(canvasContainer).position === "static") {
    canvasContainer.style.position = "relative";
  }
  canvas.style.position = "absolute";
  canvas.style.left = "0px";
  canvas.style.top  = "0px";
  canvas.style.cursor = "grab";

  let isDragging = false, offsetX = 0, offsetY = 0;

  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  canvas.addEventListener("mousedown", e => {
    e.preventDefault();
    isDragging = true;
    const rect = canvas.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    canvas.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    const cRect = canvasContainer.getBoundingClientRect();
    let x = e.clientX - cRect.left - offsetX;
    let y = e.clientY - cRect.top  - offsetY;

    x = clamp(x, 0, cRect.width  - canvas.offsetWidth);
    y = clamp(y, 0, cRect.height - canvas.offsetHeight);

    canvas.style.left = x + "px";
    canvas.style.top  = y + "px";
    if (infoDiv) infoDiv.textContent = `Coords: {x:${Math.round(x)}, y:${Math.round(y)}}`;
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    canvas.style.cursor = "grab";
  });
});

