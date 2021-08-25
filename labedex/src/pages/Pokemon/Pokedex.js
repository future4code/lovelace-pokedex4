import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import {
  ContainerCardBatalha,
  ContainerCardPokedex,
  ContainerMainPokedex,
  DuasFotosEVersus,
  FundoMiniDireita,
  FundoMiniEsquerda,
} from "./styled.js";
import {
  goToHomePage,
  goToDetailsPage,
  goToBattle,
} from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

function Pokedex() {
  const history = useHistory();

  return (
    <div>
      <Header title="Pokedex" />
      <NaveBar button1="Voltar" onclick1={() => goToHomePage(history)} />
      <ContainerMainPokedex>
        <ContainerCardBatalha>
          <h2>Batalhar</h2>
          <p>Selecione dois pokemons da lista clicando na imagem</p>

          <DuasFotosEVersus>
            <FundoMiniEsquerda />

            <p>VS</p>

            <FundoMiniDireita />
          </DuasFotosEVersus>
          <button onClick={() => goToBattle(history, "name1", "name2")}>
            Iniciar a Batalha!
          </button>
        </ContainerCardBatalha>

        <ContainerCardPokedex>
          <CardPokemon
            onclickDetails={() => goToDetailsPage(history, "grovyle")}
          />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
        </ContainerCardPokedex>
      </ContainerMainPokedex>
    </div>
  );
}

export default Pokedex;
