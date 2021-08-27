import { useContext } from "react";
import { ContainerGeral, NavBar } from "./styled";
import GlobalContext from '../../global/GlobalContext'

function NaveBar(props) {
  const { setters, states } = useContext(GlobalContext)
  const alreadyAdd = states.pokemons.includes(props.namePokemon)

  const handleButton2 = () => {
    if(!alreadyAdd)
      setters.addPokemonToPokedex(props.namePokemon)
    else
      setters.removePokemonFromPokedex(props.namePokemon)
  }

  return (
    <ContainerGeral>
      <NavBar>
        <h3 onClick={props.onclick1}> {props.button1}</h3>
        {props.showButton && 
        <button
          onClick={handleButton2}
        >{`${alreadyAdd? "Remove":"Adicionar"} na Pokedex`}</button>}
      </NavBar>
    </ContainerGeral>
  );
}

export default NaveBar;
