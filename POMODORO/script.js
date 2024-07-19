let minutes = 25;
let seconds = 0;
let temp;
let running = false;


function setHTML(){
    if(minutes < 10) {
        document.querySelector(".minute").innerHTML = "0" + minutes;
    }else {
        document.querySelector(".minute").innerHTML = minutes;
    }
    if(seconds < 10) {
        document.querySelector(".second").innerHTML = "0" + seconds;
    } else {
        document.querySelector(".second").innerHTML = seconds;
    }
}

function startPomodoro() {
    setHTML();
    temp = setInterval(()=>{
        seconds--;
        if(minutes <= 0 && seconds < 0) {
            clearInterval(temp);
            return;
        }
        if(seconds < 0) {
            minutes = minutes - 1;
            seconds = 59;
        } 
        setHTML();
    },1000);
}

document.querySelector("#btnStart").addEventListener("click", ()=>{
    if(!running) {
        startPomodoro();
        running = true;
    }
});
document.querySelector("#btnPause").addEventListener("click",()=> {
    clearInterval(temp);
    running = false;
});
document.querySelector("#btnReset").addEventListener("click",()=> {
    clearInterval(temp);
    minutes = 25;
    seconds = 0;
    document.querySelector(".minute").innerHTML = "25";
    document.querySelector(".second").innerHTML = "00";
    running = false;
});
