const nav = document.querySelector(".nav")
const menuBtn = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")
const menuBehind = document.querySelector(".nav__behind")

menuBtn.addEventListener("click", () => {
  nav.classList.add("nav--active")
})

closeMenu.addEventListener("click", () => {
  nav.classList.remove("nav--active")
})

menuBehind.addEventListener("click", () => {
  nav.classList.remove("nav--active")
})