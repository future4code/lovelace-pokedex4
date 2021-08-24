import styled from "styled-components";
import pokeball from "../../img/pokeball.png";

const ContainerTitulo = styled.div`
  height: 150px;
  width: 100vw;
  background-color: #f13c20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    position: relative;
    left: 5vw;
    font-size: 4em;
    color: white;
  }
  img {
    width: 130px;
    margin-right: 5vw;
  }
`;

const NavBar = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: start;
  align-items: center;
  h3 {
    position: relative;
    left: 5.5vw;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
  }
`;

function Header() {
  return (
    <div>
      <ContainerTitulo>
        <h1>Pokedex</h1>
        <img src={pokeball} alt="Imagem de uma Pokeball" />
      </ContainerTitulo>

      <NavBar>
        <h3>Pokedex</h3>
      </NavBar>
    </div>
  );
}

export default Header;
