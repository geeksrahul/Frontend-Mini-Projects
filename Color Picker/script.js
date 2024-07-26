const colorTrackerContainer = document.querySelectorAll(".color-tracker-container");
const colorFieldContainer = document.querySelectorAll(".color-field-container");
const output = document.querySelector(".output-container");
let color;
function resetTraker() {
    colorTrackerContainer.forEach((tracker,index)=>{
        colorFieldContainer[index].value = tracker.value;
    })
}

function resetFields() {
    colorFieldContainer.forEach((field,index)=>{
        colorTrackerContainer[index].value = field.value; 
    });
}
function resetColor() {
    let red = colorTrackerContainer[0].value;
    let green = colorTrackerContainer[1].value;
    let blue = colorTrackerContainer[2].value;
    let alpha = colorTrackerContainer[3].value;
    color = `rgba(${red}, ${green}, ${blue}, ${alpha}%)`;
    output.style.backgroundColor = color;
}

colorTrackerContainer.forEach((colorTracker)=>{
    colorTracker.addEventListener("input",()=>{
        resetTraker();
        resetColor();
    });
});
colorFieldContainer.forEach((colorTracker)=>{
    colorTracker.addEventListener("input",()=>{
        resetFields();
        resetColor();
    });
});

window.addEventListener("load", ()=>{
    resetColor();
});

document.querySelector("button").addEventListener("click", ()=>{
    try {
        navigator.clipboard.writeText(color).then(()=>{
            console.log("copied successfully");
            document.body.backgroundColor = "red";
        }).catch(()=>{
            console.log("can't copied");
            document.body.backgroundColor = "blue";
            alert("not");    
        });
    } catch (error) {
xxxs    }
});