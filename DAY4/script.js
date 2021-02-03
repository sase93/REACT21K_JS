const BULBS = 10;
const BULB_LIT_TIME = 100;
let bulbArr = [];
let counter = 0;
let winnerIndex;
let bulbCounter = 1;

// creating the bulbs
while (counter < BULBS) {
    const newEl = document.createElement('div');
    newEl.className = 'bulb';
    newEl.id = `bulb${bulbCounter}`;
    document.getElementById('bulbs').appendChild(newEl);

    bulbArr[counter] = false;
    counter++;
    bulbCounter++;
};

const arrangeBulbsInACircle = nodes => {   
    const radius = '10em',
        start = -90,
        $els = [...nodes], // turn nodelist into a real array
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, index) => {
        const rotate = slice * index + start;
        const rotateReverse = rotate * (-1);

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}

// reset pointer back to the first bulb
winnerIndex = Math.floor(Math.random() * BULBS);
let winBulb = bulbArr[winnerIndex];
counter = 0;
bulbArr[counter] = true; // initial bulb
document.getElementsByClassName('bulb')[counter].classList.add('active');
document.getElementsByClassName('bulb')[winnerIndex].classList.add('winner');

arrangeBulbsInACircle(document.getElementsByClassName('bulb'));

let interval = setInterval(() => {
    // switch off the current bulb
    bulbArr[counter] = false;
    document.getElementsByClassName('bulb')[counter].classList.remove('active');

    // unless it is already the last bulb
    if (counter < BULBS - 1) {
        counter++; // get the next bulb in the array
    } else {
        counter = 0; // reset
    }

    bulbArr[counter] = true;
    document.getElementsByClassName('bulb')[counter].classList.add('active');
    console.clear();
    console.log(bulbArr);
}, BULB_LIT_TIME);

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
    if (document.getElementById(`bulb${counter + 1}`).classList.contains('winner')) {
        const winText = document.createElement('p');
        const winParagraph = document.createTextNode("You won!");
        winText.appendChild(winParagraph);
        document.body.appendChild(winText);
    } else {
        const loseText = document.createElement('p');
        const loseParagraph = document.createTextNode("You did not stop on the right bulb. Try again!");
        loseText.appendChild(loseParagraph);
        document.body.appendChild(loseText);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
});