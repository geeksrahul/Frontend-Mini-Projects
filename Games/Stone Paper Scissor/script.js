let objects = document.querySelectorAll('.game-object');
let msg = document.querySelector('.result-message');
function resetGame() {
    objects.forEach((obj)=>{
        obj.style.border = "none";
    })
}
function getBotObject() {
    let digit = Math.floor((Math.random()*3) + 1);
    switch(digit) {
        case 1 :
            return "stone";
        case 2 : 
            return "paper";
        case 3 :
            return "scissor";
    }
}
function getResult(playerObject, botObject) { 
    if(playerObject === botObject) {
        return {draw:true, playerWon:false, winner:botObject, loser:botObject, msg:"Game Has Been Draw 😶"};
    } else if ((playerObject === "stone" && botObject === "scissor") || (playerObject === "paper" && botObject === "stone") || (playerObject === "scissor" && botObject === "paper") ){
        return {draw:false, playerWon:true, winner:playerObject, loser:botObject, msg:"You won the game 🏆"};
    } else {
        return {draw:false, playerWon:false, winner:botObject, loser:playerObject, msg:"You lose the game 😕"};
    }
}
function displayResult(result) {
    document.querySelector(".result-message").innerHTML = result.msg;
    document.querySelector(`#${result.winner}`).style.border = "5px solid green";
    document.querySelector(`#${result.loser}`).style.border = "5px solid red";
}
function startGame(playerObject) {
    let botObject = getBotObject(); // get bot object 
    let result = getResult(playerObject, botObject); // compare result 
    displayResult(result); // display result on html docs
}
// Events
objects.forEach((object)=>{
    object.addEventListener("click", (event)=>{
        resetGame();  // Reset the game after each click
        let playerObject = event.target.getAttribute("id"); // Get the player object as per click
        startGame(playerObject);
    });
});