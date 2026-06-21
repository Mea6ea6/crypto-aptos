const modal = document.querySelector("#modal");
const openModal = document.querySelector(".header__update");
const openModal1 = document.querySelector(".main__btn");
const closeModal = document.querySelector(".modal__close");

const modal24 = document.querySelector("#modal__24");
const openModal24 = document.querySelector('#modal__btn24');
const openModal12 = document.querySelector('#modal__btn12');
const closeModal24 = document.querySelector('#modal__close24');

openModal.addEventListener("click", () => {
  modal.showModal();
});
openModal1.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});



openModal12.addEventListener("click", () => {
  modal24.close();
  modal.showModal();
});

closeModal24.addEventListener("click", () => {
  modal24.close();
});
