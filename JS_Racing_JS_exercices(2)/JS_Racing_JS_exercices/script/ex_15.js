document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".dot");
  if (!dot) {
    console.error("Dot introuvable");
    return;
  }

  const endpoint = "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=sda&instruments=XBX-USD";

  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      try {
        const price = data.Data["XBX-USD"].last_trade;
        console.log("Prix actuel Bitcoin:", price);

        const prevPrice = parseFloat(localStorage.getItem("bitcoinPrice"));

        // Comparer avec le prix précédent
        if (!isNaN(prevPrice)) {
          if (price > prevPrice) {
            dot.style.backgroundColor = "green";
          } else if (price < prevPrice) {
            dot.style.backgroundColor = "red";
          } else {
            dot.style.backgroundColor = "orange";
          }
        } else {
          // Premier chargement
          dot.style.backgroundColor = "orange";
        }

        // Stocker le prix actuel pour le prochain refresh
        localStorage.setItem("bitcoinPrice", price);
      } catch (err) {
        console.error("Erreur traitement Bitcoin:", err);
        dot.style.backgroundColor = "orange"; // fallback
      }
    })
    .catch(err => {
      console.error("Erreur récupération Bitcoin:", err);
      dot.style.backgroundColor = "orange"; // fallback
    });
});

