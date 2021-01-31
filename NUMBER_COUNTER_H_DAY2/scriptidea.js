console.log('Welcome to the Number Counter. A random number between 0-100 will be chosen and displayed, and beneath that the name of that number in Finnish.');

let randomNum = 22;
let stringNum = randomNum.toString();
let digits = stringNum.length;
console.log('The random number is:', randomNum);

let numberArray = ["yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän", "kahdeksan", "yhdeksän", "kymmenen"];

function toSuomi() {
    if (digits=1) {
        return numberArray[(randomNum-1)];
    } else if (digits=2) {
        return numberArray[Math.trunc(randomNum/10)] + "kymmentä";
    }
}

if (randomNum==0) {
    console.log("nolla");
} else if (randomNum==10) {
    console.log("kymmenen");
} else if (digits=1 && randomNum<=9 && randomNum!=0) {
    console.log(toSuomi());
} else if (digits=2 && randomNum>=20 && (randomNum%10)!=0) {
    console.log(toSuomi())
}

/* function toSuomi() {
    if ((digits = 3) && (stringNum.charAt(0)!=1) && (stringNum.charAt(1)!=1)) {
        return numberArray[Number(stringNum.charAt(0)-1)] + "sataa" + numberArray[Number(stringNum.charAt(1)-1)] + "kymmentä";
    }
}
console.log(toSuomi()); */