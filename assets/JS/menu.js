const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

const itemA = document.querySelector("#soMi");
const itemB = document.querySelector("#forma");
const itemC = document.querySelector("#proy");
const itemD = document.querySelector("#habili");
const itemE = document.querySelector("#cont");

const main = document.querySelector(".main");
const footer = document.querySelector(".footer");


open.addEventListener("click", () => {
  nav.classList.add("visible");

  main.classList.add("hiddenAll");
  footer.classList.add("hiddenAll");
})

close.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemA.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemB.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemC.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemD.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemE.addEventListener("click", () => {
  nav.classList.remove("visible");

  main.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

document.addEventListener("DOMContentLoaded", () => {
  const copy = document.querySelector(".footer .containerFooter #copy");
  const a = document.createElement("a");
  const anio = new Date().getFullYear();

  a.href = "https://www.linkedin.com/in/julian-centurion/";
  a.target = "_blank";
  a.role = "noopener noreferrer";
  a.innerHTML = "Julian Centurion";

  copy.innerHTML = `© ${anio} - Portfolio Personal - Desarrollado por `;
  copy.appendChild(a);
});