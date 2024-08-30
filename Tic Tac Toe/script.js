let boxContainer = document.querySelectorAll('.box');
let resultMsg = document.querySelector('.result-msg');
let count = 0;
let playerSymbol = "X";
let botSymbol = "O";
let disabled = false;

function getRandom() {
    return Math.floor((Math.random() * 9));
}
function botsTurn() {
    let randomBox;
    do {
        randomBox = boxContainer[getRandom()];
        console.log("bug");
    }while(randomBox.textContent !== "");
    randomBox.textContent = botSymbol;
    count++;
}
function playerTurn(box) {
    if(box.textContent === ""){
        box.textContent = playerSymbol;
        count++;
        return true;
    } else {
        return false;
    }
}

function checkWinsFor(symbol) {
    if(boxContainer[0].textContent===symbol && boxContainer[1].textContent===symbol && boxContainer[2].textContent===symbol) {
        return [0,1,2];
    } else if(boxContainer[0].textContent===symbol && boxContainer[3].textContent===symbol && boxContainer[6].textContent===symbol) {
        return [0,3,6];
    } else if(boxContainer[0].textContent===symbol && boxContainer[4].textContent===symbol && boxContainer[8].textContent===symbol) {
        return [0,4,8];
    } else if(boxContainer[1].textContent===symbol && boxContainer[4].textContent===symbol && boxContainer[7].textContent===symbol) { 
        return [1,4,7];
    } else if(boxContainer[2].textContent===symbol && boxContainer[5].textContent===symbol && boxContainer[8].textContent===symbol) {
        return [2,5,8];
    } else if(boxContainer[2].textContent===symbol && boxContainer[5].textContent===symbol && boxContainer[8].textContent===symbol) {
        return [2,4,6];
    } else if(boxContainer[3].textContent===symbol && boxContainer[4].textContent===symbol && boxContainer[5].textContent===symbol) {
        return [3,4,5];
    } else if(boxContainer[6].textContent===symbol && boxContainer[7].textContent===symbol && boxContainer[8].textContent===symbol) {
        return [6,7,8];
    } else {
        return false;
    }
}

function isPlayerWon(player){
    let result = checkWinsFor(player);
    if(Boolean(result)){
        result.forEach((i) => { boxContainer[i].classList.add("winning-line") });
        return true;
    } else {
        return false;
    }
}

function endGame() {
    disabled = true;
    boxContainer.forEach((box)=>{
        box.classList.add("disabled");
    });
}
boxContainer.forEach((box)=>{
    box.addEventListener("click", (event)=>{
        if(disabled){
            return;
        }
        if(count < 9){
            if(playerTurn(event.target) && count < 9) {
                botsTurn(event.target);
            }
        }
        if(count > 5){
            if(isPlayerWon(playerSymbol)){ 
                resultMsg.innerHTML = "you won the game ";
                resultMsg.style.backgroundColor = "green";
                resultMsg.style.color = "white";
                endGame();
            } else if(isPlayerWon(botSymbol)){ 
                resultMsg.innerHTML = "you lose the game ";
                resultMsg.style.backgroundColor = "red";
                resultMsg.style.color = "white";
                endGame();
            } else if(count === 9) {
                resultMsg.innerHTML = "game has been draw ";
                resultMsg.style.backgroundColor = "dodgerblue";
                resultMsg.style.color = "white";
                endGame();
            }
        }
    }); 
});