player {
    // variables etc.
    player.defense = "Initial value";
    player.storedDef = 0;
    resetDefense();
}

function resetDefense() {
    player.defense = player.storedDef;
}

function defend() {
    player.storedDef = player.defense; // store the initial defense value.
    player.defense = player.defense + "Number here";

    // logic for attacking the enemy, with a damage penalty.

    console.log(`You raise you defenses. Your DEF: ${player.defense}`);
    // etc.
}

function takeDefensiveTurn() { // Def. button clicked.
    defend();
    
    enemy.getMethod(); // enemy takes turn attacking before ...

    resetDefense(); // ... resetting the DEF to what it was. 
}