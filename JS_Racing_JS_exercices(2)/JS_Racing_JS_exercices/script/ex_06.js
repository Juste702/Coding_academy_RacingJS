document.addEventListener("DOMContentLoaded", () => {
  // On cible le footer > div (la boîte blanche)
  const box = document.querySelector(".exercice footer div");

  // Petite fonction utilitaire pour afficher les résultats
  function displaySchools(schools) {
    // On vide avant d'afficher
    box.innerHTML = "";

    schools.forEach(school => {
      const p = document.createElement("p");
      p.textContent = `${school.nom_commune} - ${school.nom_etablissement} - ${school.mail || "Pas de mail"}`;
      box.appendChild(p);
    });
  }

  // Récupération API (25 premiers établissements)
  fetch("https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-annuaire-education&q=&rows=25")
    .then(response => {
      if (!response.ok) throw new Error("Erreur réseau : " + response.status);
      return response.json();
    })
    .then(data => {
      // Chaque établissement est dans data.records[].fields
      const schools = data.records.map(r => r.fields);
      displaySchools(schools);
    })
    .catch(err => {
      box.textContent = "Impossible de récupérer les données : " + err.message;
    });
});