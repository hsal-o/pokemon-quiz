class Model {
    constructor() {
        this.currentPokemon = null;
    }

    getNewPokemon(callback) {
        const randomId = Math.floor(Math.random() * 151) + 1;

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(data => {
                let name = data.name;
                let nonvalidIndex = name.indexOf('-');
                if(nonvalidIndex != -1){
                    name = name.slice(0, nonvalidIndex);
                }

                this.currentPokemon = {
                    name: name,
                    img: data.sprites.other["official-artwork"].front_default
                };

                callback(this.currentPokemon);
            })
            .catch(error => console.error("Error fetching Pokemon data:", error));
    }

    getCurrentPokemonName() {
        return this.currentPokemon.name;
    }

}