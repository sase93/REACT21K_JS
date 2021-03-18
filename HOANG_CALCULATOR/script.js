// ************* Declaring variables for use *************

let firstNum = '';
let secondNum = '';
let operation = '';
let input = '';
let operatorSet = false; // used to check if operation has been chosen.
let decimalUsed = false; // used to check if decimal point has been set.

// ************* Adding listeners to buttons *************

document.getElementById('result').addEventListener('click', calculate);

document.getElementById('clear').addEventListener('click', clear);

document.querySelectorAll('#num').forEach(button => {
    button.addEventListener('click', updateInput);
})

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', updateOperation);
})

// ************* Input numbers function *************

function updateInput(){
    if (input === '+' || input === "-" || input === '×' || input === '÷'){
        input = '';
    }
    switch(this.innerText){
        case '0':
            input = input + "0";
            break;
        case '.':
            if (decimalUsed == false){
                input = input + ".";
                decimalUsed = true;
                break;
            } else {
                return;
            }
        case '1':
            input = input + "1";
            break;
        case '2':
            input = input + "2";
            break;
        case '3':
            input = input + "3";
            break;
        case '4':
            input = input + "4";
            break;
        case '5':
            input = input + "5";
            break;
        case '6':
            input = input + "6";
            break;
        case '7':
            input = input + "7";
            break;
        case '8':
            input = input + "8";
            break;
        case '9':
            input = input + "9";
            break;
        default:
            console.log('Uh oh - number issue!');
            break;
    }
    document.querySelector('#input').innerHTML = input;
}

// ************* Operation function *************

function updateOperation(){
    if (input === '' || operatorSet === true){
        return;
    } else {
        operatorSet = true;
        decimalUsed = false;
        firstNum = Number(input);
        console.log(`First number set to: ${firstNum}`);
        switch(this.innerText){
            case '+':
                operation = 'plus';
                input = '+';
                document.querySelector('#input').innerHTML = input;
                break;
            case '-':
                operation = 'minus';
                input = '-';
                document.querySelector('#input').innerHTML = input;
                break;
            case '×':
                operation = 'multiply';
                input = '×';
                document.querySelector('#input').innerHTML = input;
                break;
            case '÷':
                operation = 'divide';
                input = '÷';
                document.querySelector('#input').innerHTML = input;
                break;
            default:
                console.log('Uh oh - operator issue!');
                break;
        }
    }
}

// ************* Calculation function *************

function calculate(){
    operatorSet = false;
    secondNum = Number(input);
    console.log(`Second number set to: ${secondNum}`);
    switch(operation){
        case 'plus':
            input = firstNum + secondNum;
            break;
        case 'minus':
            input = firstNum - secondNum;
            break;
        case 'multiply':
            input = firstNum * secondNum;
            break;
        case 'divide':
            input = firstNum / secondNum;
            break;
        default:
            console.log('Uh oh - calculation issue!');
            break;
    }
    document.querySelector('#input').innerHTML = input;
}

// ************* Clear inputs function *************

function clear(){
    firstNum = 0;
    secondNum = 0;
    operation = '';
    input = '';
    decimalUsed = false;
    operatorSet = false;
    document.querySelector('#input').innerHTML = input;
}