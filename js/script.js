const displayTimer = document.querySelector("#timer");
const title = document.querySelector('title');
const startBtn = document.querySelector("#startBtn");
const pomoBtn = document.querySelector("#pomoBtn");
const breakBtn = document.querySelector("#breakBtn");
let duration = null;

const modes = {
    POMODORO: "Pomodoro",
    BREAK: "Break",
}

let timerMode = modes.POMODORO;

const defaultDurations = {
    [modes.POMODORO]: 60 * 25,
    [modes.BREAK]: 60 * 5
}

function startTimer() {
    interval = setInterval(function () {
        const minutes = parseInt(duration / 60, 10)
            .toString()
            .padStart(2, "0");

        const seconds = parseInt(duration % 60, 10)
            .toString()
            .padStart(2, "0");

        displayTimer.textContent = minutes + ":" + seconds;
        title.textContent = minutes + ":" + seconds + ' - ' + timerMode;

        if (--duration < 0){
            duration = defaultDurations[timerMode];
            clearInterval(interval)
            if(timerMode == modes.POMODORO)
                displayTimer.innerText = '25:00';
            else
                displayTimer.innerText = '05:00'
        }
        
    }, 1000)
    
}

startBtn.addEventListener('click', () => {

    if (timerMode == modes.POMODORO && duration === null)
        duration = 60 * 25; //To seconds
    else if(timerMode == modes.BREAK && duration === null)
        duration = 60 * 5;

    switch (startBtn.innerText) {
        case 'START':
            startTimer(displayTimer);
            console.log('start')
            break;
        case 'PAUSE':
            clearInterval(interval);
            console.log('pause')
    }

    if (startBtn.innerText == 'START')
        startBtn.innerText = 'PAUSE';
    else
        startBtn.innerText = 'START';

})

pomoBtn.addEventListener("click", () => {
    if (timerMode != modes.POMODORO) {
        displayTimer.innerHTML = "25:00";
        timerMode = modes.POMODORO
        pomoBtn.style.backgroundColor = "rgba(0, 0, 0, .2)";
        pomoBtn.style.fontWeight = "700";
        breakBtn.style.fontWeight = "400";
        breakBtn.style.backgroundColor = "transparent";
        duration = defaultDurations[modes.POMODORO];
    }
    else
        alert('Pomodoro are already set!');
})
breakBtn.addEventListener("click", () => {
    if (timerMode != modes.BREAK) {
        displayTimer.innerHTML = "05:00";
        timerMode = modes.BREAK
        breakBtn.style.backgroundColor = "rgba(0, 0, 0, .2)";
        breakBtn.style.fontWeight = "700";
        pomoBtn.style.fontWeight = "400";
        pomoBtn.style.backgroundColor = "transparent";
        duration = defaultDurations[modes.BREAK];
    }
    else
        alert('Break are already set!');
})