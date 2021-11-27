import Dashboard from "./components/dashboard";
import Weather from "./services/weather";

document.addEventListener("DOMContentLoaded", setup)

function setup(){
    const mainArea = document.getElementById("main-area")
    mainArea.innerHTML = "Hello from JavaScript"

    const state1Button = document.getElementById('state1')
    const dashboardButton = document.getElementById('dashboard')

    state1Button.onclick = onStateClicked
    dashboardButton.onclick = onDashboardButtonClicked

    const weather = new Weather()
    weather.getWeather(47.22, 39.63)
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
