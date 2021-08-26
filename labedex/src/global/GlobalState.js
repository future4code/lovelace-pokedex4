import React, { useState } from "react"
import GlobalContext from "./GlobalContext"


const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    
    const addPokemonToPokedex = (name) => {
       const newPokemons = [...pokemons, name]
       setPokemons(newPokemons)
       
    }

    // const addPokemons = () => {

    // }

    // const getPokeDetails = () => {

    // }

    const states = { pokemons }
    const setters = { setPokemons, addPokemonToPokedex }
    // const requests = { getPokemons, getPokeDetails }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState