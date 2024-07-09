class Model {
    constructor() {
        this.currentPokemon = null;
        
        // List of generations for generation selection handling
        this.generationList = [
            this.populateNumberList(1, 151),    // Gen 1
            this.populateNumberList(152, 251),  // Gen 2
            this.populateNumberList(252, 386),  // Gen 3
            this.populateNumberList(387, 493),  // Gen 4
            this.populateNumberList(494, 649),  // Gen 5
            this.populateNumberList(650, 721),  // Gen 6
            this.populateNumberList(722, 809),  // Gen 7
            this.populateNumberList(810, 905),  // Gen 8
            this.populateNumberList(906, 1025)  // Gen 9
        ]

        // List of available generations to pull from
        this.availablePokemonGen = [];
    }

    // Function that returns a list of numbers in inclusive range (start, end)
    populateNumberList(start, end) {
        var list = [];
        for(let i = start; i <= end; i++) {
            list.push(i);
        }
        return list;
    }

    // Method adds generation to pool of available generations to pull pokemon from
    toggleGeneration(generationNum, isChecked) {
        if(isChecked){
            this.availablePokemonGen.push(this.generationList[generationNum]);
        } else {
            this.availablePokemonGen = this.availablePokemonGen.filter(gen => gen != this.generationList[generationNum]);
        }
    }

    // Method that chooses a random pokemon from the available pool of pokemon
    getNewPokemon(callback) {
        // Check if there are any generations selected before continuing
        if(this.availablePokemonGen.length == 0) {
            console.error("No generations selected");
            return;
        }

        const randomGen = this.availablePokemonGen[Math.floor(Math.random() * this.availablePokemonGen.length)];
        const randomPokemonId = randomGen[Math.floor(Math.random() * randomGen.length)] - 1;

        // Fetch API
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
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

    // Method to return current pokemon's name
    getCurrentPokemonName() {
        return this.currentPokemon.name;
    }

}