import "./styles/style.scss";

const sidebar = document.querySelector(".sidebar");
const leftMenuIcon = document.querySelector(".sidebar-icon");
leftMenuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});
