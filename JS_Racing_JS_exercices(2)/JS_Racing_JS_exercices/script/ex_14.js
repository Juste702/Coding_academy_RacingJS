document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("footer button");
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  btn.addEventListener("click", async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Convertir les données en texte JSON indenté
      const textData = JSON.stringify(data, null, 2);

      // Créer un blob
      const blob = new Blob([textData], { type: "text/plain" });

      // Créer un lien temporaire pour télécharger le fichier
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "api_data.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Erreur lors de la récupération de l'API :", err);
    }
  });
});