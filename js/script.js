const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");
const overlayBig = document.querySelector(".overlay-big");

const btnStudio = document.querySelector(".button-main");
const popupStudio = document.querySelector(".studio__popup");
const closeStudio = document.querySelectorAll(".close-studio");
const popupAbout = document.querySelector("#about__popup");
const btnAbout = document.querySelector(".last");

const labelDate = document.querySelector(".label-date");

menu.addEventListener("click", function () {
  if (window.innerWidth > 960) {
    if (sideBar.classList.contains("hide")) {
      sideBar.classList.remove("hide");
    }
    if (sideBar.classList.contains("show")) {
      sideBar.classList.remove("show");
    }
    sideBar.classList.toggle("hidden");
  } else if (window.innerWidth <= 960) {
    if (sideBar.classList.contains("hidden"))
      sideBar.classList.remove("hidden");
    sideBar.classList.remove("hide");
    sideBar.classList.add("show");
    overlay.classList.remove("hide");

    sideBar.addEventListener("click", function (e) {
      if (window.innerWidth > 960) return;
      const clicked = e.target.closest(".pages--tab");

      if (!clicked) return;
      sideBar.classList.remove("show");
      overlay.classList.add("hide");
    });
  }
});

overlay.addEventListener("click", function () {
  sideBar.classList.remove("show");
  overlay.classList.add("hide");
});

////////////////////////////////////////////////////////////

btnStudio.addEventListener("click", function () {
  popupStudio.classList.remove("hidden");
  overlayBig.classList.remove("hidden");
});

const closeStud = function () {
  popupStudio.classList.add("hidden");
  overlayBig.classList.add("hidden");
};

overlayBig.addEventListener("click", closeStud);
closeStudio.forEach((btn) => btn.addEventListener("click", closeStud));
/////////////////////////////////////////////////////////////////////////////

btnAbout.addEventListener("click", function () {
  popupAbout.classList.remove("hidden");
  overlayBig.classList.remove("hidden");
});

const closeAbout = function () {
  popupAbout.classList.add("hidden");
  overlayBig.classList.add("hidden");
};

overlayBig.addEventListener("click", closeAbout);
closeStudio.forEach((btn) => btn.addEventListener("click", closeAbout));

///////////////////////////////////////////////////////////////////

setInterval(function () {
  // Create current date and time
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    // weekday: 'long',
  };
  const locale = navigator.language;
  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
}, 1000);

//////////////////////////////////////////////////////////////////////////////////////////
const tabs = document.querySelectorAll(".pages--tab");
const tabsContainer = document.querySelector(".tabs-container");
const tabsContent = document.querySelectorAll(".page");
const allSections = document.querySelectorAll(".section");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".pages--tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabsContent.forEach((c) => c.classList.remove("project__active"));
  allSections.forEach((s) => s.classList.add("section--hidden"));

  // Activate tab
  clicked.classList.add("active");

  // Activate content area
  document
    .querySelector(`.page--${clicked.dataset.tab}`)
    .classList.add("project__active");

  setTimeout(function () {
    document
      .querySelector(`.section--${clicked.dataset.tab}`)
      .classList.remove("section--hidden");
  }, 50);
});

///////////////////////////////////////////////////////
const logo = document.querySelectorAll(".logo1");
const logoText = document.querySelectorAll(".logo-text1");
const box = document.querySelector(".about__main1");

logoText.forEach((logo) => logo.classList.add("hide-text"));

box.addEventListener("mouseover", function (e) {
  const clicked = e.target.closest(".logo__container");
  if (!clicked) return;
  document
    .querySelector(`.text--${clicked.dataset.tab}`)
    .classList.remove("hide-text");
});

box.addEventListener("mouseout", function (e) {
  const clicked = e.target.closest(".logo__container");
  if (!clicked) return;
  document
    .querySelector(`.text--${clicked.dataset.tab}`)
    .classList.add("hide-text");
});
