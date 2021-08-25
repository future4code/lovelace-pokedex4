import { ContainerGeral, NavBar } from "./styled";

function NaveBar(props) {
  return (
    <ContainerGeral>
      <NavBar>
        
          <h3 onClick={props.onclick1}> {props.button1}</h3>
       

        {props.showButton && <button>Adicionar na Pokedex</button>}
      </NavBar>
    </ContainerGeral>
  );
}

export default NaveBar;
