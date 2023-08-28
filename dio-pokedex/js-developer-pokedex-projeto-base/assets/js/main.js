const pokemonList = document.getElementById("pokemonList");
const limit = 1;
let offset = 0;

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
    <div class="pokemon ${pokemon.type}">
        <h1 class="name">${pokemon.name}</h1>
        <h3 class="number">#${pokemon.order}</h3>
        <ol class="types">
        ${pokemon.types
          .map((type) => `<li class="type ${type}">${type}</li>`)
          .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}"/>
        <div class="details-container" >
            <h3 class="title">About</h3>
            <div class="details-content" id="pokemonDetails">
                <div class="detail-title">Species</div>
                <div class="detail-value">${pokemon.species}</div>
                <div class="detail-title">Height</div>
                <div class="detail-value">${pokemon.height}</div>
                <div class="detail-title">Weight</div>
                <div class="detail-value">${pokemon.weight}</div>
                <div class="detail-title">Abilities</div>
                ${pokemon.abilities
                  .map(
                    (ability) => `<div class="detail-value">▹ ${ability}</div>`
                  )
                  .join("&nbsp;")}
              </div>
            </div>
          </div>
      </div>`
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}
loadPokemonItems(offset, limit);
