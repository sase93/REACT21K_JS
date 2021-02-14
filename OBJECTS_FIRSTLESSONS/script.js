let carList = [];

function Car(licence, maker, model, price, color, discount) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.price = price;
    this.color = color;
    this.discount() = discount;
};

document.getElementById('add').addEventListener('click', () => {
    let addedCar = {
        licence: document.querySelector('#licence').value,
        maker: document.querySelector('#maker').value,
        model: document.querySelector('#model').value,
        price: document.querySelector('#price').value,
        color: document.querySelector('#color').value,
        discount : function() {
            if (this.price > 20000) {
                console.log(`Discounted price: ${this.price - (this.price*0.25)}`);
            } else if (this.price < 5000) {
                console.log(`Discounted price: ${this.price - (this.price*0.1)}`);
            } else {
                console.log(`Discounted price: ${this.price - (this.price*0.15)}`);
            }
        }
    }
    carList.push(addedCar);

    console.table(carList);
});

document.getElementById('search').addEventListener('click', () => {
    let counter = 0;
    let check = document.querySelector('#licence').value;

    while (counter < carList.length) {
        if (carList[counter].licence === check) {
            result.textContent = `The model of the car with that plate is: ${carList[counter].maker} ${carList[counter].model} with a discounted price of ${carList[counter].discount}€`;
            break;
        } else {
            counter++;
        }
    }
});

//use submit button and:
//const addedCar = (event) => { event.preventDefault(); let .. let..
//for (let i = 0; i < carArray.length; i++)