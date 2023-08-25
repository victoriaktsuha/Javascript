const pokemonList = document.getElementById("pokemonList");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const limit = 10;
const maxRecords = 151;
let offset = 0;

function loadPokemonItems(offset, limit) {
  // // função que recebe o response de pokemnons e os encaixa em lista HTML
  // function convertPokemonToLi(pokemon) {
  //   return `
  // <li class="pokemon ${pokemon.type}" >
  //   <span class="number">#${pokemon.order}</span>
  //   <span class="name">${pokemon.name}</span>

  //   <div class="detail">
  //     <ol class="types">
  //     <!-- chama a função que mapeia os types, passa a ela todos os types do pokemon (pokemon.types) e os junta com join(") sem virgulas; Eles iram se adequar a class atribuida a <li> na função anteriormente -->
  //       ${pokemon.types
  //         .map((type) => `<li class="type ${type}">${type}</li>`)
  //         .join("")}
  //     </ol>
  //     <img src="${pokemon.photo}" alt="${pokemon.name}"/>
  //   </div>

  // </li>
  // `;
  // }
  // utilizando o metodo criado no poke-api.js que receber o response (lista de objetos) e transforma esse response em array
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    // concatenando o novo HTML composto pelo array de pokemons 'mapeados' um a um (ao invés de utilizar for loop) e unificados sem virgula (``) com o HTML da lista já existente
    const newHtml = pokemons
      .map(
        (pokemon) => `
    <li class="pokemon ${pokemon.type}" >
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
  
      <div class="detail">
        <ol class="types">
        <!-- chama a função que mapeia os types, passa a ela todos os types do pokemon (pokemon.types) e os junta com join(") sem virgulas; Eles iram se adequar a class atribuida a <li> na função anteriormente -->
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}"/>
      </div>
  
    </li>`
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}
loadPokemonItems(offset, limit);

loadMoreBtn.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);
    loadMoreBtn.parentElement.removeChild(loadMoreBtn);
  } else {
    loadPokemonItems(offset, limit);
  }
});
