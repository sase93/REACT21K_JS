let winStatus = false;
let roundsPlayed = 1;
const ROUND_COST = 0.5;

while (true) {

    let numberArray = [];
    while (numberArray.length < 5) {
        numberArray.push(Math.floor(Math.random() * 6));
    }

    let counter = 0;
    let oneCounter = 0;
    let zeroCounter = 0;

    while (true) {
        if (numberArray[counter] === 1) {
            oneCounter++;
        } else if (numberArray[counter] === 0) {
            zeroCounter++;
        }

        counter++;
        if (counter > 4) {
            break;
        }
    };

    if (oneCounter === 5) {
        console.log('JACKPOT! You got 5 ones!');
        console.log(`You had to play ${roundsPlayed} rounds to win the jackpot.`);
        console.log(`It cost you ${roundsPlayed * ROUND_COST} euros in total to win the jackpot.`);
        winStatus = true;
        break;
    };
    
    roundsPlayed++;
};