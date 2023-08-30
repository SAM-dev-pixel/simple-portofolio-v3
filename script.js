document.querySelector(".year-copyright").textContent =
  new Date().getFullYear() + "©";
((burger) => {
  burger.addEventListener("click", () =>
    document.querySelector(".nav-links").classList.toggle("show")
  );
})(document.querySelector(".burger-btn"));
