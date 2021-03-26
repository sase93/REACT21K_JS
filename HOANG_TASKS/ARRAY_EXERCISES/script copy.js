// 1. Create an array of 5 elements, random number 1 or 0.
let chosenNumbers = [];

let counter = 0;

while(true) {
    chosenNumbers[counter] = Math.floor(Math.random() * 2);
    
    counter = counter + 1;

    if (counter === 5) {
        break;
    }
}

console.log('The value of the counter after the creation loop: ', counter);

/* Could also be:
while(counter < 5) {
    chosenNumbers[counter] = Math. ....
    counter++;
} */

// 2. Create while loop that goes thru each array element and checks if they are one or zero

while(true) {
    counter = counter - 1;

    if (chosenNumbers[counter] === 1) {
        console.log('found a 1');
    } else {
        console.log('found a 0');
    }

    if (counter === 0) {
        break;
    }
}

/* Could also be:
while(counter <--- 0 = FALSE) {
    counter = counter - 1; or counter-- ?
    console.log('Found a ', chosenNumbers[counter] === 1 ? 1 : 0)
} */

// 3. Also create variable counter to keep track of the number of 1 and 0 values in the array

let oneCounter = 0;
let zeroCounter = 0;

while(counter) {
    counter = counter - 1;

    if (chosenNumbers[counter] === 1) {
        console.log('it is 1');
        oneCounter++;
    } else if (chosenNumbers[counter] === 0) {
        console.log('it is 1');
        zeroCounter++;
    }
}

// console.log('Found ' + oneCounter + ' ones and ' + zeroCounter + ' zeroes'); OLD WAY
console.log(`Found ${oneCounter} ones and ${zeroCounter} zeroes`);

// 4. 5. 6. Prizes

if (oneCounter === 5) {
    console.log('Jackpot!');
} else if (zeroCounter === 5) {
    console.log('No win but lucky still!');
} else if (oneCounter > 3 && oneCounter < 5) {
    console.log('Small prize!');
} else {
    console.log('No win!')
}

// 7. while loop that will run until break when jackpot is won
//at beginning vv
let winningStatus = false;
let roundsPlayed = 0; // 8.
const costOneRound = 0.5; // 9.

while (true) {
    roundsPlayed++;

// all game code here + at Jackpot add winningStatus = true

    if (winningStatus) {
        break;
    }
}
console.log(`${roundsPlayed} rounds were played to get a jackpot!`)

// 9. 50 cents per round,
console.log(`${roundsPlayed*costOneRound} € was played to get a jackpot!`)

// 10. any number between 0-5
// e.g. const RANDOMIZE_RANGE = 6;
// --> ...chosenNumbers[counter] = Math.floor(Math.random() * randomizeRange);