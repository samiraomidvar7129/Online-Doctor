const loadingElement = document.querySelector(".loader");
window.addEventListener("load", () => {
  loadingElement.classList.add("hidden");
});
let hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", () => {
  document.querySelector(".hamburger-menu-list").classList.toggle("active");
});
let item_1 = document.getElementById("header-nav");
document.addEventListener("scroll", function () {
  document.documentElement.scrollTop > 0
    ? item_1.classList.add("position")
    : item_1.classList.remove("position");
});
let DedicatedScroll = document.getElementById("dedicatedScroll");
window.addEventListener("scroll", () => {
  let e = window.scrollY,
    t,
    l = Math.round(
      100 * (e / (document.body.clientHeight - window.innerHeight))
    );
  DedicatedScroll.style.width = l + "%";
});
