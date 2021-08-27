import styled from "styled-components";

export const ButtonStyle1 = styled.button`
    color: white;
    
    background-color: black;
    margin-top: 20px;
    width: 8vh;
    height: 3vh;
    border-radius: 5px;
    margin-left: 77px;
    :hover {
        background-color: red;
        color: black;
        transform: scale(1.1);
        transition: all 0.5s;
        font-weight: bold;
    }
    
    
`
export const ButtonStyle = styled.button`
    color: white;
    width: 8vh;
    height: 3vh;
    margin-left: 40px;
    background-color: black;
    border-radius: 5px;
    :hover {
        background-color: red;
        color: black;
        transform: scale(1.1);
    transition: all 0.5s;
    font-weight: bold;
    }
    
`