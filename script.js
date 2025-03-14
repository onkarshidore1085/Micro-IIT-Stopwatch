let startTime, updatedTime, difference;
let timer = null;
let running = false;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timer = setInterval(updateDisplay, 10);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(timer);
        difference = new Date().getTime() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00:00.000";
    startTime = null;
    difference = 0;
    running = false;
}

function updateDisplay() {
    let currentTime = new Date().getTime();
    difference = currentTime - startTime;
    
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = difference % 1000;

    document.getElementById("display").innerText =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function padMilliseconds(num) {
    return num < 10 ? "00" + num : num < 100 ? "0" + num : num;
}
