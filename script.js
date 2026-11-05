const modal = document.querySelector(".modal");
const openButtons = document.querySelectorAll(".js-open-excerpt");
const closeButtons = document.querySelectorAll(".js-close-modal");

function openModal() {
  modal.hidden = false;
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
}

openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});
