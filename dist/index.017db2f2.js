document.addEventListener("DOMContentLoaded", setup);
function setup() {
    const mainArea = document.getElementById("main-area");
    mainArea.innerHTML = "Hello from JavaScript";
    const state1Button = document.getElementById('state1');
    const dashboardButton = document.getElementById('dashboard');
    state1Button.onclick = onStateClicked;
    dashboardButton.onclick = onDashboardButtonClicked;
}
function onStateClicked() {
    const mainArea = document.getElementById("main-area");
    mainArea.innerHTML = "This is state 1";
}
function buildDashboard(mainArea) {
}
function onDashboardButtonClicked() {
    const mainArea = document.getElementById("main-area");
    buildDashboard(mainArea);
}

//# sourceMappingURL=index.017db2f2.js.map
