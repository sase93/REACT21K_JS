// Exercise 7. - 9.
let winStatus = false;
let roundsPlayed = 1;
const ROUND_COST = 0.5;
while (true) {

// Exercise 1.
let numberArray = [];
while (numberArray.length < 5) {
    numberArray.push(Math.floor(Math.random() * 2)); // for Exercise 10. multiply by 6 instead of 2.
}

// Exercises 2. & 3.
let counter = 0;
let oneCounter = 0;
let zeroCounter = 0;

while (true) {
    // console.log(`Index ${counter}'s number is ${numberArray[counter]}`);
    if (numberArray[counter] === 1) {
        oneCounter++;
    } else if (numberArray[counter] === 0) {
        zeroCounter++;
    }

    counter++;
    if (counter > 4) {
        break;
    }
}

// Exercises 4. - 6.
if (oneCounter === 5) {
    console.log('JACKPOT! You got 5 ones!');
    console.log(`You had to play ${roundsPlayed} rounds to win the jackpot.`);
    console.log(`It cost you ${roundsPlayed * ROUND_COST} euros in total to win the jackpot.`);
    winStatus = true;
    break;
}/*  else if (oneCounter >= 3 && oneCounter != 5) {
    console.log(`Small prize! You got ${oneCounter} ones!`);
}

if (zeroCounter === 5) {
    console.log('Anti-jackpot! You got 5 zeroes!');
} */
roundsPlayed++;

}