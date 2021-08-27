import { ContainerTitulo } from "./styled";
import pokeball from "../../assets/img/pokeball.png";

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
