import CardPokemon from "../../components/CardPokemon/CardPokemon.js";
import Header from "../../components/Header/Header.js";
import NaveBar from "../../components/Header/NaveBar.js";
import ScreenDetails from "../../components/Screen/ScreenDetails.js";

function Details() {
  return (
    <div>
      <Header title="Quem é esse Pokemon?" />
      <NaveBar button1="Voltar" />
      <ScreenDetails />
    </div>
  );
}

export default Details;
