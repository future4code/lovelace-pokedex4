import styled from "styled-components";

export const ContainerGeral = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDetails = styled.div `
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  margin-left: 5vw;
`;

export const ContainerImg = styled.div `
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 10px;
    height: 250px;
    width: 200px;
  }
`;

export const ContainerStats = styled.div `
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  border-radius: 10px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  
  &:hover {
    box-shadow: rgba(209, 40, 14) 0px 13px 27px -5px, rgba(209, 40, 14) 0px 8px 16px -8px;
    h2 {
      color: black;
    }
  }
`;

export const ContainerSoloStat = styled.div `
  display: flex;
  flex-direction: column;
  margin: 10px;
  span {
    font-size: 1.2rem;
    margin:5px;
  }
`

export const BarraStats = styled.div `


  background-color: #1d507c;
  width: 200px;
  height: 15px;
  border-radius: 10px;
`;

export const ValorStat = styled.div `
box-shadow: #f13c20b5 0px 5px 15px;
  height: 100%;
  background-color: black;
  border-radius: 10px;
`;

export const ContainerTypes = styled.div `
  border: 1px solid black;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  
  &:hover {
    box-shadow: rgba(209, 40, 14) 0px 13px 27px -5px, rgba(209, 40, 14) 0px 8px 16px -8px;
    h2 {
      color: black;
    }
  }
  span {
    margin:10px;
    font-size: 1.2rem;
  }
`;

export const ContainerMoves = styled.div `
  border: 1px solid black;
  width: 300px;
  height: 50vh;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll ;
    
  &:hover {
    box-shadow: rgba(209, 40, 14) 0px 13px 27px -5px, rgba(209, 40, 14) 0px 8px 16px -8px;
    h2 {
      color: black;
    }
  }

`;