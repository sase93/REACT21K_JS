// Initial API call etc.
async function createPkmns() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
    let json = await response.json();
    let pokemons = json.results;

    let rowCounter = 1;
    let pkmnCounter = 0;

    function renderTable(objects) {
        objects.forEach(pkmn => addPokemon(pkmn));
    }

    function addPokemon(pkmn) {
        let table = document.getElementById("table");
        let row = table.insertRow(rowCounter);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = `<a href="#" class="pokemon" id="${pkmnCounter}">${pkmn.name}</a>`;
        rowCounter++;
        pkmnCounter++;
    }
    renderTable(pokemons);
    
    // Secondary API call etc.
    const anchors = document.querySelectorAll(".pokemon");
    anchors.forEach(pokemon => pokemon.addEventListener('click', getPokeInfo));

    async function getPokeInfo(link) {
        let pkmnId = link.target.id;
        let infoURL = pokemons[pkmnId].url;
        let response = await fetch(`${infoURL}`);
        let json = await response.json();
        let name = json.name;
        let sprite = json.sprites.front_default;
        let mainType = json.types[0].type.name;

        let pokedex = document.querySelector("#clicked-pokemon");
        pokedex.classList.remove("invisible");

        let picture = document.querySelector("#sprite");
        let text = document.querySelector("#info");

        picture.innerHTML = `<img src="${sprite}" alt="pokemon-sprite">`;
        text.innerHTML = `
        <h3>Name: </h3>
        <p>${name}</p>
        <h3>Main type: </h3>
        <p>${mainType}</p>
        `;
    }

}
createPkmns();