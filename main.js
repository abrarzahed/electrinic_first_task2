import "./styles/style.scss";

const sidebar = document.querySelector(".sidebar");
const leftMenuIcon = document.querySelector(".sidebar-icon");
const leftMenuCloseIcon = document.querySelector(".sidebar-close");
leftMenuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
leftMenuCloseIcon.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});
