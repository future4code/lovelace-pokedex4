export default function PokemonImage({ pokemon }) {
    const url = pokemon.isMyPokemon ? pokemon.imgBack : pokemon.imgFront;
  
    return <img alt="pokemon" src={url} />;
  }
  