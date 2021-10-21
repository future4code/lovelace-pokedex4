import styled from "styled-components";
import pikachu from "../assets/img/pikachu.gif";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <ContainerGeral>
      <img src={pikachu} alt='loading'/>
      <h4>Carregando...</h4>
    </ContainerGeral>
  );
}

export default Loading;
