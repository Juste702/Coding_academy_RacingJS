document.addEventListener("DOMContentLoaded", () => {
  const footerDiv = document.querySelector("footer > div");
  if (!footerDiv) return;

  // Crée un canvas qui remplira le footer div
  const canvas = document.createElement("canvas");
  canvas.width = 800;  
  canvas.height = 600; 
  footerDiv.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function combineImages(urls) {
    urls.forEach(url => {
      const img = new Image();
      img.src = url; // image locale
      img.onload = () => {
        // Position aléatoire mais entièrement visible
        const x = Math.random() * (canvas.width - img.width);
        const y = Math.random() * (canvas.height - img.height);

        ctx.drawImage(img, x, y);
      };
      img.onerror = () => console.error("Erreur chargement image:", url);
    });
  }

  // Exemple d'appel avec des images locales dans ./img/
  combineImages([
    "./img/element-1.png",
    "./img/element-2.png",
    "./img/element-4.png"
  ]);
});

