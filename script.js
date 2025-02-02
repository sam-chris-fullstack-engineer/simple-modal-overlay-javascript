'use strict';
const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal ');
const btnOpenModal = document.querySelectorAll('.show-modal ');

const openModal = function () {
  Modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  Modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log("Key Was Pressed bruh!!");
  console.log(e.key);
  if (e.key === 'Escape' && !Modal.classList.contains('hidden')) {
    closeModal();
  }
});
