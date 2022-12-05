const header = document.querySelector(".header");
const headerLogo = header.querySelector(".header__logo-mobile");
const burgerMenuButton = header.querySelector(".burger-menu__button");
const mobileNav = header.querySelector(".mobile-nav");

burgerMenuButton.addEventListener('click', () => {
	burgerMenuButton.style = "display: none";
	header.classList.add('open-menu');
	headerLogo.src = "../../assets/images/logo_footer_mobile_orange.png";
	headerLogo.height = '41';
	mobileNav.classList.remove('visually-hidden');
});

mobileNav.addEventListener("click", () => {
  burgerMenuButton.style = "display: block";
  header.classList.remove("open-menu");
  headerLogo.src = "../../assets/images/logo_footer_mobile_white.png";
  headerLogo.height = "29";
  mobileNav.classList.add("visually-hidden");
});