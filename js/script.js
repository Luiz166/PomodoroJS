const displayTimer = document.querySelector("#timer");
const title = document.querySelector('title');
const startBtn = document.querySelector("#startBtn");
const pomoBtn = document.querySelector("#pomoBtn");
const breakBtn = document.querySelector("#breakBtn");

let timerMode = 'pomodoro';

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        title.textContent = minutes + ":" + seconds + ' - ' + timerMode;

        if (--timer < 0)
        timer = duration;
        if(displayTimer.textContent == "00:00"){
            clearInterval(interval)
            if(timerMode == 'pomodoro')
                displayTimer.innerText = '25:00';
            else
                displayTimer.innerText = '05:00'
        }
    }, 10)
    
}

startBtn.addEventListener('click', () => {
    let duration;

    if (timerMode == 'pomodoro')
        duration = 60 * 25; //To seconds
    else
        duration = 60 * 5;

    switch (startBtn.innerText) {
        case 'START':
            startTimer(duration, displayTimer);
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
    if (timerMode != 'pomodoro') {
        displayTimer.innerHTML = "25:00";
        timerMode = 'pomodoro'
        pomoBtn.style.backgroundColor = "rgba(0, 0, 0, .2)";
        pomoBtn.style.fontWeight = "700";
        breakBtn.style.fontWeight = "400";
        breakBtn.style.backgroundColor = "transparent";
    }
    else
        alert('Pomodoro are already set!');
})
breakBtn.addEventListener("click", () => {
    if (timerMode != 'break') {
        displayTimer.innerHTML = "05:00";
        timerMode = 'break'
        breakBtn.style.backgroundColor = "rgba(0, 0, 0, .2)";
        breakBtn.style.fontWeight = "700";
        pomoBtn.style.fontWeight = "400";
        pomoBtn.style.backgroundColor = "transparent";
    }
    else
        alert('Break are already set!');
})