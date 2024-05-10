function toogleModal() {
  const menu = document.querySelector(".menu");

  function openModal() {
    const menuMobile = document.querySelector(".menu-mobile");
    menuMobile.classList.toggle("active");
  }

  menu.addEventListener("click", openModal);
}

toogleModal();
