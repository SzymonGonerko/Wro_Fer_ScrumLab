const widgets = document.querySelectorAll(".Widget_add_recipes_and_plan .widget")
const subSections = document.querySelectorAll(".subSec")

const formRecipe = document.querySelector(".form__new__recipe")

const olInstruction = document.querySelector(".ol__instruction")
const areaInstruction = document.querySelector("#area__instruction")

const olIngredient = document.querySelector(".ol__ingredient")
const areaIngredients = document.querySelector("#area__ingredients")

// ----------------------------
const allRecipes = []
// ----------------------------



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
    for (let el of formRecipe) {
    el.dataset.clear === "clear_value" ? el.value = '': el.value
    }

olInstruction.innerHTML = '<ol type="1" className="ol__instruction"></ol>'
olIngredient.innerHTML = '<ol type="1" class="ol__ingredient"></ol>'
}

function addPlan () {
    for (let el of subSections) {
        el.dataset.isselected = "false";
        const {ticketFirst} = el.dataset
        ticketFirst === "6.1_Add_new_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
        el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
    }
}


const iconsAdd = document.querySelectorAll(".icon__recipe")
for (let el of iconsAdd) {
    const {event} = el.dataset
    event === "iconInstruction" ? el.addEventListener("click", addInstruction) : el.addEventListener("click", addIngredient)
}


function addInstruction () {
    if (areaInstruction.value.length > 3) {
        const newLi = document.createElement("li")
        newLi.innerText = areaInstruction.value
        olInstruction.appendChild(newLi)
        areaInstruction.style.border = "1px solid black"
        areaInstruction.value = ''
    }
}

function addIngredient () {
    if (areaIngredients.value.length > 3) {
        const newLi = document.createElement("li")
        newLi.innerText = areaIngredients.value
        olIngredient.appendChild(newLi)
        areaIngredients.style.border = "1px solid black"
        areaIngredients.value = ''
    }

}



formRecipe.addEventListener("submit", saveRecipe)
function saveRecipe (event) {
    event.preventDefault()
    const isCorrect = Recipe()

    if (isCorrect) {
        for (let el of subSections) {
            el.dataset.isselected = "false";
            const {ticketFirst} = el.dataset
            ticketFirst === "4.1_Add_new_recipe(success)" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
            el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")
        }
        setTimeout(function () {
            for (let el of subSections) {
                el.dataset.isselected = "false";
                const {ticketFirst} = el.dataset
                ticketFirst === "3.1_Desktop_-_Widget_add_recipes_and_plan" ? el.dataset.isselected = "true" : el.dataset.isselected = "false"
                el.dataset.isselected === "true" ? el.classList.add("show__subsection") : el.classList.remove("show__subsection")

            };

        }, 1700);
        console.log(allRecipes)
    }


}




function Recipe () {
    this.isCorrect = true
    this.form = {
        name: document.querySelector("#name_recipe"),
        description: document.querySelector("#description"),
        instructions: document.querySelectorAll(".box_with_instruction ol li"),
        ingredients: document.querySelectorAll(".box_with_ingredients ol li")
    }
    this.recpie = {
        title: this.form.name.value,
        description: this.form.description.value,
        instructions: [],
        ingredients: [],
    }

        this.getInstructions = function () {
        const allRecipies = [];
        const [...instruction] = this.form.instructions
        instruction.forEach(el => allRecipies.push(el.innerText))
        this.recpie.instructions.push(allRecipies)

    }

        this.getIngredients = function () {
        const allingredients = []
        const [...ingredient] = this.form.ingredients
        ingredient.forEach(el => allingredients.push(el.innerText))
        this.recpie.ingredients.push(allingredients)
    }

        this.validate = function () {
        if (this.recpie.title.length <= 1) {
            this.form.name.style.border = "1px solid red"
            this.isCorrect = false
        } else {this.form.name.style.border = "1px solid black"}

        if (this.recpie.description.length <= 1) {
            this.form.description.style.border = "1px solid red"
            this.isCorrect = false
        } else {this.form.description.style.border = "1px solid black"}

        if (this.recpie.instructions[0].length <= 0) {
            areaInstruction.style.border = "1px solid red"

            this.isCorrect = false
        } else {
            areaInstruction.style.border = "1px solid black"
        }
        if (this.recpie.ingredients[0].length <= 0) {
            areaIngredients.style.border = "1px solid red"
            this.isCorrect = false
        } else {areaIngredients.style.border = "1px solid black"}

        if (this.isCorrect) {
            allRecipes.push(this.recpie)
            return this.isCorrect
        }

    }
    this.getInstructions()
    this.getIngredients()
    return this.validate()
}








    //
    // Recipe.prototype.saveToLocalStorage = function() {
    //     /* if(){
    //         // uzupełnij
    //       }else{
    //         // uzupełnij
    //       } */
    // }



