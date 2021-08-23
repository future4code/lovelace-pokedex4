import styled from "styled-components";

const CardsPokemon = styled.div`
  height: 325px;
  width: 250px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 0px 5px;
    background-color: #0075ff;
    border-radius: 10%;
    height: 36px;
  }
  margin: 5px;
`;

function CardPokemon() {
  return (
    <CardsPokemon>
      {" "}
      <img src="https://picsum.photos/250/200" />
      <h2>Pokename</h2>
      <div>
        <button>Adicionar</button>
        <button>Detalhes</button>
      </div>
    </CardsPokemon>
  );
}

export default CardPokemon;

/* import CardPokemon from "./components/CardPokemon";
import Header from "./components/Header";
import Screen from "./components/Screen";
 */
