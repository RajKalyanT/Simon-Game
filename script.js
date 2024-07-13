let buttonColor = ["red","blue","green","yellow"];
let gamePattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(randomNumber);
}