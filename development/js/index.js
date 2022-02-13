const display =(s)=> {
    if (s === 1) {
        d1.classList.remove("d-none")
        d1.classList.add("d-block")
        d2.classList.remove("d-block")
        d2.classList.add("d-none")
        d3.classList.remove("d-block")
        d3.classList.add("d-none")
    }
    else if (s === 2) {
        d1.classList.remove("d-block")
        d1.classList.add("d-none")
        d2.classList.remove("d-none")
        d2.classList.add("d-block")
        d3.classList.remove("d-block")
        d3.classList.add("d-none")
    }
    if (s === 3) {
        d1.classList.remove("d-block")
        d1.classList.add("d-none")
        d2.classList.remove("d-block")
        d2.classList.add("d-none")
        d3.classList.remove("d-none")
        d3.classList.add("d-block")
    }
}
const icLeft = document.querySelector("#icon-left")
const icRight = document.querySelector("#icon-right")
const d1 = document.querySelector("#d1")
const d2 = document.querySelector("#d2")
const d3 = document.querySelector("#d3")
let site = 1

icLeft.addEventListener("click", function (){
    if( site === 1 ) {
        site = 3
    }
    else {
        site -=1
    }
    display(site)

})
icRight.addEventListener("click", function () {
    if (site === 3) {
        site = 1
    } else {
        site += 1
    }
    display(site)
})