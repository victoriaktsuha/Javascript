const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.order = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  // mapeia todos os types do pokemon
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  // [type] refere-se a primeira posição de types
  const [type] = types;

  pokemon.type = type;
  pokemon.types = types;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonsDetail = async (pokemon) => {
  const response = await fetch(pokemon.url);
  const pokeDetail = await response.json();
  return convertPokeApiDetailToPokemon(pokeDetail);
};

pokeApi.getPokemons = (offset = 0, limit = 5, url) => {
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
// recebe um array de promisses; todas precisam terminar para que o 'then' seja executado
// Promise.all([
//   fetch("https://pokeapi.co/api/v2/pokemon/1"),
//   fetch("https://pokeapi.co/api/v2/pokemon/2"),
//   fetch("https://pokeapi.co/api/v2/pokemon/3"),
// ]).then((results) => {
//   console.log(results);
// });
