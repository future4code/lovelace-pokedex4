import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import Screen from "../../components/Screen/Screen.js";

function Home() {
  return (
    <div>
      <Header />
      <Screen cardPokemon={<CardPokemon />} />
    </div>
  );
}

export default Home;
