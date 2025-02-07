async function fetchData() {
    const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
    const errorMessage = document.getElementById("error-message");
    const imgElement = document.getElementById("pokemonSprite");

    // Clear previous error message
    errorMessage.style.display = "none";
    errorMessage.textContent = "";

    try {
        if (pokemonName === "") {
            throw new Error("Please enter a Pokémon name.");
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokémon not found! Please check the spelling and try again.");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
        imgElement.style.display = "none"; // Hide sprite if error occurs
    }
}
