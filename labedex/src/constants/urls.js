export const BASE_API_POKEMON = `https://pokeapi.co/api/v2`

export const GET_FIST_20_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=24`

export const GET_POKEMON_BY_ID = id => `https://pokeapi.co/api/v2/pokemon/${id}`
export const GET_FLAVOR_BY_ID = id => `https://pokeapi.co/api/v2/pokemon-species/${id}`
export const GET_MOVE_BY_MOVEID = id => `https://pokeapi.co/api/v2/move/${id}`
export const GET_MOVES_BY_DAMAGETYPE = type => ` https://pokeapi.co/api/v2/move-damage-class/${type}`