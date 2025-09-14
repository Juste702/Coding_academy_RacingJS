document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.querySelector(".drag_drop");

  // Empêcher le comportement par défaut (ouvrir l’image dans le navigateur)
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  // Visuel quand on drag au-dessus
  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.add("highlight");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.remove("highlight");
    });
  });

  // Quand on drop un fichier
  dropZone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = document.createElement("img");
          img.src = event.target.result;
          img.style.maxWidth = "100%";
          img.style.maxHeight = "200px";
          dropZone.innerHTML = ""; // on enlève le texte "Drag&Drop here"
          dropZone.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please drop an image file.");
      }
    }
  });
});