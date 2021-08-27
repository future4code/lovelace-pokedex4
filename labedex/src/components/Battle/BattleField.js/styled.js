import styled from "styled-components";
import bgImage from '../../../assets/img/pokemonBattle.png'

export const StyledBattleField = styled.div`
    margin-top: 5vh;
    background: #EDEDED;
    padding: 10px;
    width: 90vw;
    max-width: 600px;
    
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
export const StyledImageCongratulations = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size:  cover, cover;
    padding: 20px 0 2px 0;
    border-radius: 8px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: white;
        font-size: 3rem;
        font-weight: 700;
    }
`
