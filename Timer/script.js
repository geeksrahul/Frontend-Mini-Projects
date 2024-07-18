let hour = 0;
let minute = 0;
let second = 0;
let temp;
let running = false;

// DOM 
let hourBox = document.querySelector('#hours');
let minuteBox = document.querySelector('#minutes');
let secondBox = document.querySelector('#seconds');

// filling time in html element 
function fillTimeBox() {
    if(hour < 10) {
        hourBox.innerHTML = "0" + hour;
    } else {
        hourBox.innerHTML = hour;
    }
    if(minute < 10) {
        minuteBox.innerHTML = "0" + minute;
    } else {
        minuteBox.innerHTML = minute;
    }
    if(second < 10) {
        secondBox.innerHTML = "0" + second;
    } else {
        secondBox.innerHTML = second;
    }
}

// starting/resuming timer
function startTimer() {
    running = true;
    second++;
    fillTimeBox();
    temp = setInterval(()=>{
        second++;
        if(second > 60) {
            second = 0;
            minute++;
        }
        if(minute > 60){
            minute = 0;
            hour++;
        }
        fillTimeBox();
    },1000);
}

// Event Handling 
document.querySelector("#btnPause").addEventListener("click" , ()=> {
    if(running) {
        clearInterval(temp);
        running = false;
    }
});
document.querySelector("#btnStart").addEventListener("click" , ()=> {
    if(! running) {
        startTimer();
    }
});
document.querySelector("#btnReset").addEventListener("click" , ()=> {
    clearInterval(temp);
    hour = minute = second = 0;
    hourBox.innerHTML = minuteBox.innerHTML = secondBox.innerHTML = "00";
    running = false;
});