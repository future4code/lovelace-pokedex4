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
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../global/GlobalContext.js";


function Pokedex() {
  const { states } = useContext(GlobalContext)
  const [selectedPokemons, setSelectedPokemons] = useState([])
  
  const history = useHistory();

  const pushThisPokemon = pokemonName => {
    if(selectedPokemons.length>=2) return
    setSelectedPokemons([...selectedPokemons, pokemonName])
  }

  useEffect(() => {
    // Esse useEffect é para testar
    if(selectedPokemons.length<2) return

    history.push(goToBattle(history, selectedPokemons[0], selectedPokemons[1]))
    // eslint-disable-next-line
  }, [selectedPokemons])


  const pokedexCards = states.pokemons.map((pokemon) => {
    return <CardPokemon
      key={pokemon}
      pokename={pokemon}
      onclickDetails={() => goToDetailsPage(history, pokemon)}
      pushThisPokemon={() => pushThisPokemon(pokemon)}
      />
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
            <FundoMiniEsquerda />

            <p>VS</p>

            <FundoMiniDireita />
          </DuasFotosEVersus>
          <button onClick={() => goToBattle(history, "name1", "name2")}>
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
