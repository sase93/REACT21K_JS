let winningStatus = false;
let roundPlayed = 0;

const COST_OF_ONE_ROUND = 0.5;
const RANDOMIZE_RANGE = 6;

while (true) {
    roundPlayed++;

    // game logic goes here
    // 1. Create an **array of 5 elements**, each element is a random number of either 1 or 0
    // Math.floor(Math.random() * 2) -> produce a random number of either 1 or 0
    let chosenNumbers = [];

    let counter = 0;

    while (counter < 5) {
        chosenNumbers[counter] = Math.floor(Math.random() * RANDOMIZE_RANGE);
        counter++;
    }

    // console.log('The value of the counter after the creation loop: ', counter); // 5
    // 2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
    // 3. Also create a counter variable to keep track of the number of 1 and 0 values in the array

    let oneCounter = 0;
    let zeroCounter = 0;

    counter = 0;

    while (counter < 5) {
        // console.log(`Checking if element at index ${counter} is 1 or 0`)

        if (chosenNumbers[counter] === 1) {
            // console.log('it is 1')
            oneCounter++;
        } else if (chosenNumbers[counter] === 0) {
            // console.log('it is 0')
            zeroCounter++;
        }

        counter++;
    }

    // console.log(`Found ${oneCounter} ones and ${zeroCounter} zeroes`);

    if (oneCounter === 5) {
        winningStatus = true;
        console.log('Jackpot')
    } else if (zeroCounter === 5) {
        console.log('No win but very lucky');
    } else if (oneCounter > 3 && oneCounter < 5) {
        console.log('Smaller prize')
    } else {
        console.log('Not lucky, no win either');
    }


    if (winningStatus) {
        break;
    }
}

console.log(`${roundPlayed} rounds have been played until a jackpot is won`);
console.log(`${roundPlayed*COST_OF_ONE_ROUND} EUR was spent to win that jackpot`);