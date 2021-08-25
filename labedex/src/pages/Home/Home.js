import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import Screen from "../../components/Screen/ScreenHome.js";
import { goToPokedexPage, goToDetailsPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios"
import { GET_FIST_20_POKEMONS } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"

function Home() {
  const [data] = useRequestData({}, GET_FIST_20_POKEMONS);
  console.log(data)
  

  const history = useHistory();

  return (
    <div>
      <Header title="Pokelist" />
      <NaveBar
        button1="Ir para Pokedex"
        onclick1={() => goToPokedexPage(history)}
      />
      <Screen
        cardPokemon={data.results}
      />
    </div>
  );
}

export default Home;
