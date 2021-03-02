let gameScore = 0;
score.textContent = gameScore;

let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");

button1.addEventListener("click", function(){ console.log("Button 1 pressed.");});
button2.addEventListener("click", function(){ console.log("Button 2 pressed.");});
button3.addEventListener("click", function(){ console.log("Button 3 pressed.");});
button4.addEventListener("click", function(){ console.log("Button 4 pressed.");});

function addScore() {
    gameScore++;
    score.textContent = gameScore;
}

function stop() {
    let gameover = document.querySelector("#gameover");
    gameover.classList.remove("gameoveroff");
    finalscore.textContent = gameScore;
}