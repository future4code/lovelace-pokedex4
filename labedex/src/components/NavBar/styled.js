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
  display: block;
  width: 0;
  height: 5px;
  background: white;
  transition: width .3s;
}

h3:hover::after {
  width: 100%;
  //transition: width .3s;
}

  

button {
    position: relative;
    margin: 35px;
  }
`
  

  
 

  

export const ContainerGeral = styled.div `
  position: sticky;
  top: 0;
`