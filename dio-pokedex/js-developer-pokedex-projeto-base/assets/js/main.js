const pokeApi = {};
const limit = 1;
let offset = 0;

function fetchPokemonDetails(pokeDetail) {
  const pokemon = new PokemonDetail();
  pokemon.order = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);

  const [type] = types;

  pokemon.type = type;
  pokemon.types = types;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  //ajustar
  pokemon.weight = pokeDetail.height;
  pokemon.height = pokeDetail.height;

  const abilities = pokeDetail.abilities.map((ability) => ability.type.name);
  const [ability] = abilities;

  pokemon.ability = ability;
  pokemon.abilities = abilities;

  const genders = pokeDetail.genders.map((gender) => gender.type);
  const [gender1, gender2] = genders;

  pokemon.genders = genders;
  pokemon.gender1 = gender1;
  pokemon.gender2 = gender2;

  return pokemon;
}

pokeApi.getPokemonsDetail = async (pokemon) => {
  const res = await fetch(pokemon.url);
  const pokeDetail = await res.json();
  return fetchPokemonDetails(pokeDetail);
};

pokeApi.getPokemons = (offset, limit, url) => {
  url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return (
    fetch(url)
      .then((response) =>
        //transforma o body do response em JSON para ser lido e utilizado
        // encadear retornos através do .then() é uma boa prática, ao inves de inserir callback dentro de callback
        response.json()
      )
      // arrow function, quando tem apenas uma linha de retorno, pode ser utilzada sem chaves
      .then((jsonBody) => jsonBody.results)
      .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
      // transformar essa lista de pokemons na lista de promisses
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonDetails) => pokemonDetails)
      .catch((error) => console.error(error))
  );
};

const pokemonDetails = document.getElementById("pokemonList");

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
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}"/>
      </div>

    </li>`
    )
    .join("");
  pokemonDetails.innerHTML = newHtml;
});
