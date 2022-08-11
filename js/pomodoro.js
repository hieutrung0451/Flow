let pomodoro = document.querySelector(".pomodoro");
let pomodoroCycles = document.querySelector(".pomodoro-cycles");

let pomodoroSound = document.querySelector(".pomodoro-sound");
let relaxSound = document.querySelector(".relax-sound");

let workMinutes = document.querySelector(".work-minutes");
let workSeconds = document.querySelector(".work-seconds");

let breakMinutes = document.querySelector(".break-minutes");
let breakSeconds = document.querySelector(".break-seconds");

let startButton = document.querySelector(".pomodoro-btn");

let startTimer;


startButton.addEventListener('click', function () {
    if ( startTimer === undefined ) {
        startTimer = setInterval(timer, 1000);
        pomodoro.style.backgroundColor = "#498374";
        pomodoroCycles.style.backgroundColor = "#498374";
        startButton.style.backgroundColor = "#498374";
        startButton.style.color = "#000";
    } else {
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.querySelector(".cycle").innerText = 0;
        clearInterval(startTimer);
        startTimer = undefined;

        pomodoro.style.backgroundColor = "#FFE8D6";
        pomodoroCycles.style.backgroundColor = "#FFE8D6";
        startButton.style.color = "#fff";
        startButton.style.backgroundColor = "#000";
    }

});

function timer() {

    // Work Time
    if ( workSeconds.innerText != 0 ) {
        
        workSeconds.innerText--;
    } else if ( workMinutes.innerText != 0 && workSeconds.innerText == 0 ) {
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    // Break Time
    if ( workMinutes.innerText == 0 && workSeconds.innerText == 0 ) {
        relaxSound.play();
        if ( breakSeconds.innerText != 0 ) {
            breakSeconds.innerText--;
        } else if ( breakMinutes.innerText != 0 && breakSeconds.innerText == 0 ) {
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }


    // Cycle
    if ( workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0 ) {
        pomodoroSound.play();
        relaxSound.pause();
        
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.querySelector(".cycle").innerText++;
    } 
}