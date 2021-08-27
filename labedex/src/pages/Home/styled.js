import styled from "styled-components";

export const ButtonStyle1 = styled.button`
    color: white;
    
    background-color: black;
    width: 8vh;
    height: 3vh;
    border-radius: 5px;
    :hover {
        background-color: red;
        color: white;
        transform: scale(1.1);
        transition: all 0.5s;
        font-weight: bold;
    }    
`
export const ButtonStyle = styled.button`
    color: white;
    width: 8vh;
    height: 3vh;
    background-color: black;
    border-radius: 5px;
    :hover {
        background-color: red;
        color: white;
        transform: scale(1.1);
        transition: all 0.5s;
        font-weight: bold;
    }
    
`

export const ContainerButton = styled.div`
    width: 100%;
    margin: 10px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
        margin: 0 8px;
    }
`