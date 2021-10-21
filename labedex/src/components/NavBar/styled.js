import styled from "styled-components"

export const NavBar = styled.nav `
  height: 70px;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  h3 {
    position: relative;
    left: 5.5vw;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    margin-right: 15px;

  }
  h3::after {
    content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  background-color: white;
  transition: transform 0.3s;
}

h3:hover::after {
  transform: scaleX(1);
  //transition: width .3s;
}

button {
    position: relative;
    right: 5.5vw;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    margin-right: 15px;
    background: transparent;
    border: none;
    font-weight: 700;
  }
  button::after {
    content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  transform: scaleX(0);
  background-color: white;
  transition: transform 0.3s;
}

button:hover::after {
  transform: scaleX(1);
  //transition: width .3s;
}

`
  

export const ContainerGeral = styled.div `
  position: sticky;
  top: 0;
`