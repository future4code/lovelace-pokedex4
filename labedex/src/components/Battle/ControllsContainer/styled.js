import styled from "styled-components";

export const StyledControlls = styled.div`
    margin: 10px;
    padding: 5px 0;
    width: 100%;
    min-height: 10vh; 
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

`
export const StyledControllsInten = styled.div`
    width: 95%;
    height: 95%;
    min-height: 100px;
    border-radius: 10px;
    background: #f0f0f0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    div {
        border-radius: 10px;
    }

    p {
        max-width: 300px;
        margin: 8px;
    }


`
