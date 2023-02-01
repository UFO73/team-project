(() => {
    const refs = {
      openModalBtn: document.querySelector("[price-modal-open]"),
      closeModalBtn: document.querySelector("[price-modal-close]"),
      modal: document.querySelector("[price-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector("[booking-modal-open]"),
      closeModalBtn: document.querySelector("[booking-modal-close]"),
      modal: document.querySelector("[booking-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-one");
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector("[table-modal-open]"),
      closeModalBtn: document.querySelector("[table-modal-close]"),
      modal: document.querySelector("[table-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-two");
    }
})();
