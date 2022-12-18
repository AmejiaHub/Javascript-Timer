//SHOW CURRENT TIME AND DATE

function updateTime() {
    var now = new Date();
    document.getElementById('time').innerHTML = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
  }
  
  setInterval(updateTime, 1000);

// get input elements
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

// get timer display element
const timerDisplay = document.getElementById('timer');

// get control buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// initialize variables for timer
let interval;
let hours;
let minutes;
let seconds;

// function to start timer
function startTimer() {
    // get values from input elements
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    // set interval to update timer every 1000ms (1 second)
    interval = setInterval(updateTimer, 1000);
}

// function to update timer display
function updateTimer() {
  // decrease seconds by 1
  seconds--;

  // if seconds reach below 0, decrease minutes by 1 and set seconds to 59
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }

  // if minutes reach below 0, decrease hours by 1 and set minutes to 59
  if (minutes < 0) {
    hours--;
    minutes = 59;
  }

   // if hours reach below 0, stop timer and display message
   if (hours < 0) {
    stopTimer();
    return;
  }

  // update timer display
  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // if timer reaches 00:00:00, play alarm sound
  if (hours === 0 && minutes === 0 && seconds === 0) {
    const alarm = new Audio('/mixkit-vintage-warning-alarm-990.wav');
    alarm.play();
  }
}

// function to stop timer
function stopTimer() {
  clearInterval(interval);
}

// function to reset timer
function resetTimer() {
  stopTimer();
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  timerDisplay.textContent = '00:00:00';
}

// add event listeners to control buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
