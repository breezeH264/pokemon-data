const BASE_URL = 'https://pokeapi.co/api/v2';

const query = {
  pokemon: 'pokemon',
};

export async function fetchPokemon(pokemon: string) {
  return fetch(`${BASE_URL}/${query.pokemon}/${pokemon.toLowerCase()}`);
}
