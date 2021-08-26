import styled from "styled-components";

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 15px;
  justify-self: center;
  margin: 20px 15px;
`;

function Screen(props) {
  console.log(props.cardPokemon)
  // const pokelist = props.cardPokemon.map((pokemon) => {
  //   return(
  //     <p>{pokemon.name}</p>
  //   )
  // } )
 
  return (
    <ContainerMain>
     
      {/* {pokelist} */}
    
    </ContainerMain>
  );
}

export default Screen;
