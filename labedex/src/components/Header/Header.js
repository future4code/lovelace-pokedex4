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
  position: relative;
`;

function Header(props) {
  return (
    <div>
      <ContainerTitulo>
        <h1>{props.title}</h1>
        <img src={pokeball} alt="Imagem de uma Pokeball" />
      </ContainerTitulo>
    </div>
  );
}

export default Header;
