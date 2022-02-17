function updateInfoWidget (num) {
    const textWidgetInfo = document.querySelector(".Widget_info_msg_leftBox_text")
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

updateInfoWidget(localStorage.getItem("numbersOfRecipes"))