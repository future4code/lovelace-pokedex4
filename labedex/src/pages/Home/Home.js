import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import Screen from "../../components/Screen/ScreenHome.js";
import { goToPokedexPage, goToDetailsPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <div>
      <Header title="Pokelist" />
      <NaveBar
        button1="Ir para Pokedex"
        onclick1={() => goToPokedexPage(history)}
      />
      <Screen
        cardPokemon={
          <CardPokemon
            onclickDetails={() => goToDetailsPage(history, "grovyle")}
          />
        }
      />
    </div>
  );
}

export default Home;
