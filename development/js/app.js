
// ---------> 3.2 Widget info (hide widget elements) <---------

const infoWidget = document.querySelector('.info')
const warnWidget = document.querySelector('.warn')
const successWidget = document.querySelector('.success')

const iconXInfo = document.querySelector('.icon-x-info')
const iconXWarn = document.querySelector('.icon-x-warn')
const iconXSuccess = document.querySelector('.icon-x-success')

function hideInfoWidget () {
    infoWidget.style.display = "none"
}

function hideWarnWidget () {
    warnWidget.style.display = "none"
}

function hideSuccessWidget () {
    successWidget.style.display = "none"
}

iconXInfo.addEventListener('click', hideInfoWidget)
iconXWarn.addEventListener('click', hideWarnWidget)
iconXSuccess.addEventListener('click', hideSuccessWidget)





