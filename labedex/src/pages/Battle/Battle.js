import { useHistory, useParams } from "react-router-dom";
import BattleField from "../../components/Battle/BattleField.js/BattleField";
import { useCreatePokemon } from "../../hooks/useCreatePokemonToBattle";
import { defineLevel } from "../../tools/battle/defineLevel";

import Header from "../../components/Header/Header";
import { ContainerBattle } from "./styled";

import { goBack } from "../../routes/Coordinator.js";
import NaveBar from "../../components/NavBar/NaveBar";

function Battle() {
  const { idPokemon1, idPokemon2 } = useParams();
  const history = useHistory();
  const myPokemon = useCreatePokemon(idPokemon1);
  const hisPokemon = useCreatePokemon(idPokemon2);

  const avarage = Math.floor(100 * Math.random());

  myPokemon["level"] = defineLevel(avarage);
  hisPokemon["level"] = defineLevel(avarage);
  myPokemon["isMyPokemon"] = true;
  hisPokemon["isMyPokemon"] = false;

  return (
    <ContainerBattle>
      <Header title="PokeBattle" />
      <NaveBar button1="Voltar" onclick1={() => goBack(history)} />
      <BattleField myPokemon={myPokemon} hisPokemon={hisPokemon} />
    </ContainerBattle>
  );
}

export default Battle;
