const container = document.querySelector(".container"),
    windowSizeX = document.querySelector(".windowSizeX"),
    windowSizeY = document.querySelector(".windowSizeY"),
    containerItem = container.querySelectorAll(".item");

function gridSetting() {
    windowSizeX.innerHTML = document.body.offsetWidth;
    windowSizeY.innerHTML = document.body.offsetHeight;

    if (document.body.offsetWidth < 768) {
        container.style.gridTemplateColumns =
            "repeat(2, 1fr)";
    } else if (document.body.offsetWidth < 992) {
        container.style.gridTemplateColumns =
            "repeat(3, 1fr)";
    } else {
        container.style.gridTemplateColumns =
            "repeat(5, 1fr)";
    }
}

function init() {
    window.addEventListener("resize", gridSetting, false);
    window.addEventListener("load", gridSetting, false);
}

init();