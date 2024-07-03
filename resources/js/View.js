class View {
    constructor() {
        this.pokemonImage = document.getElementById("pokemon-image");
        this.guessInput = document.getElementById("guess-input");
        this.guessButton = document.getElementById("guess-button");
        this.skipButton = document.getElementById("skip-button");
    }

    bindGuessEvent(handler) {
        // this.guessButton.addEventListener("click", handler);
        // this.guessInput.addEventListener("keydown", function(event) {
        //     if(event.key == "Enter"){
        //         handler();
        //     }
        // });
        this.guessInput.addEventListener("input", handler);
    }

    bindSkipEvent(handler) {
        this.skipButton.addEventListener("click", handler);
    }

    updatePokemonImage(src) {
        this.pokemonImage.src = src;
        this.pokemonImage.classList.add("silhouette");
    }

    revealPokemonImage() {
        this.pokemonImage.classList.remove("silhouette");
        this.guessInput.style.background = "#94C973";
        this.guessInput.style.color = "#fff";
        this.guessInput.readOnly  = true;

        confetti({
            particleCount: 50,
            spread: 75,
            origin: { y: 0.6 }
        });
    }

    clearInput() {
        this.guessInput.value = "";
        this.guessInput.style.background = "#fff";
        this.guessInput.style.color = "#000";
        this.guessInput.readOnly  = false;
    }

    getInput() {
        return this.guessInput.value.trim().toLowerCase();
    }

    showError(message) {
        alert(message);
    }

}