document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const outputBox = document.querySelector("footer div");

  button.addEventListener("click", async () => {
    const codePostal = input.value.trim();

    if (!codePostal) {
      outputBox.textContent = "Veuillez entrer un code postal.";
      return;
    }

    try {
      // Appel à l’API officielle
      const response = await fetch(
        `https://apicarto.ign.fr/api/codes-postaux/communes/${codePostal}`
      );

      if (!response.ok) {
        throw new Error("Erreur réseau ou code postal invalide");
      }

      const data = await response.json();

      if (data.length === 0) {
        outputBox.textContent = "Aucune donnée trouvée pour ce code postal.";
        return;
      }

      // On prend les infos de la première commune trouvée
      const { nomCommune, libelleAcheminement } = data[0];

      outputBox.innerHTML = `
        <p><b>nom_commune:</b> ${nomCommune}</p>
        <p><b>libelleAcheminement:</b> ${libelleAcheminement}</p>
      `;
    } catch (err) {
      outputBox.textContent = "Erreur: " + err.message;
    }
  });
});