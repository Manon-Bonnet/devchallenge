// Get elements

const burgerButton = document.getElementsByClassName('burger-menu')[0];
const textMenu = document.getElementsByClassName('text-menu')[0];
const burgerSpans = document.getElementsByClassName('burger-menu')[0].children;
let menuStatus = "close";

// Add listeners

burgerButton.addEventListener("click", changeMenuStatus);

// Functions

function changeMenuStatus(){
  if(menuStatus == "open"){
    closeMenu();
    openBurgerButton();

  } else {
    openMenu();
    closeBurgerButton();

  }
}

function openMenu(){
  textMenu.classList.remove('close-menu');
  textMenu.classList.add('open-menu');
  menuStatus = "open";
}

function closeMenu(){
  textMenu.classList.remove('open-menu');
  textMenu.classList.add('close-menu');
  menuStatus = "close";
}

function openBurgerButton(){
  burgerSpans[1].classList.remove('hidden');
  burgerSpans[0].classList.remove('burger-first-cross');
  burgerSpans[2].classList.remove('burger-second-cross');

  burgerSpans[0].classList.add('burger-first-straight');
  burgerSpans[2].classList.add('burger-second-straight');
}

function closeBurgerButton(){
  burgerSpans[1].classList.add('hidden');
  burgerSpans[0].classList.remove('burger-first-straight');
  burgerSpans[2].classList.remove('burger-second-straight');

  burgerSpans[0].classList.add('burger-first-cross');
  burgerSpans[2].classList.add('burger-second-cross');
}