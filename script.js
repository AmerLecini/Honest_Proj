const cards = document.querySelectorAll(".card");
const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancel");

cards.forEach(card => {
  if (!popupWrapper.contains(card)) {
    card.addEventListener("click", () => {
        popupWrapper.style.display = "flex";
    });
  }
});

[closeBtn, cancelBtn].forEach(btn => {
  btn.addEventListener("click", () => {
    popupWrapper.style.display = "none";
  });
});


function myFunction() {
    const links = document.getElementById("links");
    links.classList.toggle("show");
  }
  