import CardPokemon from "../../components/CardPokemon/CardPokemon.js"
import Header from "../../components/Header/Header.js"
import { ContainerCardBatalha, ContainerCardPokedex, ContainerMainPokedex, 
  DuasFotosEVersus, FundoMiniDireita, FundoMiniEsquerda } from "./styled.js"

function Pokedex() {
  return (
    <div>
      <Header />
      <ContainerMainPokedex>

        <ContainerCardBatalha>
        <h2>Batalhar</h2>
        <p>Selecione dois pokemons da lista clicando na imagem</p>

        <DuasFotosEVersus>

          <FundoMiniEsquerda />
        
          <p>VS</p>

          <FundoMiniDireita />

        </DuasFotosEVersus>
        <button>
          Iniciar a Batalha!
        </button>
        
        </ContainerCardBatalha>

        <ContainerCardPokedex>
        <CardPokemon /> 
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon /> 
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        </ContainerCardPokedex>

      </ContainerMainPokedex>  
      
    </div>
  )
}

export default Pokedex
