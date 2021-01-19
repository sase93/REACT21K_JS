/* CALCULATOR EXAMPLE

let a = prompt("First number");
let b = prompt("Second number");

alert("Sum is " + (Number(a)+Number(b)))
**************************************** */


/* AGE CHECK TASK 

let age = prompt("What is your age?", 0);
if(Number(age)>=18) {
    alert("Welcome");
} else {
    alert("You are too young");
}
***************************************** */

let x = prompt("Choose your first number.", 0)
let y = prompt("Choose your second number.", 0)

let z = confirm("Do you want to add the numbers together?")
if(z=true) {
    alert("The result is " + (Number(x)+Number(y)))
} else if(z=false) {
    let zSubtract = confirm("Do you want to subtract the second number from the first?")
}
if(zSubtract=true) {
    alert("The result is " + (Number(x)-Number(y)))
} else if(zSubtract=false) {
    let zMultiply = confirm("Do you want to multiply the numbers together?")
}
if(zMultiply=true) {
    alert("The result is " + (Number(x)*Number(y)))
} else if(zMultiply=false) {
    let zDivide = confirm("Do you want to divide the first number by the second?")
}
if(zDivide=true) {
    alert("The result is " + (Number(x)/Number(y)))
}

//The above works except that it goes through all the confirm() popups//