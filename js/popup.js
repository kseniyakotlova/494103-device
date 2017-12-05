var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameus = popup.querySelector("[name=nameus]");
var email = popup.querySelector("[name=email]");
var textfield = popup.querySelector("[name=textfield]");

var storage = localStorage.getItem("nameus");
var storage = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    nameus.value = storage;
    email.value = storage;
    textfield.focus();
} else {
    nameus.focus();
    email.focus();
}
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!nameus.value || !email.value || !textfield.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя, e-mail и сообщение");
  } else {
    localStorage.setItem("nameus", nameus.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    }
  }
});
