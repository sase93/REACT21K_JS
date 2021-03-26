console.log('Welcome to play 5-Of-A-Kind Jackpot!')
console.log('You win the jackpot if you get the number 1 five times.')

console.log('The probability of winning the jackpot is', (0.5**5)*100, '%');

let firstNum = Math.round(Math.random());
let secondNum = Math.round(Math.random());
let thirdNum = Math.round(Math.random());
let fourthNum = Math.round(Math.random());
let fifthNum = Math.round(Math.random());

console.log('Your numbers are: ', firstNum, secondNum, thirdNum, fourthNum, fifthNum)
if((firstNum === 1) && (secondNum === 1) && (thirdNum === 1) && (fourthNum === 1) && (fifthNum === 1)) {
    console.log('JACKPOT! You got the number 1 five times! Congratulations!');
}

if((firstNum === 0) && (secondNum === 0) && (thirdNum === 0) && (fourthNum === 0) && (fifthNum === 0)) {
    console.log('ANTI-JACKPOT! You got the number 0 five times! The probability of this happening is the same as for the jackpot; congratulations, but you did not win this time.');
}