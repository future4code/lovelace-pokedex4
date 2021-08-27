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
import { useContext, useState } from "react";
import GlobalContext from "../../global/GlobalContext.js";
import PokeImagem from "../../components/CardPokemon/PokeImagem.js";


function Pokedex() {
  const { states } = useContext(GlobalContext)
  const [selectedPokemon1, setSelectedPokemon1] = useState("")
  const [selectedPokemon2, setSelectedPokemon2] = useState("")
  
  const history = useHistory();

  const pushThisPokemon = namePokemon => {
    if(!selectedPokemon1) setSelectedPokemon1(namePokemon)
    else if(!selectedPokemon2) setSelectedPokemon2(namePokemon)
  }

  const pokedexCards = states.pokemons.map((pokemon) => {

    let styleSelectedCard = {}

    if(pokemon===selectedPokemon1 || pokemon===selectedPokemon2){
      styleSelectedCard = { boxShadow: 'rgb(51, 51, 255) 0px 3px 8px'}
    }

    return <div
      onClick={() => pushThisPokemon(pokemon)}
      style={styleSelectedCard}
    >
      <CardPokemon
        key={pokemon}
        pokename={pokemon}
        onclickDetails={() => goToDetailsPage(history, pokemon)}
        />
    </div> 
  } )

  return (
    <div>
      <Header title="Pokedex" />
      <NaveBar button1="Voltar" onclick1={() => goToHomePage(history)} />
      <ContainerMainPokedex>
        <ContainerCardBatalha>
          <h2>Batalhar</h2>
          <p>Selecione dois pokemons da lista clicando na imagem</p>
          <DuasFotosEVersus>
            {selectedPokemon1==='' ?
              <FundoMiniEsquerda />:
              <PokeImagem name={selectedPokemon1} />
            }
            <p>VS</p>
            {selectedPokemon2==='' ?
              <FundoMiniDireita />:
              <PokeImagem name={selectedPokemon2} />
            }
          </DuasFotosEVersus>
          <button onClick={() => history.push(goToBattle(history, selectedPokemon1, selectedPokemon2))}>
            Iniciar a Batalha!
          </button>
        </ContainerCardBatalha>
        <ContainerCardPokedex>
          {pokedexCards}
        </ContainerCardPokedex>
      </ContainerMainPokedex>
    </div>
  );
}

export default Pokedex;
