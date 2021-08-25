import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/NavBar/NaveBar.js";
import Screen from "../../components/Screen/ScreenHome.js";

function Home() {
  return (
    <div>
      <Header title="Pokelist" />
      <NaveBar button1="Ir para Pokedex" />
      <Screen cardPokemon={<CardPokemon />} />
    </div>
  );
}

export default Home;
