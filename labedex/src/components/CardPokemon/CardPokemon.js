import { CardsPokemon } from "./styled";
import React, { useContext } from "react";
import PokeImagem from "./PokeImagem";
import GlobalContext from "../../global/GlobalContext.js";
import Button from '@material-ui/core/Button';


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
        <Button variant="contained" color="primary" onClick={handleButton}>{props.buttonAction}</Button>
        <Button variant="contained" color="primary" onClick={props.onclickDetails}>Detalhes</Button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;
