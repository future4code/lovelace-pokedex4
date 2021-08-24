import { damage } from '../../../tools/battle/damage'
import { StyledButtons } from './styled'

export default function Attack({ myPokemon, attack, setMessage }) {
  const moves = myPokemon.moves;

  const handleClick = (move) => {
    attack(damage(move.power, myPokemon.attack, myPokemon.level));
    setMessage(`${myPokemon.name} ${move.name}! ` + move.effect);
  };

  const renderAtaques = moves.map((move) => (
    <button key={move.name} onClick={() => handleClick(move)}>
      {move.name}
    </button>
  ));

  return <StyledButtons>{renderAtaques}</StyledButtons>;
}
