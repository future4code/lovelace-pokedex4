import styled from "styled-components";

export const CardsPokemon = styled.div`
  height: 305px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  
  &:hover {
    box-shadow: rgba(209, 40, 14) 0px 13px 27px -5px, rgba(209, 40, 14) 0px 8px 16px -8px;
    h2 {
      color: black;
    }
  }

  h2 {
    color: grey;
  }

  button {
    margin: 0px 5px;
    background-color: #000000;
    /* border-radius: 10%; */
    /* height: 36px; */
  }

  img {
    margin: 1px;
    height: 130px;
    width: auto;
  }

`
