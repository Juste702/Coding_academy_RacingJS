window.onload = function (){
    const click = document.querySelector("footer div");
    let compteur = 0;
    click.addEventListener("click", () => {
        compteur++;
        click.textContent = compteur;

    })
}
