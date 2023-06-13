const links = document.querySelector(".links");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backDrop = document.querySelector(".backdrop");

menuOpen.addEventListener("click", () => {
  links.classList.add("active");
  menuOpen.classList.add("active");
  menuClose.classList.add("active");
  backDrop.classList.add("active");
});

menuClose.addEventListener("click", () => {
  links.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop.classList.remove("active");
});

backDrop.addEventListener("click", () => {
  links.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop.classList.remove("active");
});