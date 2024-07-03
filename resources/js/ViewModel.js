document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();
    const resetTime = 1500;

    function resetGame() {
        view.clearInput();
        model.getNewPokemon(pokemon => view.updatePokemonImage(pokemon.img));
    }

    function revealPokemon() {
        const guess = view.getInput();
        if(guess == model.getCurrentPokemonName().toLowerCase()) {
            view.revealPokemonImage();
            setTimeout(resetGame, resetTime);
        } else {
            // view.showError("Try again!");
        }
    }

    view.bindGuessEvent(revealPokemon);
    view.bindSkipEvent(resetGame);

    resetGame();
})