import Dashboard from "./components/dashboard";

document.addEventListener("DOMContentLoaded", setup)

function setup(){
    const mainArea = document.getElementById("main-area")
    mainArea.innerHTML = "Hello from JavaScript"

    const state1Button = document.getElementById('state1')
    const dashboardButton = document.getElementById('dashboard')

    state1Button.onclick = onStateClicked
    dashboardButton.onclick = onDashboardButtonClicked

}


function onStateClicked() {
    const mainArea = document.getElementById("main-area")
    mainArea.innerHTML = "This is state 1"
}

function onDashboardButtonClicked() {
    const mainArea = document.getElementById("main-area")
    const dashboard = new Dashboard(mainArea)
    dashboard.build()
}
