let chosenNumbers = [];

let counter = 0;

while(true) {
    chosenNumbers[counter] = Math.floor(Math.random() * 2);
    
    counter = counter + 1;

    if (counter === 5) {
        break;
    }
}

let oneCounter = 0;
let zeroCounter = 0;

while(counter) {
    counter = counter - 1;

    if (chosenNumbers[counter] === 1) {
        console.log('it is 1');
        oneCounter++;
    } else if (chosenNumbers[counter] === 0) {
        console.log('it is 0');
        zeroCounter++;
    }
}

console.log(`Found ${oneCounter} ones and ${zeroCounter} zeroes`);