let weightInput = document.querySelector('#weight');
let heightInput = document.querySelector('#height');
let output = document.querySelector('#output');
let form = document.querySelector("form");
let outputMsg = "";

function validate(value) {
    if(value === "" ||  value === undefined || value === null || value.length === 0) {
        outputMsg = "Please Enter A Values !";
        return false;
    } else if(isNaN(Number(value))) {
        outputMsg = "Please Enter A Numeric Values !";
        return false;
    } else if(value <= 0){
        outputMsg = "Please Enter A Positive Values !";
        return false;
    } else {
        return true;
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    if(validate(weightInput.value) && validate(heightInput.value)) {
        let weight = weightInput.value;
        let height = heightInput.value;
        let BMI = (weight / (height*height)).toFixed(2);
        output.value = BMI;
    } else {
        output.value = outputMsg;
    }
} );