document.addEventListener("DOMContentLoaded", function () {
    const startEl = document.getElementById("start");
    const stopEl = document.getElementById("stop");
    const resetEl = document.getElementById("reset");
    const timerEl = document.getElementById("timer");

    function startTimer() {
        console.log("start");
    }
    function stopTimer() {
        console.log("stop");
    }
    function resetTimer() {
        console.log("reset");
    }

    startEl.addEventListener("click", startTimer);
    stopEl.addEventListener("click", stopTimer);
    resetEl.addEventListener("click", resetTimer);
});
