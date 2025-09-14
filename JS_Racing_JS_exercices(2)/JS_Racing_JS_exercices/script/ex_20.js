document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fileInput = form.querySelector("input[type='file']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    // créer un lien de téléchargement pour sauvegarder le fichier
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name; // le fichier sera enregistré avec son nom original
    document.body.appendChild(a);
    a.click();

    // nettoyage
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
});