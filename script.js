
const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const figure = document.querySelector(".figure");

const menuItemGrijs = document.querySelector(".menuItem-grijs input");
const menuItemFuchsia = document.querySelector(".menuItem-fuchsia input");
const menuItemOranje = document.querySelector(".menuItem-oranje input");
const menuItemBlauw = document.querySelector(".menuItem-blauw input");
const menuItemPetrol = document.querySelector(".menuItem-petrol input");

const colorLabel = document.querySelector(".colorName");

// Functions
const changeBodyBackgroundColor = function (colorName) {
  body.removeAttribute("class");
  body.classList.add(`body-${colorName}`);
};
const displayColorLabel = function (colorName) {
  colorLabel.innerHTML = "Je favoriet kleur is: " + colorName + ".";
};

const onHamburgerClick = function () {
  menu.classList.toggle("menu-opened");
  body.removeAttribute("class");
  colorLabel.innerHTML = "";
};

const onMenuItemClick = function (e) {
  const colorName = e.target.id;
  changeBodyBackgroundColor(colorName);
  displayColorLabel(colorName);
  //wanneer ik als gebruiker op de kleur in het menu klik, klapt het menu weer terug in
  menu.classList.toggle("menu-opened");
};

// Event-listeners hamburger
hamburger.addEventListener("click", onHamburgerClick);

// Event-listeners menu
menuItemGrijs.addEventListener("click", (e) => onMenuItemClick(e));
menuItemFuchsia.addEventListener("click", (e) => onMenuItemClick(e));
menuItemOranje.addEventListener("click", (e) => onMenuItemClick(e));
menuItemBlauw.addEventListener("click", (e) => onMenuItemClick(e));
menuItemPetrol.addEventListener("click", (e) => onMenuItemClick(e));
