document.addEventListener("DOMContentLoaded", () => {
  const colors = ["orange", "purple", "black", "green"];
  const container = document.querySelector("footer div");
  const canvases = document.querySelectorAll("canvas");
  const orange = [];
  const purple = [];
  const black = [];
  const green = [];

  function rgbToColorName(rgb) {
    const colors = {
      "rgb(255, 165, 0)": "orange",
      "rgb(128, 0, 128)": "purple",
      "rgb(0, 0, 0)": "black",
      "rgb(128, 128, 0)": "green"
    };
    return colors[rgb] || "";
  }
  for (i = 0; i < canvases.length; i++) {
    const color = getComputedStyle(canvases[i]).backgroundColor;
    if (rgbToColorName(color) === "orange") {
      canvases[i].style.backgroundColor = "rgb(255, 165, 0)";
      orange.push(canvases[i]);
    }
    if (rgbToColorName(color) === "purple") {
      canvases[i].style.backgroundColor = "rgb(128, 0, 128)";
      purple.push(canvases[i],);
    }
    if (rgbToColorName(color) === "black") {
      canvases[i].style.backgroundColor = "rgb(0, 0, 0)";
      black.push(canvases[i]);
    }
    if (rgbToColorName(color) === "green") {
      canvases[i].style.backgroundColor = "rgb(128, 128, 0)";
      green.push(canvases[i]);
    }

  }
  container.innerHTML = "";

  const ordered = [].concat(orange, purple, black, green);

  for (i = 0; i < ordered.length; i++) {
    container.appendChild(ordered[i]);
  }
});