let form = document.forms[0];
let container = document.querySelector(".container");
// Time Class
class Time {
    constructor(hour = null, minute = null, second = null) {
        if(hour == null && minute == null && second == null) {
            let now = new Date();
            this.hour = now.getHours();
            this.minute = now.getMinutes();
            this.second = now.getSeconds();
        } else {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
    }
    countSeconds(){
        return this.hour * 3600 + this.minute * 60 + this.second;
    }
}
// Alarm Class
class Alarm {
    constructor() { // fetching time from form input
        this.title = form.title.value;
        this.time = form.time.value;
    }
    // convert alarm object time to Time class object
    getTime() { 
        return new Time(this.getHours(), this.getMinutes(), this.getSeconds());
    }
    getHours() {
        return parseInt(this.time.split(":")[0]);
    }
    getMinutes() {
        return parseInt(this.time.split(":")[1]);
    }
    getSeconds() {
        return 0;
    }
    // create HTML element for alarm
    createHtmlElement() {
       let alarm = document.createElement('div');
       alarm.className = "alarm";
       alarm.innerHTML = 
       `
        <div class="alarm">
            <div class="time">
                <i class="fa-solid fa-clock"></i>
                ${this.time}
            </div>
            <div class="title">
                ${this.title}
            </div>
            <div class="duration">
            </div>
            <a href="index.html" id="btnReset"> Reset </a>
        </div>
       `;
       let duration = this.getDuration();
       alarm.querySelector(".duration").innerHTML = `Ring In ${duration.hour}:${duration.minute}:${duration.second}`;
        this.interval = setInterval(()=>{
            let duration = this.getDuration();
            alarm.querySelector(".duration").innerHTML = `Ring In ${duration.hour}:${duration.minute}:${duration.second}`;
        },1000);
        return alarm;
    }
    // set alarm
    setAlarm() {
        let duration = this.getDuration();
        let seconds = duration.countSeconds();
        this.alarm = setTimeout(()=>{
            document.querySelector('audio').play();
            clearInterval(this.interval);
        }, seconds * 1000);
    }
    // get difference duration between alarm time and current time
    getDuration() {
        let currentTime = new Time();
        let alarmTime = this.getTime();
        if (alarmTime.second < currentTime.second) {
            alarmTime.minute--;
            alarmTime.second += 60;
        }
        if (alarmTime.minute < currentTime.minute) {
            alarmTime.hour--;
            alarmTime.minute += 60;
        }
        if (alarmTime.hour < currentTime.hour) {
            alarmTime.hour += 24;
        }
        return new Time(alarmTime.hour - currentTime.hour, 
                                alarmTime.minute - currentTime.minute,
                                alarmTime.second - currentTime.second);
    }
}

function getResetButton(){
    let btn = document.createElement('a');
    btn.href = "index.html";
    btn.id = 'btnReset';
    btn.textContent = 'Reset';
    return btn;
}
form.btnSetAlarm.addEventListener("click",()=>{
    let alarm = new Alarm();
    alarm.setAlarm();
    form.style.display = "none";
    document.querySelector(".container").appendChild(alarm.createHtmlElement());
} );