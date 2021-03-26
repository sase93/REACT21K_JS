function calculate() {
    let weight = Number(document.querySelector("#weight").value);
    let height = Number((document.querySelector("#height").value)/100);

    let bmi = weight / (height*height)
    
    if (bmi < 18.5) {
        answer.textContent = "Your BMI is: " + bmi + " - Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        answer.textContent = "Your BMI is: " + bmi + " - Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        answer.textContent = "Your BMI is: " + bmi + " - Overweight";
    } else if (bmi >= 30) {
        answer.textContent = "Your BMI is: " + bmi + " - Obese";
    }
}