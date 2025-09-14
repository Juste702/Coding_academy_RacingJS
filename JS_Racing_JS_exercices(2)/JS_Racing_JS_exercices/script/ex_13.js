document.addEventListener("DOMContentLoaded", () => {
  const footerDiv = document.querySelector("footer div");
  /*   const storageKey = "ex12_img";
   */
  localStorage.setItem("ex12_img",
    "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
  const imgData = localStorage.getItem("ex12_img");

  if (!imgData) return; // rien à faire si pas d'image

  // Créer et afficher l'image
  const img = document.createElement("img");
  img.src = imgData;
  img.style.maxWidth = "200px";
  img.style.transition = "transform 0.5s ease";
  footerDiv.appendChild(img);

  let originalScale = 1;
  let scale = originalScale;
  let intervalId;

  // Fonction pour réduire la taille
  const shrink = () => {
    scale *= 0.95; // 5% reduction
    img.style.transform = `scale(${scale})`;
  };

  // Quand la souris entre
  footerDiv.addEventListener("mouseenter", () => {
    intervalId = setInterval(shrink, 1000);
  });

  // Quand la souris sort
  footerDiv.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    scale = originalScale;
    img.style.transform = `scale(${scale})`;
  });

  // Supprimer l'image du localStorage au clic
  img.addEventListener("click", () => {
    localStorage.removeItem("ex12_img");
    footerDiv.innerHTML = "";
  });
});
