import styled from "styled-components";

export const CardsPokemon = styled.div`
  height: 325px;
  width: 250px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;

  &:hover{
    border: 3px solid blue;
  }


  button {
    margin: 0px 5px;
    background-color: #0075ff;
    border-radius: 10%;
    height: 36px;
  }
`;
