window.onload = function (){
    let typed = "";
    const outpout = document.querySelector("footer div");
    document.addEventListener("keydown", (event) => {
        if(event.key.length === 1){
            typed += event.key;
        }
        typed = typed.slice(-42);
        outpout.textContent = typed;

    })
}
