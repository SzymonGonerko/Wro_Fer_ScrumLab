
const widget1 = document.querySelector(".widget1")
const widget2 = document.querySelector(".widget2")
const modal1 = document.querySelector(".modal1")
const close1 = document.querySelector("#close1")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")

widget1.addEventListener("click", function () {
    modal1.classList.remove("none")
    text1.classList.remove("none")
    text2.classList.add("none")
})
widget2.addEventListener("click", function () {
    modal1.classList.remove("none")
    text2.classList.remove("none")
    text1.classList.add("none")
})
close1.addEventListener("click",function (){
    modal1.classList.add("none")
})
