
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

iconXInfo.addEventListener('click', hideInfoWidget)

function hideWarnWidget () {
    warnWidget.style.display = "none"
}

iconXWarn.addEventListener('click', hideWarnWidget)

function hideSuccessWidget () {
    successWidget.style.display = "none"
}

iconXSuccess.addEventListener('click', hideSuccessWidget)





