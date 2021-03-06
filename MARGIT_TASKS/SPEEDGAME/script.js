// *********** For game sounds ***********

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

let music;

// *********** Some initial values ***********

let gameOverStatus = false;
let missCounter = -1; // This value is increased in nextTarget().
misses.textContent = 0;
let gameSpeed = 1000;

// *********** Target buttons ***********

let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");
const BUTTONS = document.querySelectorAll(".button");
let buttonArray = [button1, button2, button3, button4];

// *********** Score tracking ***********

let gameScore = 0;
score.textContent = gameScore;

function addScore() {
    gameScore++;
    score.textContent = gameScore;
}

// *********** Checking if target button is active ***********

buttonArray.forEach(button => button.addEventListener('click', checkActive));

function checkActive(button) {
    let buttonId = button.target.id;
    if (document.querySelector(`#${buttonId}`).classList.contains('active')) {
        document.querySelector(`#${buttonId}`).classList.add("noclick"); // To limit scoring to only 1 point per target.
    } else {
        gameScore = gameScore - 1; // Clicking will still execute addScore(), so substract one point to keep the score correct.
        score.textContent = gameScore;
        stop();
    }
}

// *********** Actions after game starts ***********

function gameEngine() {
    let buttonInterval = setTimeout(nextTarget, gameSpeed);

    function nextTarget() {
        console.log("game over status:" + gameOverStatus);
        if (gameOverStatus === false) {
            missCounter++;
            misses.textContent = ((gameScore - missCounter) * -1); // Compare score and missCounter to determine the true amount of missed targets.
            if ((gameScore - missCounter) <= -3) {
                return stop(); // 'return' used to stop the rest of nextTarget() from running.
            }
            let randomNum = Math.floor(Math.random() * buttonArray.length);
            let activeIndex = buttonArray.findIndex(each => each.classList.contains('active'));
            if (activeIndex === randomNum) {
                randomNum = randomNum == 3 ? 1 : randomNum + 1; // To prevent the same target coming twice in a row.
            }
            BUTTONS.forEach(button => button.classList.remove("active"));
            BUTTONS.forEach(button => button.classList.remove("noclick")); // To remove class 'noclick' that was added to prevent double scoring in checkActive().
            buttonArray[randomNum].classList.add("active");
            gameSpeed = gameSpeed - 15;
            buttonInterval = setTimeout(nextTarget, gameSpeed);
        }
    }
}

// *********** Start button functions ***********

function start() {
    BUTTONS.forEach(button => button.classList.remove("noclick"));
    document.querySelector("#start").classList.add("invis");
    document.querySelector("#stop").classList.remove("invis");
    gameEngine();
    music = new sound("speedgame.mp3");
    music.play();
}

// *********** End of game functions ***********

function stop() {
    music.stop();
    endSound = new sound("gameover.mp3");
    endSound.play();
    gameOverStatus = true;
    console.log("game over:" + gameOverStatus);
    BUTTONS.forEach(button => button.classList.remove("active"));
    BUTTONS.forEach(button => button.classList.add("noclick"));
    document.querySelector("#gameover").classList.remove("invis");

    if (gameScore < 11) {
        endmessage.textContent = "Come on, you can do better!";
    } else if (gameScore < 20) {
        endmessage.textContent = "Not too bad, keep trying!";
    } else if (gameScore < 31) {
        endmessage.textContent = "You're pretty good!";
    } else {
        endmessage.textContent = "Wow, you're really good!";
    }

    finalscore.textContent = "Your final score was: " + gameScore;
    document.querySelector("#stop").classList.add("invis");
    document.querySelector("#reset").classList.remove("invis");
}