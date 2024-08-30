let output = document.querySelector('#output');

document.querySelector('.pop-button').addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
    output.placeholder = "";
});

document.querySelector('.clear-button').addEventListener('click', () => {
    output.value = '';
    output.placeholder = "";
});

document.querySelectorAll('.number-button, .operator-button').forEach((button) => {
    button.addEventListener('click', (e) => {
        output.value += e.target.textContent;
    });
});

document.querySelector('.equal-button').addEventListener('click', () => {
    let expression = output.value;
    expression = expression.replace("x", "*");
    try {
        let result = eval(expression);
        if(result === undefined) {
            throw new Error("");
        }
        output.value = result;
        output.placeholder = "";
    } catch (e) {
        output.value = "";
        output.placeholder = "!Error";
    }
});