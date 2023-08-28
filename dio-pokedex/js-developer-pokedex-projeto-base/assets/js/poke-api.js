const pokeApi = {};

function fetchPokemonDetail(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.order = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.type = type;
  pokemon.types = types;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  pokemon.height = pokeDetail.height;
  pokemon.weight = pokeDetail.weight;

  pokemon.species = pokeDetail.species.name;

  const abilities = pokeDetail.abilities.map(
    (abilSlot) => abilSlot.ability.name
  );
  const [ability] = abilities;

  pokemon.ability = ability;
  pokemon.abilities = abilities;

  return pokemon;
}

pokeApi.getPokemonsDetail = async (pokemon) => {
  const response = await fetch(pokemon.url);
  const pokeDetail = await response.json();
  return fetchPokemonDetail(pokeDetail);
};

// pokeApi.getPokemonsDetail2 = async (pokemon) => {
//   const response = await fetch(pokemon.url);
//   const pokeDetail = await response.json();
//   return fetchPokemonDetail1(pokeDetail);
// };

pokeApi.getPokemons = (offset = 0, limit = 1, url) => {
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
