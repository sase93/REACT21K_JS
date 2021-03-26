function calculate() {
    let price = Number(document.querySelector("#price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");

    let liters = money / price;
    let status = document.getElementById("status");

    answer.textContent = Math.floor(liters);

    if (liters >= 10) {
        status.textContent = "Good, you can escape!";
    } else {
        status.textContent = "Oops, you're stuck here!";
    }
   
}

/* or:
let text;

liters >= 10
? (text = "Good")
: (text = "oops");

status.textContent = text; */

/* function hello() {
    alert("Hello, my name is Samu");
    whoAreYou();
}

function whoAreYou() {
    let who = prompt("What is your name?");
    greeting(who);
}

function greeting(name) {
    document.write(name);
}

hello(); */