let btn = document.querySelector(".btn");
let okBtn = document.querySelector(".OKbtn");

let popup = document.getElementById("popup");


function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

btn.addEventListener("click", () => {
    openPopup();
});

okBtn.addEventListener("click", () => {
    closePopup();
});