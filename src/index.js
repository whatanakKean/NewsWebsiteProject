const menuButton = document.querySelector("#menu");
const dropList = document.querySelector("#dropList");


menuButton.addEventListener("click", () => {
  dropList.classList.toggle("hidden");
});

