import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  margin-left: 5vw;
`;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 10px;
  }
`;

const ContainerStats = styled.div`
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  border-radius: 10px;
  box-shadow: #f13c20b5 0px 5px 15px;
  background-color: #d8d8d8;
`;

const BarraStats = styled.div`
  border: 1px solid black;

  background-color: #1d507c;
  width: 80%;
  height: 15px;
  border-radius: 10px;
`;

const ValorStat = styled.div`
  width: 80%;
  height: 100%;
  background-color: black;
  border-radius: 10px;
`;

const ContainerTypes = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: #d8d8d8;
  border-radius: 10px;
  box-shadow: #f13c20b5 0px 5px 15px;
`;

const ContainerMoves = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 50vh;
  border-radius: 10px;
  box-shadow: #f13c20b5 0px 5px 15px;
  background-color: #d8d8d8;
`;

function ScreenDetails() {
  return (
    <ContainerGeral>
      <div>
        <h1>Pokename</h1>
      </div>
      <ContainerDetails>
        <ContainerImg>
          <img src="https://picsum.photos/200/300" alt={'imagem aleatório'}/>
          <img src="https://picsum.photos/200/300" alt={'imagem aleatório'}/>
        </ContainerImg>
        <ContainerStats>
          <h3>Status</h3>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
          <p>Ataque</p>
          <BarraStats>
            <ValorStat></ValorStat>
          </BarraStats>
        </ContainerStats>
        <div>
          <ContainerTypes>
            <p>tipos</p>
          </ContainerTypes>
          <ContainerMoves>
            <p>movimentos</p>
          </ContainerMoves>
        </div>
      </ContainerDetails>
    </ContainerGeral>
  );
}

export default ScreenDetails;
