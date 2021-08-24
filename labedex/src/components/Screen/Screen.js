import styled from "styled-components";

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  justify-self: center;
  margin: 0 15px;
`;

function Screen(props) {
  return (
    <ContainerMain>
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
      {props.cardPokemon}
    </ContainerMain>
  );
}

export default Screen;
