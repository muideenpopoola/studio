const toggle = document.querySelectorAll(".toggle");
const background = document.querySelector(".main__container");
const mode = document.querySelector(".mode");
const app = document.querySelector(".app");

const on = document.querySelector(".on");
const off = document.querySelector(".off");

toggle.forEach((btn) =>
  btn.addEventListener("click", function () {
    app.classList.toggle("dark");
  })
);





