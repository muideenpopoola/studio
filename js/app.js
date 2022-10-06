"use strict";
const projects = {
  studio: {
    name: "Pop Studio",
    about: "My Current portfolio site, and I LOVE it!!!😍",
    status: "indevelopment",
    img: "background",
    link: "https://link.io/muideenpopoola/studio",
    github: "https://github.io/muideenpopoola/studio",
  },

  natours: {
    name: "Natours",
    about: "A small projects to learn the fundamental of sass",
    status: "finished",
    img: "natours",
    link: "muideenpopoola.github.io/natours/",
    github: "https://github.com/muideenpopoola/natours",
  },

  trillo: {
    name: "Trillo",
    about: "Your all in one booking app UI",
    status: "finished",
    img: "trillo",
    link: "muideenpopoola.github.io/trillo/",
    github: "https://github.com/muideenpopoola/trillo",
  },

  nexter: {
    name: "Nexter",
    about: "A property management website Ui",
    status: "finished",
    img: "nexter",
    link: "muideenpopoola.github.io/nexter/",
    github: "https://github.com/muideenpopoola/nexter",
  },
};

const apps = [
  projects.natours,
  projects.nexter,
  projects.trillo,
  projects.studio,
];

const container = document.querySelector(".projects__list");

apps.forEach(function (app, i) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="apps">
    <img
      src="../img/${app.img}.webp"
      alt="Projects"
      class="apps__img"
    />
    <div class="apps__text">
      <h2>${app.name}</h2>
      <h4>${app.about}</h4>
      <h5>
        Status:
        <span class="${app.status}">In Development</span>
      </h5>

      <div class="spacer"></div>

      <div class="about__main--icons">
        <div class="logo__container" data-tab="html">
          
          <img
            class="logo"
            src="/img/004-html-5.png"
            alt="html"
          />
        </div>

        <div class="logo__container" data-tab="css">
          
          <img
            class="logo"
            src="/img/005-css-3.png"
            alt="css"
          />
        </div>

        <div class="logo__container" data-tab="javascript">
          
          <img
            class="logo"
            src="/img/003-js.png"
            alt="javascript"
          />
        </div>

        <div class="logo__container" data-tab="sass">
        
          <img
            class="logo"
            src="/img/008-sass.png"
            alt="Sass"
          />
        </div>
      </div>

      <div class="apps__btn">
        <button>
          <a href="${app.github}">
            <svg class="icon icon-github">
              <use
                xlink:href="img/sprite.svg#icon-github"
              ></use></svg
            ><span>Github</span>
          </a>
        </button>

        <button>
          <a href="${app.link}">
            <svg class="icon icon-github">
              <use
                xlink:href="img/sprite.svg#icon-launch"
              ></use></svg
            ><span>Project</span>
          </a>
        </button>

        <button>
          <a href="#">
            <svg class="icon icon-github">
              <use
                xlink:href="img/sprite.svg#icon-notebook"
              ></use></svg
            ><span>Notes</span>
          </a>
        </button>
      </div>
    </div>
  </div>`
  );
});
