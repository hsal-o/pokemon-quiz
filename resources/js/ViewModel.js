document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();
    const resetTime = 1500;

    // Function to reset the game
    function resetGame() {
        view.clearInput();
        model.getNewPokemon(pokemon => view.updatePokemonImage(pokemon.img));
    }

    // Function to reveal pokemon
    function revealPokemon() {
        const guess = view.getInput();
        if(guess == model.getCurrentPokemonName().toLowerCase()) {
            view.revealPokemonImage();
            setTimeout(resetGame, resetTime);
        } else {
            // view.showError("Try again!");
        }
    }

    // Handler function for generation checkboxes
    function toggleGeneration(generationNum, isChecked) {
        model.toggleGeneration(parseInt(generationNum), isChecked);
    }

    // Function to initalize generations that have been pre-selected
    function initializeGenerations() {
        view.genCheckboxes.forEach(checkbox => {
            if(checkbox.checked){
                model.toggleGeneration(parseInt(checkbox.dataset.gen), true);
            }
        });
    }

    // View bindings
    view.bindGuessEvent(revealPokemon);
    view.bindSkipEvent(resetGame);
    view.bindGenerationToggleEvent(toggleGeneration);

    // Preloaded functions
    initializeGenerations();
    resetGame();
})