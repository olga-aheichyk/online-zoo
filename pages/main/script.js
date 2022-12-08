// burger menu

const header = document.querySelector(".header");
const headerLogo = header.querySelector(".header__logo-mobile");
const burgerMenuButton = header.querySelector(".burger-menu__button");
const burgerMenuButtonImg = burgerMenuButton.querySelector("img");
const mobileNav = header.querySelector(".mobile-nav");

const openMenu = () => {
  burgerMenuButton.classList.add("close");
  burgerMenuButton.style = "background-color: #ffffff;";
  burgerMenuButtonImg.src = "../../assets/icons/x-icon.svg";
  header.classList.add("open-menu");
  headerLogo.src = "../../assets/images/logo_footer_mobile_orange.png";
  headerLogo.height = "41";
  mobileNav.classList.remove("visually-hidden");

  if (burgerMenuButton.className.includes("close")) {
    burgerMenuButton.removeEventListener("click", openMenu);
    burgerMenuButton.addEventListener("click", closeMenu);
  }
};

const closeMenu = () => {
  burgerMenuButton.classList.remove("close");
  burgerMenuButton.style = "background-color: #000000;";
  burgerMenuButtonImg.src = "../../assets/icons/burger_menu.svg";
  header.classList.remove("open-menu");
  headerLogo.src = "../../assets/images/logo_footer_mobile_white.png";
  headerLogo.height = "29";
  mobileNav.classList.add("visually-hidden");

  if (!burgerMenuButton.className.includes("close")) {
    burgerMenuButton.removeEventListener("click", closeMenu);
    burgerMenuButton.addEventListener("click", openMenu);
  }
};

burgerMenuButton.addEventListener("click", openMenu);

// pets carousel

const data = [
  {
    id: "panda",
    imgSrc: "../../assets/images/panda-card.jpg",
    title: "Giant Pandas",
    subtitle: "Native to Southwest China",
    foodImgSrc: "../../assets/icons/banana-bambuk-icon.svg",
    foodImgAlt: "banana",
  },
  {
    id: "eagle",
    imgSrc: "../../assets/images/eagle-card.jpg",
    title: "Eagles",
    subtitle: "Native to South America",
    foodImgSrc: "../../assets/icons/meet-fish-icon.svg",
    foodImgAlt: "meat",
  },
  {
    id: "gorilla",
    imgSrc: "../../assets/images/gorilla-card.jpg",
    title: "Gorillas",
    subtitle: "Native to Congo",
    foodImgSrc: "../../assets/icons/banana-bambuk-icon.svg",
    foodImgAlt: "banana",
  },
  {
    id: "sloth",
    imgSrc: "../../assets/images/sloth-card.jpg",
    title: "Two-toed Sloth",
    subtitle: "Mesoamerica, South America",
    foodImgSrc: "../../assets/icons/banana-bambuk-icon.svg",
    foodImgAlt: "banana",
  },
  {
    id: "leopard",
    imgSrc: "../../assets/images/leopard-card.jpg",
    title: "Cheetans",
    subtitle: "Native to Africa",
    foodImgSrc: "../../assets/icons/meet-fish-icon.svg",
    foodImgAlt: "meat",
  },
  {
    id: "penguin",
    imgSrc: "../../assets/images/penguin-card.jpg",
    title: "Penguins",
    subtitle: "Native to Antarctica",
    foodImgSrc: "../../assets/icons/meet-fish-icon.svg",
    foodImgAlt: "meat",
  },
];

let petsForPage = [...data];

const createPetCard = (pet) => {
  const { id, imgSrc, title, subtitle, foodImgSrc, foodImgAlt } = pet;

  const petCard = document.createElement("article");
  //petCard.setAttribute("id", id);
  petCard.classList.add("pet");
  petCard.innerHTML = `
	<img class="pet__image" src=${imgSrc} alt=${id} height="366">
	<div class="pet__title-wrapper">
		<h3 class="pet__title">${title}</h3>
		<p class="pet__subtitle">${subtitle}</p>
		<img class="pet__icon" src=${foodImgSrc} alt=${foodImgAlt} height="37">
	</div>
	`;

  return petCard;
};

