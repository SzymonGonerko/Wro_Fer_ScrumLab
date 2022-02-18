function updateInfoWidget (num) {
    const textWidgetInfo = document.querySelector(".widget_text_recipes")
    if (+num === 0) {
    textWidgetInfo.innerText = "Wygląda na to że nie masz przepisów, dodaj!"
    }
    if (+num === 1) {
        textWidgetInfo.innerText = `Masz już ${num} przepis, nieźle!`
    }
    if (num >= 2) {
        textWidgetInfo.innerText = `Masz już ${num} przepisy, nieźle!`
    }
    if (num > 5) {
        textWidgetInfo.innerText = `Masz już ${num} przepisów, nieźle!`
    }
}

updateInfoWidget(localStorage.getItem("allRecipes"))

function updateInfoWidgetPlans (num) {
    const textWidgetInfo = document.querySelector(".widget_text_plans")
    if (+num === 0) {
        textWidgetInfo.innerText = "Pamiętaj, aby dodać plan."
    }
    if (+num === 1) {
        textWidgetInfo.innerText = `Masz już ${num} plan, nieźle!`
    }
    if (num >= 2) {
        textWidgetInfo.innerText = `Masz już ${num} plany, nieźle!`
    }
    if (num > 5) {
        textWidgetInfo.innerText = `Masz już ${num} planów, nieźle!`
    }
}

updateInfoWidgetPlans(localStorage.getItem("plans"))
