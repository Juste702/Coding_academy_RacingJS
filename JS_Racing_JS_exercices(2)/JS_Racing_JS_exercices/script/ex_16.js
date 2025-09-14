// script/ex_16.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fileInput = form.querySelector("input[type='file']");
  const contentDisplay = document.querySelector(".content_display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = fileInput.files[0];

    // On crée une Promise pour vérifier le fichier
    new Promise((resolve, reject) => {
      if (!file) {
        reject("No file selected");
      } else {
        resolve(file);
      }
    })
      .then((file) => {
        const fileName = file.name;
        const fileType = fileName.split(".").pop();

        if (fileType === "txt") {
          // Lire le contenu si c'est un .txt
          const reader = new FileReader();
          reader.onload = (e) => {
            contentDisplay.textContent = e.target.result;
          };
          reader.readAsText(file);
        } else {
          contentDisplay.textContent = `File detected: .${fileType}`;
        }
      })
      .catch((err) => {
        contentDisplay.textContent = `Error: ${err}`;
      });
  });
});