let text = document.querySelector("p");

let car = {
    type : "Audi",
    year : 2011,
    ownerName : "Samu",
    city : "Espoo",
    calcAge : function() {
        this.age = 2021 - this.year;
        return this.age;
    }
};

console.log(car);

text.textContent = `Your car is an ${car.type}. The age is ${car.calcAge()}.`;


function Jet(type, model, role) { //constructor
    this.type = type;
    this.model = model;
    this.role = role;
}

let example = new Jet("Sukhoi", "Su-27 Flanker", "Fighter");

console.log(example);