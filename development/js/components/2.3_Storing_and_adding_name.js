const textName = document.querySelector("form input.user");
const btnName = document.querySelector(".message_form__btn");

btnName.addEventListener("click", function () {
    const inputName = document.querySelector(".message_form__input");
    localStorage.setItem('savedName', inputName.value);
    textName.value = localStorage.getItem("savedName");
});

if (localStorage.getItem("savedName") != null) {
    textName.value = localStorage.getItem("savedName");
}
else {
    textName.value = "Imię";
}