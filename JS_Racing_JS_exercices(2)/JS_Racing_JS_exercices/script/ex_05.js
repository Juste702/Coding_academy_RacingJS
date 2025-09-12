window.onload = function () {
    let size = 16;
    const body = document.body;
    document.getElementsByTagName("button")[0].addEventListener("click", (event) => {
        size += 2;
        body.style.fontSize = size + "px";
    })

    document.getElementsByTagName("button")[1].addEventListener("click", (event) => {
        size -= 2;
        body.style.fontSize = size + "px";
    })

    document.querySelector(" footer select").addEventListener("change", (event) => {
        body.style.backgroundColor = event.target.value;
    })
}
