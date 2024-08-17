const icon = document.querySelector(".icon");

const offScreenMenu = document.querySelector(".off-screen-menu");

icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
