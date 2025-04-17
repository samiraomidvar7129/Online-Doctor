const loadingElement = document.querySelector(".loader");
window.addEventListener("load", () => {
  loadingElement.classList.add("hidden");
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
