const textOfWidget = document.querySelector(".Widget_info_msg_leftBox_text")
let numbersOfRecipes = localStorage.getItem("NumOfRecipes")

function setNumberOfRecipes (num) {
    console.log(num)
    if (num == 0) {
        textOfWidget.innerText = `Wygląda na to że nie masz przepisów, dodaj!`
    }

    if (num == 1) {
        textOfWidget.innerText = `Masz już ${num} przepis, nieźle!`
    }

    if (num == 1) {
        textOfWidget.innerText = `Masz już ${num} przepis, nieźle!`
    }

    if (num > 1) {
        textOfWidget.innerText = `Masz już ${num} przepisy, nieźle!`
    }

    if (num == 5) {
        textOfWidget.innerText = `Masz już ${num} przepisów, nieźle!`
    }

    if (num > 5) {
        textOfWidget.innerText = `Masz już ${num} przepisów, nieźle!`
    }
}
