let hoursP = document.getElementById("hours");
let minutesP = document.getElementById("minutes");
let secondsP = document.getElementById("seconds");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

pauseBtn.disabled = true;

let paused;

function start() {
    startBtn.value = 'START';
    startBtn.disabled = true;
    resetBtn.disabled = false;
    pauseBtn.disabled = false;

    setTimeout(function() {
        if(paused){
            paused = false;
        }else{
             paused = false;
            if(secondsP.innerHTML == 60){
                minutesP.innerHTML = parseInt(minutesP.innerHTML) + 1;
                if(minutesP.innerHTML == 60){
                    hoursP.innerHTML = parseInt(hoursP.innerHTML) + 1;
                    minutesP.innerHTML = 0;
                }
                secondsP.innerHTML = 0;
                start();
            }else{
                secondsP.innerHTML = parseInt(secondsP.innerHTML) + 1;
                start();
            }
        }
    }, 1000);
}

  function pause() {
    paused = true;
    startBtn.value = 'RESUME';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
}

function reset() {
    startBtn.value = 'START';
    hoursP.innerHTML = 0;
    minutesP.innerHTML = 0;
    secondsP.innerHTML = 0;

}
