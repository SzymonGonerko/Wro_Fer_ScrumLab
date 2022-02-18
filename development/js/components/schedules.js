const selects = document.querySelectorAll("select");
const planTitle = document.querySelector(".plan_box_main_name--input");
const planDescription = document.querySelector(".plan_box_main_description--input");
const weekNumber = document.querySelector(".plan_box_main_week--input");

const mondayArr = document.querySelectorAll(".monday");
const tuesdayArr = document.querySelectorAll(".tuesday");
const wednesdayArr = document.querySelectorAll(".wednesday");
const thursdayArr = document.querySelectorAll(".thursday");
const fridayArr = document.querySelectorAll(".friday");
const saturdayArr = document.querySelectorAll(".saturday");
const sundayArr = document.querySelectorAll(".sunday");

class Schedule {
    constructor(id, title, description, weekNumber) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.weekNumber = weekNumber;
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
        this.saturday = [];
        this.sunday = [];
    }

    saveToLocalStorage(el) {
        let newPlan = [];
        try {
            newPlan = JSON.parse(localStorage.plans);
        } catch (e) {}
        newPlan.push(el);
        localStorage.setItem("plans", JSON.stringify(newPlan));
        localStorage.setItem("numberOfPlans", JSON.parse(localStorage.getItem('plans')).length)
        updateInfoWidgetPlans(localStorage.getItem("numberOfPlans"))
    }
}

const addPlan = (e) => {
    e.preventDefault();

    for (let el of subSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "6.1_Add_new_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }

    planTitle.value = '';
    planDescription.value = '';
    weekNumber.value = '';
    selects.forEach(el => el.innerHTML = `<option value="">Wybierz</option>`)

    for (let element of selects) {
        allRecipes.forEach(el => {
            let option = document.createElement("option")
            option.innerHTML = `<option value="">${el.title}</option>`
            element.appendChild(option)
        })
    }
}

const storePlan = (e) => {
    e.preventDefault()
    let plans = [];
    try {
        plans = JSON.parse(localStorage.plans);
    } catch (e) {}

    const plan = new Schedule(plans.length + 1, planTitle.value, planDescription.value, weekNumber.value);

    mondayArr.forEach(el => plan.monday.push(el.value))
    tuesdayArr.forEach(el => plan.tuesday.push(el.value))
    wednesdayArr.forEach(el => plan.wednesday.push(el.value))
    thursdayArr.forEach(el => plan.thursday.push(el.value))
    fridayArr.forEach(el => plan.friday.push(el.value))
    saturdayArr.forEach(el => plan.saturday.push(el.value))
    sundayArr.forEach(el => plan.sunday.push(el.value))

    plan.saveToLocalStorage(plan);

    for (let el of subSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "6.1_Add_new_plan(success)" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }
    setTimeout(function () {
        for (let el of subSections) {
            el.dataset.isselected = "false";
            const {ticketFirst} = el.dataset
            ticketFirst === "3.1_Desktop_-_Widget_add_recipes_and_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
            el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
        }
    }, 1700);
}

for (let el of widgets) {
    el.dataset.event === "add_plan" ? el.addEventListener("click", addPlan): null;
}

const planSubmit = document.querySelector(".plan_box_header")
planSubmit.addEventListener('submit', storePlan);
