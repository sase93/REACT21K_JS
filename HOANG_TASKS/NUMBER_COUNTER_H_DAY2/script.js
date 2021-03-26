// Has some bugs and/or unfinished parts.

console.log('Welcome to the Number Counter. A random number between 0-100 will be chosen and displayed, and beneath that the name of that number in Finnish.');

let randomNum = Math.round(Math.random() * 1000);
console.log('The random number is:', randomNum);

let numberArray = ["yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän", "kahdeksan", "yhdeksän", "kymmenen"];

function toSuomi() {
    return numberArray[(randomNum-1)];
}
function toSuomiToista() {
    return numberArray[(randomNum-11)];
}
function toSuomiTens() {
    return numberArray[((randomNum/10)-1)];
}
function toSuomiOtherTens() {
    return (numberArray[((Math.trunc(randomNum/10))-1)]) + "kymmentä" + (numberArray[((randomNum % 10)-1)]);
}

function toSuomiHundreds() {
    return (numberArray[((randomNum/100)-1)]);
}
function toSuomiOtherHundreds() {
    return (numberArray[((Math.trunc(randomNum/100))-1)]) + "sataa" + (numberArray[((Math.trunc(((randomNum-(Math.trunc(randomNum/100))*100)/10))-11))])  + "kymmentä" + (numberArray[((randomNum % 10)-1)]);
} // undefined tens + last digit zero//

if (randomNum === 100) {
    console.log("sata");

} else if (randomNum === 1000) {
    console.log("tuhat");

} else if (randomNum === 0) {
    console.log("nolla");

} else if (randomNum >= 1 && randomNum <= 10) {
    console.log(toSuomi(randomNum));

} else if (randomNum >= 11 && randomNum <= 19) {
    console.log(toSuomiToista(randomNum) + "toista");

} else if (randomNum >= 20 && randomNum <= 90 && randomNum % 10 < 1) {
    console.log(toSuomiTens(randomNum) + "kymmentä");

} else if (randomNum >= 21 && randomNum <= 99 && randomNum % 10 != 0) {
    console.log(toSuomiOtherTens(randomNum));

} else if (randomNum >= 101 && randomNum <= 199) {
    console.log(toSuomiSata(randomNum));

} else if (randomNum >= 200 && randomNum <= 900 && randomNum % 100 < 1) {
    console.log(toSuomiHundreds(randomNum) + "sataa");

} else if (randomNum >= 201 && randomNum <= 999 && randomNum % 100 != 0) {
    console.log(toSuomiOtherHundreds(randomNum));

}
