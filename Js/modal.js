const modalViews = document.querySelector(".appointment-modal");
const modalBtn = document.querySelector(".blob-btn");
const modalCloses = document.querySelector(".appointment-modal__close");


let modal = function () {
  modalViews.classList.add("active-modal");
}
modalBtn.addEventListener('click', modal);
modalCloses.addEventListener('click', () => {
  modalViews.classList.remove("active-modal");
})


