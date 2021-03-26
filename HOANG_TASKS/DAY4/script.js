let bulbs;
let bulbOnTime;
let bulbArr = [];
let counter = 0;
let winnerIndex;
let bulbCounter = 1;

// creating the bulbs
document.getElementById('start').addEventListener('click', () => {
    bulbs = Number(document.querySelector('#bulbcount').value);
    bulbOnTime = Number(document.querySelector('#speed').value);

    while (counter < bulbs) {
        const newEl = document.createElement('div');
        newEl.className = 'bulb';
        newEl.id = `bulb${bulbCounter}`;
        document.getElementById('bulbs').appendChild(newEl);

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
    };

    // reset pointer back to the first bulb
    winnerIndex = Math.floor(Math.random() * bulbs);
    counter = 0;
    // initial bulb
    document.getElementsByClassName('bulb')[counter].classList.add('active');
    document.getElementsByClassName('bulb')[winnerIndex].classList.add('winner');

    arrangeBulbsInACircle(document.getElementsByClassName('bulb'));

    const INTERVAL = setInterval(() => {
        // switch off the current bulb
        document.getElementsByClassName('bulb')[counter].classList.remove('active');

        // unless it is already the last bulb
        if (counter < bulbs - 1) {
            counter++; // get the next bulb in the array
        } else {
            counter = 0; // reset
        };

        document.getElementsByClassName('bulb')[counter].classList.add('active');
    }, bulbOnTime);

    document.getElementById('stop').addEventListener('click', () => {
        clearInterval(INTERVAL);
        if (document.getElementById(`bulb${counter + 1}`).classList.contains('winner')) {
            result.textContent = "You won!";
        } else {
            result.textContent =  "You did not stop on the right bulb. Try again!";
        }
    });
});


document.getElementById('reset').addEventListener('click', () => {
    location.reload();
});