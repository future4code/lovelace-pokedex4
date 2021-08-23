import styled from "styled-components";

const ContainerTitulo = styled.div`
  height: 150px;
  width: 100vw;
  background-color: #f13c20;
  display: flex;
  align-items: center;
  h1 {
    position: relative;
    left: 5vw;
    font-size: 4em;
    color: white;
  }
`;

const NavBar = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: #4e4e4e;
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
    <div className="App">
      <ContainerTitulo>
        <h1>Pokelist</h1>
      </ContainerTitulo>
      <NavBar>
        <h3>Pokedex</h3>
      </NavBar>
    </div>
  );
}

export default Header;
