import { useHistory, useParams } from "react-router-dom";
import BattleField from "../../components/Battle/BattleField.js/BattleField";
import { useCreatePokemon } from "../../hooks/useCreatePokemonToBattle";
import { defineLevel } from "../../tools/battle/defineLevel";

import Header from "../../components/Header/Header";
import { ContainerBattle } from "./styled";

import NaveBar from "../../components/NavBar/NaveBar";
import { goToPokedexPage } from "../../routes/Coordinator";
import Loading from "../../components/Loading";

function Battle() {
  const { namePokemon1, namePokemon2 } = useParams();
  const history = useHistory();
  const myPokemon = useCreatePokemon(namePokemon1);
  const hisPokemon = useCreatePokemon(namePokemon2);

  const avarage = Math.floor(100 * Math.random());

  myPokemon["level"] = defineLevel(avarage);
  hisPokemon["level"] = defineLevel(avarage);
  myPokemon["isMyPokemon"] = true;
  hisPokemon["isMyPokemon"] = false;

  return (
    <ContainerBattle>
      <Header title="PokeBattle" />
      <NaveBar button1="Voltar" onclick1={() => goToPokedexPage(history)} />
      {namePokemon1 ? (
        <BattleField myPokemon={myPokemon} hisPokemon={hisPokemon} />
      ) : (
        <Loading />
      )}
    </ContainerBattle>
  );
}

export default Battle;
