document.addEventListener("DOMContentLoaded", () => {
  const footerDiv = document.querySelector("footer div");

  // créer l’input date + un span pour afficher la date formatée
  const dateInput = document.createElement("input");
  dateInput.type = "date";

  const savedDate = document.createElement("span");
  savedDate.style.marginLeft = "10px";

  footerDiv.appendChild(dateInput);
  footerDiv.appendChild(savedDate);

  // formatteur de date
  function formatDate(date) {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  // écouteur de changement
  dateInput.addEventListener("change", () => {
    const selectedDate = new Date(dateInput.value);
    if (!isNaN(selectedDate)) {
      savedDate.textContent = formatDate(selectedDate);
    }
  });
});