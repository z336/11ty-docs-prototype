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

// Toggle details in left navbar to stay open for current page

const currentPage = document.querySelector(`#sidebar details a[aria-current="page"]`);
const currentPageMobile = document.querySelector(`.navbar details a[aria-current="page"]`);

if (currentPage) {
  currentPage.closest("details").setAttribute("open", "");
}

if (currentPageMobile) {
  currentPageMobile.closest("details").setAttribute("open", "");
}

// Add a copy button to code blocks

const blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // Only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    const button = document.createElement("button");

    button.classList.add("copy");
    button.innerText = "Copy";

    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block);

      button.innerText = "Copied";

      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  }
});

async function copyCode(block) {
  const code = block.querySelector("code");
  const text = code.innerText;

  await navigator.clipboard.writeText(text);
}

// Theme Switcher

const lightStyles = document.querySelectorAll("style[media*=prefers-color-scheme][media*=light]");
const darkStyles = document.querySelectorAll("style[media*=prefers-color-scheme][media*=dark]");
const themeSwitcher = document.querySelector(".theme-switcher");
const themeButtons = document.querySelectorAll(".theme-switcher__button");
const darkSchemeMedia = matchMedia("(prefers-color-scheme: dark)");

function setupSwitcher() {
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    const currentButton = document.querySelector(`.theme-switcher__button[value=${savedScheme}]`);

    pressButton(currentButton, true);
  }

  themeSwitcher.addEventListener("click", (event) => {
    const isButton = event.target.tagName === "BUTTON";
    const isPressed = event.target.getAttribute("aria-pressed") === "true";

    if (!isButton || isPressed) return;

    pressButton(event.target, true);
    setScheme(event.target.value);
  });
}

function pressButton(button, press) {
  for (let button of themeButtons) {
    button.setAttribute("aria-pressed", !press);
  }

  button.setAttribute("aria-pressed", press);
}

function setupScheme() {
  const savedScheme = getSavedScheme();
  const systemScheme = getSystemScheme();

  if (savedScheme === null) return;

  if (savedScheme !== systemScheme) {
    setScheme(savedScheme);
  }
}

function setScheme(scheme) {
  switchMedia(scheme);

  if (scheme === "auto") {
    clearScheme();
  } else {
    saveScheme(scheme);
  }
}

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === "auto") {
    lightMedia = "(prefers-color-scheme: light)";
    darkMedia = "(prefers-color-scheme: dark)";
  } else {
    lightMedia = scheme === "light" ? "all" : "not all";
    darkMedia = scheme === "dark" ? "all" : "not all";
  }

  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });

  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
}

function getSystemScheme() {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? "dark" : "light";
}

function getSavedScheme() {
  return localStorage.getItem("color-scheme");
}

function saveScheme(scheme) {
  localStorage.setItem("color-scheme", scheme);
}

function clearScheme() {
  localStorage.removeItem("color-scheme");
}

setupSwitcher();
setupScheme();
