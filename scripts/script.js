// JavaScript for Pokemon API to load Dynamic Content

$(document).ready(function() {
    function getPokemon(typeInput) {
        $.ajax({
            url: `https://pokeapi.co/api/v2/type/${typeInput}`,
            method: "GET",
            dataType: "json",
            success: function(data) {
                const pokemonList = data.pokemon.map(p => p.pokemon.name);
                displayResults(pokemonList);
            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }

    function displayResults(pokemonList) {
        const resultsDiv = $(".results");
        resultsDiv.empty();
        if (pokemonList.length > 0) {
            pokemonList.forEach(pokemon => {
                const pokemonCard = `
                <div>
                    ${pokemon}
                </div>
                `;
                resultsDiv.append(pokemonCard);
            })
        } else {
            resultsDiv.append("<div>No Pokemon found</div>");
        }
    }

    /* Listen for Enter */
    $(".form-control").on("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("Enter Key Pressed");
    
            const searchInput = $(this).val();
            
            console.log(`User is searching: ${searchInput}.`);

            getPokemon(searchInput.toLowerCase());
        }
    });
});
