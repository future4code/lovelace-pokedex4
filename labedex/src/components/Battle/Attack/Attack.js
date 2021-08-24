import { damage } from '../../../tools/battle/damage'

export default function Attack({ myPokemon, attack, setMessage }) {
  const ataques = myPokemon.moves;
  let pokemonName = myPokemon.name;
  pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  const handleClick = (ataque) => {
    attack(damage(ataque.power, myPokemon.attack, myPokemon.level));
    setMessage(`${pokemonName} ${ataque.name}! ` + ataque.effect);
  };

  const renderAtaques = ataques.map((ataque) => (
    <button key={ataque.name} onClick={() => handleClick(ataque)}>
      {ataque.name}
    </button>
  ));

  return <div>{renderAtaques}</div>;
}
