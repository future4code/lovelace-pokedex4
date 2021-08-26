import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import Screen from "../../components/Screen/ScreenHome.js";
import { goToPokedexPage, goToDetailsPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../global/GlobalContext.js";


import axios from "axios";
import { GET_FIST_20_POKEMONS } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { useEffect } from "react";

function Home() {
  const [data] = useRequestData({}, GET_FIST_20_POKEMONS);
  const { setters } = useContext(GlobalContext)

  const history = useHistory();

  const pokelist =
    data.results &&
    data.results.map((pokemon) => {
      return (
        <CardPokemon
          key={pokemon.name}
          onclickDetails={() => goToDetailsPage(history, pokemon.name)}
          pokename={pokemon.name}
        />
      );
    });

  return (
    <div>
      <Header title="Pokelist" />
      <NaveBar
        button1="Ir para Pokedex"
        onclick1={() => goToPokedexPage(history)}
      />
      <Screen listaPokemon={pokelist} />
    </div>
  );
}

export default Home;
