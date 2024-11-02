const sideNav = document.getElementById("sideNav");
const openNavButton = document.getElementById("sideNavToggle");
const closeNavButton = document.getElementById("closeNav");
const settingButton = document.getElementById("settingButton")

const logoContainers = document.querySelectorAll(".logo-container")
const logoRoutes = [
  "facebook.html",
  "instagram.html",
  "youtube.html",
  "twitter.html"
];

logoContainers.forEach((element, index) => {
  element.addEventListener("click", () => {
    window.location.href = `./${logoRoutes[index]}`
  })
})

openNavButton.addEventListener("click", () => {
  sideNav.style.width = "250px"; // Slide in effect
});

closeNavButton.addEventListener("click", () => {
  sideNav.style.width = "0"; // Slide out effect
});

settingButton.addEventListener("click", () => {
    window.location.href = "./mainsetting.html"
})
