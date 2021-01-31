function calculate() {
    let salary = document.querySelector("#salary").value;
    let hours = document.querySelector("#hours").value;

    let noBonus = hours * salary;
    let firstBonus = (7 * salary) + ((hours-7) * (salary * 1.5));
    let secondBonus = (7 * salary) + (2 * (salary * 1.5)) + ((hours - 9) * (salary * 2));
    
    switch (true) {
        case hours <= 7:
            answer.textContent = "Your salary is: " + noBonus + "€";
            break;
        case hours > 7 && hours <= 9:
            answer.textContent = "Your salary is: " + firstBonus + "€";
            break;
        default:
            answer.textContent = "Your salary is: " + secondBonus + "€";
    }
}