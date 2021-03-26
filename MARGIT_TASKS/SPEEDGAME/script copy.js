/* Speed gets faster
After missed three highlighted button game ends
After clicking wrong circle game ends
Add sounds to start game and end game
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

button1.addEventListener("click", function(){ console.log("Button 1 pressed.");});
button2.addEventListener("click", function(){ console.log("Button 2 pressed.");});
button3.addEventListener("click", function(){ console.log("Button 3 pressed.");});
button4.addEventListener("click", function(){ console.log("Button 4 pressed.");});

function addScore() {
    gameScore++;
    score.textContent = gameScore;
}

let currentTarget = 0;
let missCounter = 0;

function gameEngine() {
    let buttonInterval = setInterval(nextTarget, 1000);

    function nextTarget() {
        if (currentTarget > 0) {
            button1.classList.remove("active");
            button2.classList.remove("active");
            button3.classList.remove("active");
            button4.classList.remove("active");
        }
        let nextTarget = Math.floor(Math.random()*4);
        if (currentTarget = nextTarget) {
            currentTarget = 1;
        } else {
            currentTarget = nextTarget;
            missCounter++;
            if (currentTarget = 1) {
                button1.classList.add("active");
            } else if (currentTarget = 2) {
                button2.classList.add("active");
            } else if (currentTarget = 3) {
                button3.classList.add("active");
            } else {
                button4.classList.add("active");
            }
        }
    }
}

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
    clearInterval(buttonInterval);
    button1.classList.add("noclick");
    button2.classList.add("noclick");
    button3.classList.add("noclick");
    button4.classList.add("noclick");
    document.querySelector("#gameover").classList.remove("invis");
    finalscore.textContent = gameScore;
    document.querySelector("#stop").classList.add("invis");
    document.querySelector("#start").classList.remove("invis");
}