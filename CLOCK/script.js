let hourContainer = document.getElementById("hour");
let minuteContainer = document.getElementById("minute");
let secondContainer = document.getElementById("second");


function formatValue(value) {
    return value < 10 ? "0" + value : value;
}
setInterval(()=>{
    let  date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hourContainer.innerHTML = formatValue(hour);
    minuteContainer.innerHTML = formatValue(minute);
    secondContainer.innerHTML = formatValue(second);
},1000);
