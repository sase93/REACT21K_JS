/*  let chosenNumber = Math.floor(Math.random() * 10);
 switch (chosenNumber){
     case 1:
         console.log('One')
         break;
    case 2:
        console.log('Two')
        break;
    case 3:
        console.log('Three')
        break;
    case 4:
        console.log('Four')
        break;
    case 5:
        console.log('Five')
        break;
    default:
        console.log("I don't know")
 } */

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

/* Rajeev array push with 'while':
let arr = [];
while (arr.length < 5){
    let r = Math.floor(Math.random()*10) ;
    arr push(r);
} */

/**Hoang number after Math.floor(Math.random()*10)
 * 
 * number1 = number1 % 2 === 0 ? 0 : 1;
 * number2 = number2 % 2 === 0 ? 0 : 1;
 * number3 = number3 % 2 === 0 ? 0 : 1;
 * number4 = number4 % 2 === 0 ? 0 : 1;
 * number5 = number5 % 2 === 0 ? 0 : 1;
 */

 /** xxx && xxx && ... can't be scaled or smaller wins, unlike e.g.
  * if (sum === 5)
  * consolelog win
  * else if sum === 0
  * all zeros
  * else if sum >= 3
  * smaller ...
  * 
  * but this has drawback if you want more than 0 and 1, can't sum up 1-7 for example
  */