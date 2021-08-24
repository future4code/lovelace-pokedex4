import styled from "styled-components";
import pokeball from "../../img/pokeball.png";

const NavBar = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  h3 {
    position: relative;
    left: 5.5vw;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    margin-right: 15px;
  }
  button {
    position: relative;
    margin: 35px;
  }
`;

const ContainerGeral = styled.div`
  position: sticky;
  top: 0;
`;

function NaveBar(props) {
  return (
    <ContainerGeral>
      <NavBar>
        <h3> {props.button1}</h3>
        {props.showButton && <button>Adicionar na Pokedex</button>}
      </NavBar>
    </ContainerGeral>
  );
}

export default NaveBar;
