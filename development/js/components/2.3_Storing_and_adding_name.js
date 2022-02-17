const textName = document.querySelector("form input.user");
const btnName = document.querySelector(".message_form__btn");

const allsubSections = document.querySelectorAll(".subSec")

btnName.addEventListener("click", function () {
    const inputName = document.querySelector(".message_form__input");
    localStorage.setItem('savedName', inputName.value);
    textName.value = localStorage.getItem("savedName");
    for (let el of allsubSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "3.1_Desktop_-_Widget_add_recipes_and_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }

});

if (localStorage.getItem("savedName") === null) {
    for (let el of allsubSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "2.2_Message_and_form" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }



}



if (localStorage.getItem("savedName") != null) {
    textName.value = localStorage.getItem("savedName");
    for (let el of allsubSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "3.1_Desktop_-_Widget_add_recipes_and_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }
}
else {
    textName.value = "Imię";
}