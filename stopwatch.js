const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
let hr = (min = sec = ms = "0" + 0),
  startTimer;

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

function start() {
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms === 10) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    } else if (sec === 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    } else if (min === 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    getValue();
  }, 100);
}

function stop() {
  clearInterval(startTimer);
}

function reset() {
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  getValue();
}

function getValue() {
  document.querySelector(".miliseconds").innerText = ms;
  document.querySelector(".seconds").innerText = sec;
  document.querySelector(".minutes").innerText = min;
  document.querySelector(".hours").innerText = hr;
}
