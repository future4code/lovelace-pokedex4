import styled from "styled-components";

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
  button {
    position: relative;
    margin: 35px;
  }

.link--elara::before {
    transform-origin: 50% 100%;
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
    
}

.link--elara:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
    clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
}

.link--elara h3{
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    
}

.link--elara:hover h3 {
    transform: translate3d(0, -2px, 0);
    
}
`;

export const ContainerGeral = styled.div `
  position: sticky;
  top: 0;
`;