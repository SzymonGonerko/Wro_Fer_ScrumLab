const widgets = document.querySelectorAll(".Widget_add_recipes_and_plan .widget")
const subSections = document.querySelectorAll(".subSec")


for (let el of widgets) {
    el.dataset.event === "add_recipe" ? el.addEventListener("click", addRecipe): el.addEventListener("click", addPlan)
}

function addRecipe () {
    for (let el of subSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "4.1_Add_new_recipe" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }
}

function addPlan () {
    for (let el of subSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "6.1_Add_new_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }
}




