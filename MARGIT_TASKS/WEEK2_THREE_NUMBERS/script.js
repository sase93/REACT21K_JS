function calculate() {
    let firstNum = Number(document.querySelector("#first").value);
    let secondNum = Number(document.getElementById("second").value);
    let thirdNum = Number(document.querySelector("#third").value);

    if (firstNum < 0 && secondNum < 0 && thirdNum < 0) {
        negatives.textContent = "All the numbers are negative.";
        } else if (firstNum >= 0 || secondNum >= 0 || thirdNum >= 0) {
            sum.textContent = firstNum+secondNum+thirdNum;
        } if (firstNum >= 0 && secondNum >= 0 && thirdNum >= 0) {
            sum.textContent = firstNum+secondNum+thirdNum;
            product.textContent = firstNum*secondNum*thirdNum;
    }    
}