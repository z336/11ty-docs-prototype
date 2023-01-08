// const { html } = require("code-tag");

//Append the table of contents heading to avoid mapping it to its own list

const toc = document.querySelector(".table-of-contents");

if (document.body.contains(toc)) {
  toc.insertAdjacentHTML("afterbegin", "<h2>On this page</h2>");
}

// Toggle details element in left navbar to stay open for current page

const currentPage = document.querySelector(`#sidebar details a[aria-current="page"]`);

if (currentPage) {
  currentPage.closest("details").setAttribute("open", "");
}

// const currentStuff = document.querySelector(`#navlist details a[aria-current="page"]`);

// if (currentStuff) {
//   currentPage.closest("details").setAttribute("open", "");
// }

// tableofcontents wip
// const getHeadings = document.querySelectorAll(".heading-anchor");

// const elements = Array.from(getHeadings).map((element) => {
//   return [element.hash, element.innerText];
// });

// Mobile nav menu

const nav = document.querySelector(".navbar");
const list = nav.querySelector("ul");
const burgerClone = document.querySelector("#burger-template").content.cloneNode(true);
const svg = nav.querySelector("svg");

const button = burgerClone.querySelector("#menu");
button.addEventListener("click", (event) => {
  const isOpen = button.getAttribute("aria-expanded") === "false";
  button.setAttribute("aria-expanded", isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute("aria-expanded", false);
  button.focus();
};

//  close on escape
nav.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener("click", (event) => {
  const isClickInsideElement = nav.contains(event.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);
