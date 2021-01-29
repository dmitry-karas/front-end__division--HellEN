(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logoRef = document.querySelector("[data-logo]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    logoRef.classList.toggle("logo-dark-theme");
    document.body.classList.toggle("menu-open");

//  remove classes

    $('.header-menu a').on('click', function () {
      $('.button-burger').removeClass('is-open');
    $('.header-menu').removeClass('is-open');
    $('body').removeClass('menu-open');
    $('.logo').removeClass('logo-dark-theme');
      });
  });
})();
