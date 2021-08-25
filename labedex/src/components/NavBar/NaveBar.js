import { ContainerGeral, NavBar } from "./styled";

function NaveBar(props) {
  return (
    <ContainerGeral>
      <NavBar>
        <a href="#" class="link link--elara">
          <h3 onClick={props.onclick1}> {props.button1}</h3>
        </a>

        {props.showButton && <button>Adicionar na Pokedex</button>}
      </NavBar>
    </ContainerGeral>
  );
}

export default NaveBar;
