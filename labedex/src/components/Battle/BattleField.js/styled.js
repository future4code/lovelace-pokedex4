import styled from "styled-components";
import bgImage from '../../../assets/img/pokemonBattle.png'

export const StyledBattleField = styled.div`
    margin-top: 5vh;
    background: #EDEDED;
    padding: 10px;
    min-width: 350px;
    width: 50vw;
    max-width: 400px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const StyledImage = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size:  cover, cover;
    padding: 20px 0 2px 0;
    border-radius: 8px;
    width: 100%;
`