const hambergerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");

const closeIcon = document.querySelector(".close-icon");

hambergerIcon.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
  console.log("hello Ashish");
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");

  console.log("its done man");
});
