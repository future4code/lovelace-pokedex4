import styled from "styled-components"

export const ContainerMainPokedex = styled.div`
    display: flex;
`

export const ContainerCardBatalha = styled.div`
    width: 35%;
    height: 650px;
    background-color: #222;
    margin: 35px;
    border-radius: 10px;
    color: #eee;
    text-align: center;
    position: fixed;

    h2 {
        font-size: 1.9em;
    }
    p {
        font-size: 1.4em;
    }
    button {
        margin: 30px;
        background-color: white;
        color: black;
        width: 400px;
        height: 50px;
        font-size: 1.2em;
        font-family: Montserrat;
        cursor: pointer;
    }
    
`

export const ContainerMiniFotos = styled.div`
    
`

export const DuasFotosEVersus = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
        font-size: 2.5em;
        font-family: Montserrat;
    }

`
export const FundoMiniEsquerda = styled.div`
    background-color: #787878;
    border-radius: 5px;
    width: 200px;
    height: 250px;
    color: #787878;
    margin: 50px;
`
export const FundoMiniDireita = styled.div`
    background-color: #787878;
    border-radius: 5px;
    width: 200px;
    height: 250px;
    color: #787878;
    margin: 50px;
`

export const ContainerCardPokedex = styled.div`
    flex: 1;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
    justify-self: center;
    margin: 10px 15px;
    padding-left: 40vw;
    
`