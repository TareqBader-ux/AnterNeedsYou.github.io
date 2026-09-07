let timeLeft = 3 * 60 * 60;

let timer = document.getElementById("timer");
let sound = document.getElementById("kitenmeyaw");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let countdownInterval = null;
let meowTimeout = null;

let started = false;


// START BUTTON
start.addEventListener("click", function () {

    if (started === false) {

        started = true;

        // NEW IF WHEN STARTED
        if (started === true) {
            console.log("console.log.say.pressed.btn.start(timer)");
        }

        countdownInterval = setInterval(function () {

            let hours = Math.floor(timeLeft / 3600);
            let minutes = Math.floor((timeLeft % 3600) / 60);
            let seconds = timeLeft % 60;

            timer.textContent =
                String(hours).padStart(2, "0") + ":" +
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");

            if (timeLeft <= 0) {

                meowALOT();

                timeLeft = 3 * 60 * 60;
            }

            timeLeft--;

        }, 1000);

    }

});


// STOP BUTTON
stop.addEventListener("click", function () {

    if (started === true) {

        started = false;

        // NEW IF WHEN STOPPED
        if (started === false) {
            console.log("console.log.say.pressed.btn.stop(timer)");
        }

        clearInterval(countdownInterval);

        countdownInterval = null;

        clearTimeout(meowTimeout);

        sound.pause();

        sound.currentTime = 0;

    }

        if (started === false) {
            console.log("console.log.say.pressed.btn.reset(timer)");
    }

});


// RESET BUTTON
reset.addEventListener("click", function () {

    started = false;

    clearInterval(countdownInterval);

    countdownInterval = null;

    clearTimeout(meowTimeout);

    sound.pause();

    sound.currentTime = 0;

    timeLeft = 3 * 60 * 60;

    timer.textContent = "03:00:00";

});


// MEOW A LOT
function meowALOT() {

    let meowCount = 0;

    function nextMeow() {

        if (started === false) {
            return;
        }

        if (meowCount >= 10) {
            return;
        }

        sound.currentTime = 0;

        sound.play().catch(function(error) {

            console.log("Meow error:", error);

            // NEW IF WHEN AN ERROR HAPPENS
            if (error) {
                console.log("Err.accidint.unknown(timer)")
            }

        });

        meowCount++;

        meowTimeout = setTimeout(nextMeow, 1000);

    }

    nextMeow();
}