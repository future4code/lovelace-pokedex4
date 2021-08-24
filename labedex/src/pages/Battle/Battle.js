import { useHistory, useParams } from 'react-router-dom'
import BattleField from '../../components/Battle/BattleField.js/BattleField';
import { useCreatePokemon } from '../../hooks/useCreatePokemonToBattle'
import { defineLevel } from '../../tools/battle/defineLevel'
import { getRandomPokemonId } from '../../tools/battle/getRandomPokemonId'

function Battle() {
  const { idPokemon1, idPokemon2 } = useParams()

  const myPokemon = useCreatePokemon(idPokemon1)
  const hisPokemon = useCreatePokemon(idPokemon2)

  const avarage = Math.floor(100 * Math.random());

  myPokemon["level"] = defineLevel(avarage);
  hisPokemon["level"] = defineLevel(avarage);
  myPokemon["isMyPokemon"] = true;
  hisPokemon["isMyPokemon"] = false;


  return (
    <div className="App">
      <p> Battle</p>
      <BattleField myPokemon={myPokemon} hisPokemon={hisPokemon}/>
    </div>
  );
}

export default Battle;
