document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector("footer div");
const imgUrl = "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png";
if (!localStorage.getItem("ex12_img")) {
  localStorage.setItem("ex12_img", imgUrl);
}

const storedImg = localStorage.getItem("ex12_img");
if (storedImg) {
  const img = document.createElement("img");
  img.src = storedImg; // juste mettre l'URL
  img.style.maxWidth = "200px";
  container.appendChild(img);
}
})