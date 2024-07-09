class View {
    constructor() {
        this.pokemonImage = document.getElementById("pokemon-image");
        this.guessInput = document.getElementById("guess-input");
        this.guessButton = document.getElementById("guess-button");
        this.skipButton = document.getElementById("skip-button");
        this.genCheckboxes = document.querySelectorAll(".gen-checkbox");
    }

    // Binder for guess event
    bindGuessEvent(handler) {
        this.guessInput.addEventListener("input", handler);
    }

    // Binder for skip event
    bindSkipEvent(handler) {
        this.skipButton.addEventListener("click", handler);
    }

    // Binder for generation checkbox toggle
    bindGenerationToggleEvent(handler) {
        this.genCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", (event) => handler(event.target.dataset.gen, event.target.checked));
        })
    }

    // Method to update pokemon source image
    updatePokemonImage(src) {
        this.pokemonImage.src = src;
        this.pokemonImage.classList.add("silhouette");
    }

    // Method to reveal pokemon image
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

    // Method to clear guess input
    clearInput() {
        this.guessInput.value = "";
        this.guessInput.style.background = "#fff";
        this.guessInput.style.color = "#000";
        this.guessInput.readOnly  = false;
    }

    // Method to get guess input
    getInput() {
        return this.guessInput.value.trim().toLowerCase();
    }

    // Method for showing error
    showError(message) {
        alert(message);
    }

}