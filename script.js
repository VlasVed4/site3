const form = document.getElementById("loginForm");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Учебная демонстрация: данные не отправляются на сервер
  modal.classList.add("show");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show");
});
