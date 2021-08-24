const BASE_API_POKEMON = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

const GET_FIST_20_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

const GET_POKEMON_BY_ID = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const GET_FLAVOR_BY_ID = id => `https://pokeapi.co/api/v2/pokemon-species/${id}`
const GET_MOVE_BY_MOVEID = id => `https://pokeapi.co/api/v2/move/${id}`
const GET_MOVES_BY_DAMAGETYPE = type => ` https://pokeapi.co/api/v2/move-damage-class/${type}`