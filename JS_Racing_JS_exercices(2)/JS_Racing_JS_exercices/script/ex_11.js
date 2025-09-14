document.addEventListener("DOMContentLoaded", () => {
  const firstBox = document.querySelector("footer div");
  const okLink = firstBox.querySelector("a");

  // Création de la deuxième zone avec le bouton Delete cookie
  const secondBox = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete cookie";
  secondBox.appendChild(deleteBtn);
  secondBox.style.display = "none";
  firstBox.parentNode.appendChild(secondBox);

  // Fonctions cookie
  const cookie = {
    set: (name, value, days) => {
      const d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
    },
    get: name => document.cookie.split('; ').find(row => row.startsWith(name+'='))?.split('=')[1],
    delete: name => document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
  };

  // Afficher ou cacher zones selon cookie
  const updateUI = () => {
    if (cookie.get("acceptsCookies") === "true") {
      firstBox.style.display = "none";
      secondBox.style.display = "block";
    } else {
      firstBox.style.display = "block";
      secondBox.style.display = "none";
    }
  };

  // Events
  okLink.addEventListener("click", e => {
    e.preventDefault();
    cookie.set("acceptsCookies", "true", 1);
    updateUI();
  });

  deleteBtn.addEventListener("click", () => {
    cookie.delete("acceptsCookies");
    updateUI();
  });

  // Initial check
  updateUI();
});