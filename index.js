const end = document.querySelector(".end");
const sound = document.querySelector(".verification");

const endtwo = document.querySelector(".endtwo")

function ermergir() {
    sound.style.display = `none`;
    end.style.display = `block`;
    endtwo.style.display = `block`
}

function start() {
    setTimeout(() => {
        ermergir()
    }, 900000)
}

window.addEventListener("load", start);