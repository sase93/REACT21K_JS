// Object Test v1.0
// The initial console.log messages are after the Objects are defined because otherwise it will give an error 'Can not access [X] before intialization. Maybe there is some work-around; maybe it doesn't really matter.

let player = {
    id: 'Hero',
    health: 10,
    damage: 5,
    defense: 1,
    attack: function () {
        enemy.health = enemy.health - (this.damage - enemy.defense);
        if (enemy.health >= 1) {
            console.log(`${enemy.id} took damage! ${enemy.id} HP: ${enemy.health}`);
        } else {
            console.log(`${enemy.id} was defeated!`);
        }
    }
}

let enemy = {
    id: 'Monster',
    health: 10,
    damage: 3,
    defense: 0,
    attack: function () {
        player.health = player.health - (this.damage - player.defense);
        if (player.health >= 1) {
            console.log(`You took damage! Your HP: ${player.health}`);
        } else {
            console.log(`You were defeated!`);
        }
    }
}

console.log('Object Test v1.0');

console.log(`You are playing as a ${player.id}, HP: ${player.health}, DMG: ${player.damage}, DEF: ${player.defense}.`);

console.log(`Your enemy is a ${enemy.id}, HP: ${enemy.health}, DMG: ${enemy.damage}, DEF: ${enemy.defense}.`);

console.log('Press the button to take your turn.');


function takeTurn() {
    player.attack();
    enemy.attack();
}