document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".dot");
  const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const storageKey = "bitcoin_price_eur";

  const updateDotColor = (prev, current) => {
    if (current > prev) dot.style.backgroundColor = "green";
    else if (current < prev) dot.style.backgroundColor = "red";
    else dot.style.backgroundColor = "orange";
  };

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const currentPrice = parseFloat(data.bpi.EUR.rate.replace(",", ""));
      const prevPrice = parseFloat(localStorage.getItem(storageKey)) || currentPrice;

      updateDotColor(prevPrice, currentPrice);
      localStorage.setItem(storageKey, currentPrice);
    })
    .catch(err => console.error("Erreur API:", err));
});