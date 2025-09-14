document.addEventListener("DOMContentLoaded", () => {
  const footerDiv = document.querySelector("footer > div");

  function combineImages(urls) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 500; // taille du canvas
    canvas.height = 500;

    footerDiv.appendChild(canvas);

    // Promises pour charger les images
    const promises = urls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous"; // pour éviter certains problèmes CORS
          img.onload = () => resolve(img);
          img.onerror = () => reject(`Impossible de charger ${url}`);
          img.src = url;
        })
    );

    Promise.all(promises)
      .then((images) => {
        images.forEach((img) => {
          // Calculer une position aléatoire où l’image reste visible
          const maxX = canvas.width - img.width;
          const maxY = canvas.height - img.height;
          const x = Math.floor(Math.random() * Math.max(1, maxX));
          const y = Math.floor(Math.random() * Math.max(1, maxY));

          ctx.drawImage(img, x, y);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Exemple d'appel 
  combineImages([
    "element-1.png",
    "element-2.png",
    "element-4.png"
  ]);
});