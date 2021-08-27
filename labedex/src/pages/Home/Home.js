import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import Screen from "../../components/Screen/ScreenHome.js";
import { goToPokedexPage, goToDetailsPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

import { GET_FIST_20_POKEMONS } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../global/GlobalContext.js";

import axios from 'axios'

function Home() {
  const [data, setData] = useRequestData({}, GET_FIST_20_POKEMONS);
  const { states } = useContext(GlobalContext)
  const history = useHistory();

  const [pokemons20, setPokemons20] = useState()
  const [nextLink, setNextLink] = useState('')


  useEffect(() => {
    setPokemons20(data.results)
    setNextLink(data.next)

  }, [data])



  const pokelist =
    pokemons20 &&
    pokemons20
      .filter(pokemon => !states.pokemons.includes(pokemon.name))
      .map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.name}
            onclickDetails={() => goToDetailsPage(history, pokemon.name)}
            pokename={pokemon.name}
            buttonAction={'Adicionar'}
          />
        );
      });






  const handleButtonNext = () => {
    axios.get(nextLink).then(res => {

      console.log(res)
      setPokemons20(res.data.results)
      setNextLink(res.data.next)
    })
  }







  return (
    <div>
      <Header title="Pokelist" />
      <NaveBar
        button1="Ir para Pokedex"
        onclick1={() => goToPokedexPage(history)}
      />
      <Screen listaPokemon={pokelist} />
      <div>
        <button>Voltar</button>
        <button onClick={handleButtonNext}>Próximo</button>
      </div>
    </div>
  );
}

export default Home;
