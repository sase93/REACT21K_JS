/* Add sounds to start game and end game
Add own image to highlighted circle
End message is conditional based on the score
Advanced speedgame (optional): 

User can enter her/his name and end result will be saved
Top 10 score is shown in end of the game
Implement levels – speed gets faster or there will be more circles in every level*/

let gameScore = 0;
score.textContent = gameScore;

let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");
const BUTTONS = document.querySelectorAll(".button");
const BTNARRAY = [button1, button2, button3, button4];
let buttonArray = [button1, button2, button3, button4];

function addScore() {
    gameScore++;
    score.textContent = gameScore;
}

buttonArray.forEach(button => button.addEventListener('click', checkActive));

function checkActive(button) {
    let buttonId = button.target.id;
    if (document.querySelector(`#${buttonId}`).classList.contains('active')) {
        return;
    } else {
        gameScore = gameScore - 1;
        score.textContent = gameScore;
        stop();
        gameOverStatus = true;
    }
}

let gameOverStatus = false;
let missCounter = 0;
let gameSpeed = 1000;

function gameEngine() {
    let buttonInterval = setTimeout(nextTarget, gameSpeed);

    function nextTarget() {
        missCounter++;
        if ((gameScore - missCounter) <= -4) {
            stop();
        }
        let randomNum = Math.floor(Math.random() * buttonArray.length);
        BUTTONS.forEach(button => button.classList.remove("active"));
        buttonArray[randomNum].classList.add("active");
        gameSpeed = gameSpeed - 15;
        let buttonInterval = setTimeout(nextTarget, gameSpeed);
    }
}

/* let activeIndex = buttonArray.findIndex(each => each.classList.contains('active')); */

/* if (activeIndex != -1){
            buttonArray.splice(activeIndex, 1);
        } */

function start() {
    button1.classList.remove("noclick");
    button2.classList.remove("noclick");
    button3.classList.remove("noclick");
    button4.classList.remove("noclick");
    document.querySelector("#start").classList.add("invis");
    document.querySelector("#stop").classList.remove("invis");
    gameEngine();
}

function stop() {
    button1.classList.add("noclick");
    button2.classList.add("noclick");
    button3.classList.add("noclick");
    button4.classList.add("noclick");
    document.querySelector("#gameover").classList.remove("invis");
    finalscore.textContent = gameScore;
    document.querySelector("#stop").classList.add("invis");
    document.querySelector("#reset").classList.remove("invis");
}