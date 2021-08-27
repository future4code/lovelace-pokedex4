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

import axios from "axios";
import Loading from "../../components/Loading.js";

function Home() {
  const [data, setData] = useRequestData({}, GET_FIST_20_POKEMONS);
  const { states } = useContext(GlobalContext);
  const history = useHistory();

  const [pokemons20, setPokemons20] = useState()
  const [nextLink, setNextLink] = useState('')
  const [backLink, setBackLink] = useState("")


  useEffect(() => { 
    console.log("nextLink",nextLink)
    console.log("backLink",backLink)   
    setPokemons20(data.results)
    setBackLink(data.previous)
    setNextLink(data.next)  
  }, [data])



  const pokelist =
    pokemons20 &&
    pokemons20
      .filter((pokemon) => !states.pokemons.includes(pokemon.name))
      .map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.name}
            onclickDetails={() => goToDetailsPage(history, pokemon.name)}
            pokename={pokemon.name}
            buttonAction={"Adicionar"}
          />
        );
      });

  const handleButtonNext = () => {
    axios.get(nextLink)
    .then(res => {
      console.log(res)
      setPokemons20(res.data.results)
      if(res.data.next)
      setNextLink(res.data.next)
      if(res.data.previous)
      setBackLink(res.data.previous)
    })
  }

  const handleButtonBack = () => {
    axios.get(backLink)
    .then(res => {      
      setPokemons20(res.data.results)
      if(res.data.previous)
      setBackLink(res.data.previous)
      if(res.data.next)
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
       <button onClick={handleButtonBack}>Voltar</button>
        <button onClick={handleButtonNext}>Próximo</button>
      <Screen listaPokemon={pokelist} />
      <div>
       
      </div>
    </div>
  );
}

export default Home;