const renderNextAndPreviousSlides = (activeSlidesData) => {
	petsForPage = activeSlidesData;

	const carouselWrapper = document.querySelector(".carousel-wrapper");
	const nextSlide = document.querySelector(".pets__list--next");
  	const prevSlide = document.querySelector(".pets__list--prev");

	if (!!nextSlide) nextSlide.innerHTML = '';
	if (!!prevSlide) prevSlide.innerHTML = '';

	const firstCard = activeSlidesData[0];
	const lastCard = activeSlidesData[activeSlidesData.length - 1];


	const prevSlidePets = [...activeSlidesData];
	prevSlidePets.shift();
  	prevSlidePets.push(firstCard);

	const prevSlideCardsList = document.createDocumentFragment();
	let petList;

	if (!prevSlide) {
		petList = document.createElement("div");
    	petList.classList.add("pets__list");
    	petList.classList.add("pets__list--prev");
    	//petList.classList.add("visually-hidden");
	}

	else {
		petList = prevSlide;
	}

	petList.innerHTML = `
		<div class="pet__inner-slider">
			<button id="mobile-prev-button" class="pets__slider pets__slider--left">
				<img class="pets__slider-arrow" src="../../assets/icons/left-arrow.svg" alt="left arrow">
			</button>
			<button id="mobile-next-button" class="pets__slider pets__slider--right">
				<img class="pets__slider-arrow" src="../../assets/icons/right-arrow.svg" alt="right arrow">
			</button>
		</div>
	`;

  	prevSlidePets.forEach((pet) => {
      const card = createPetCard(pet);
      petList.appendChild(card);
    });
	prevSlideCardsList.appendChild(petList);
  	carouselWrapper.prepend(prevSlideCardsList);

	const nextSlidePets = [...activeSlidesData];
	nextSlidePets.pop();
  	nextSlidePets.unshift(lastCard);

	const nextSlideCardsList = document.createDocumentFragment();
	let nextSlideList;

	if (!nextSlide) {
    nextSlideList = document.createElement("div");
    nextSlideList.classList.add("pets__list");
    nextSlideList.classList.add("pets__list--next");
    //nextSlideList.classList.add("visually-hidden");
  }

	else {
		nextSlideList = nextSlide;
	}

	nextSlideList.innerHTML = `
		<div class="pet__inner-slider">
			<button id="mobile-prev-button" class="pets__slider pets__slider--left">
				<img class="pets__slider-arrow" src="../../assets/icons/left-arrow.svg" alt="left arrow">
			</button>
			<button id="mobile-next-button" class="pets__slider pets__slider--right">
				<img class="pets__slider-arrow" src="../../assets/icons/right-arrow.svg" alt="right arrow">
			</button>
		</div>
	`;

  	nextSlidePets.forEach((pet) => {
      const card = createPetCard(pet);
      nextSlideList.appendChild(card);
    });
	nextSlideCardsList.appendChild(nextSlideList);
  	carouselWrapper.appendChild(nextSlideCardsList);
}

const renderCarouselSlides = (pets) => {
	const activePetList = document.querySelector(".pets__list");
	activePetList.classList.add("pets__list--active");

  	const activePetCardsList = document.createDocumentFragment();

	pets.forEach((pet) => {
		const card = createPetCard(pet);
		activePetCardsList.appendChild(card);
	});
	activePetList.appendChild(activePetCardsList);

	renderNextAndPreviousSlides(pets);
};

renderCarouselSlides(data);

const slidesContainer = document.querySelector(".carousel-wrapper");
const slide = document.querySelector(".pets__list--active");
const nextSlide = document.querySelector(".pets__list--next");
const prevSlide = document.querySelector(".pets__list--prev");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const prevMobileButton = slide.querySelector("#mobile-prev-button");
const nextMobileButton = slide.querySelector("#mobile-next-button");

const handleNextButtonClick = () => {
  const nextSlidePets = [...petsForPage];
  const lastCard = nextSlidePets[nextSlidePets.length - 1];
  nextSlidePets.pop();
  nextSlidePets.unshift(lastCard);
  //slide.classList.add("animation-right");
  slide.innerHTML = nextSlide.innerHTML;
  //slide.classList.remove("animation-right");
  renderNextAndPreviousSlides(nextSlidePets);
};

nextButton.addEventListener("click", handleNextButtonClick);
nextMobileButton.addEventListener("click", handleNextButtonClick);

const handlePrevButtonClick = () => {
  const prevSlidePets = [...petsForPage];
  const firstCard = prevSlidePets[0];
  prevSlidePets.shift();
  prevSlidePets.push(firstCard);
  //slide.classList.add("animation-left");
  slide.innerHTML = nextSlide.innerHTML;
  //slide.classList.remove("animation-left");
  renderNextAndPreviousSlides(prevSlidePets);
};

prevButton.addEventListener("click", handlePrevButtonClick);
prevMobileButton.addEventListener("click", handlePrevButtonClick);