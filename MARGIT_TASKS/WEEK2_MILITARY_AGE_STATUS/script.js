let age = Number(prompt("What is your age?"));

if (age < 18) {
    userAge.textContent = "You are too young.";
} else if (age < 27) {
    userAge.textContent = "You are old enough.";
} else if (age < 41) {
    userAge.textContent = "You are in the reserve.";
} else if (age < 55) {
    userAge.textContent = "You are in the backup reserve.";
} else {
    userAge.textContent = "You are too old.";
}

/* let ageTwo = age;

switch (ageTwo) {
    case ageTwo < 18:
        userAge.textContent = "You are too young.";
        break;
    case ageTwo < 27:
        userAge.textContent = "You are old enough.";
        break;
    case ageTwo < 41:
        userAge.textContent = "You are in the reserve.";
        break;
    case ageTwo < 55:
        userAge.textContent = "You are in the backup reserve.";
        break;
    default:
        userAge.textContent = "You are too old."
        break;
} */