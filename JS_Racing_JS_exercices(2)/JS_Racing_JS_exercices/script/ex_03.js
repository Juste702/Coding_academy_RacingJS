window.onload = function () {
    const click = document.querySelector("footer div");
    click.addEventListener("click", () => {
        const regexName = /^[A-Za-z]+( [A-Za-z]+)*$/
        let name = "";
        while (!name || !regexName.test(name.trim())) {
            name = prompt("What is your name?");
        }

        const result = confirm(`Are you sure ${name.trim()} is your name?`);
        if (result) {
            click.textContent = `Hello ${name.trim()}!`;
            alert(`Hello ${name.trim()}!`);
        } else {
            alert("TRY AGAIN");
        }

    })
}
