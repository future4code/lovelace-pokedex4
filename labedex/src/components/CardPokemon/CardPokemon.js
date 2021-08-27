import { CardsPokemon } from "./styled";
import React, { useContext } from "react";
import PokeImagem from "./PokeImagem";
import GlobalContext from "../../global/GlobalContext.js";


function CardPokemon(props) {
  const { setters } = useContext(GlobalContext)
  
  return (
    <CardsPokemon>
      <PokeImagem name={props.pokename} />
      <h2>{props.pokename}</h2>
      <div>
        <button onClick={() => setters.addPokemonToPokedex(props.pokename)}>Adicionar</button>
        <button onClick={props.onclickDetails}>Detalhes</button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;
