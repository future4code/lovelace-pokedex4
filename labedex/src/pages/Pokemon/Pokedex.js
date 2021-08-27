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
  ContainerNoPokemon,
} from "./styled.js";
import {
  goToHomePage,
  goToDetailsPage,
  goToBattle,
} from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalContext from "../../global/GlobalContext.js";
import PokeImagem from "../../components/CardPokemon/PokeImagem.js";
import Loading from "../../components/Loading.js";
import Button from '@material-ui/core/Button';


function Pokedex() {
  const { states } = useContext(GlobalContext);
  const [cursorOnSlot1, setCursorOnSlot1] = useState(true);

  const [selectedPokemon1, setSelectedPokemon1] = useState("");
  const [selectedPokemon2, setSelectedPokemon2] = useState("");

  const history = useHistory();

  const pushThisPokemon = (namePokemon) => {
    if (cursorOnSlot1 || !selectedPokemon1) {
      setSelectedPokemon1(namePokemon);
      setCursorOnSlot1(false);
    } else {
      setSelectedPokemon2(namePokemon);
    }
  };

  const pokedexCards = states.pokemons.map((pokemon) => {
    let styleSelectedCard = {};

    if (pokemon === selectedPokemon1 || pokemon === selectedPokemon2) {
      styleSelectedCard = { boxShadow: "rgb(51, 51, 255) 0px 3px 8px" };
    }

    return (
      <div
        key={pokemon}
        onClick={() => pushThisPokemon(pokemon)}
        style={styleSelectedCard}
      >
        <CardPokemon
          pokename={pokemon}
          buttonAction={"Remover"}
          onclickDetails={() => goToDetailsPage(history, pokemon)}
        />
      </div>
    );
  });

  /*   const pokePikachu = () => {
    if (!pokedexCards) {
      <ContainerNoPokemon>
        <h1> Adicione mais Pokemons em sua Pokedex </h1>
        <img
          class="emojidex-emoji"
          src="https://cdn.emojidex.com/emoji/seal/pikachu.png"
          emoji-code="pikachu"
          alt="pikachu"
        />
      </ContainerNoPokemon>;
    }
  }; */

  return (
    <div>
      <Header title="Pokedex" />
      <NaveBar button1="Voltar" onclick1={() => goToHomePage(history)} />
      <ContainerMainPokedex>
        <ContainerCardBatalha>
          <h2>Batalhar</h2>
          <p>Selecione dois pokemons da lista clicando na imagem</p>
          <DuasFotosEVersus>
            <div
              style={{ border: cursorOnSlot1 && "1px solid gray" }}
              onClick={() => setCursorOnSlot1(true)}
            >
              {selectedPokemon1 === "" ? (
                <FundoMiniEsquerda />
              ) : (
                <PokeImagem name={selectedPokemon1} />
              )}
            </div>
            <p>VS</p>
            <div
              style={{ border: !cursorOnSlot1 && "1px solid gray" }}
              onClick={() => setCursorOnSlot1(false)}
            >
              {selectedPokemon2 === "" ? (
                <FundoMiniDireita />
              ) : (
                <PokeImagem name={selectedPokemon2} />
              )}
            </div>
          </DuasFotosEVersus>
          <Button onClick={() => history.push(goToBattle(history, selectedPokemon1, selectedPokemon2))}>
            Iniciar a Batalha!
          </Button>
        </ContainerCardBatalha>
        <ContainerCardPokedex>
          {/*           {pokePikachu} */}
          {states ? pokedexCards : <Loading />}
        </ContainerCardPokedex>
      </ContainerMainPokedex>
    </div>
  );
}

export default Pokedex;
