console.log('Welcome to the Number Counter. A random number between 0-100 will be chosen and displayed, and beneath that the name of that number in Finnish.');

let randomNum = Math.round(Math.random() * 100);
console.log('The random number is:', randomNum);

let numberArray = ["yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän", "kahdeksan", "yhdeksän"];

function toSuomi(targetNumber) {
    return numberArray[(randomNum-1)];
}
function toSuomiToista(targetNumber) {
    return numberArray[(randomNum-11)];
}
function toSuomiTens(targetNumber) {
    return numberArray[((randomNum/10)-1)];
}
function toSuomiOthers(targetNumber) {
    return (numberArray[((Math.trunc(randomNum/10))-1)]) + "kymmentä" + (numberArray[((randomNum % 10)-1)]);
}

if (randomNum === 100) {
    console.log("sata");
    }

if (randomNum === 0) {
    console.log("nolla");
    }

if (randomNum >= 1 && randomNum <= 9) {
    console.log(toSuomi(randomNum));
    }

if (randomNum === 10) {
    console.log("kymmenen");
    }

if (randomNum >= 11 && randomNum <= 19) {
    console.log(toSuomiToista(randomNum) + "toista");
    }
        
if (randomNum >= 20 && randomNum <= 90 && randomNum % 10 < 1) {
    console.log(toSuomiTens(randomNum) + "kymmentä");
    }

if (randomNum >= 21 && randomNum <= 99 && randomNum % 10 != 0) {
    console.log(toSuomiOthers(randomNum));
    }