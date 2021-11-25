$(function () {
  let form = document.querySelector("form");

  if (form !== null) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      setTimeout(() => {
        window.location.href = "/game.html";
      }, 500);
    });
  }
});
