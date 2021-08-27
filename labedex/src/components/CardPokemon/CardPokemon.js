import { CardsPokemon } from "./styled";
import React, { useContext } from "react";
import PokeImagem from "./PokeImagem";
import GlobalContext from "../../global/GlobalContext.js";


function CardPokemon(props) {
  const { setters } = useContext(GlobalContext)

  const handleButton = () => {
    if(props.buttonAction === 'Adicionar')
      setters.addPokemonToPokedex(props.pokename)
    else
      setters.removePokemonFromPokedex(props.pokename)
  }
  
  return (
    <CardsPokemon>
      <PokeImagem name={props.pokename} />
      <h2>{props.pokename}</h2>
      <div>
        <button onClick={handleButton}>{props.buttonAction}</button>
        <button onClick={props.onclickDetails}>Detalhes</button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;
