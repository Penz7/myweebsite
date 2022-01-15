const toggleOpen = document.querySelector(".toggle-open");
const menu = document.querySelector(".menu");

const toggleDarkMode = document.querySelector(".iconBox");
const showcase = document.querySelector(".showcase");
const videoBg = document.querySelector(".video-bg-1");

toggleOpen.onclick = function () {
  menu.classList.toggle("active");
  toggleOpen.classList.toggle("active");
};

toggleDarkMode.onclick = () => {
  showcase.classList.toggle("active");
  videoBg.classList.toggle("active");
};
