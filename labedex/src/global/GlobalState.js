import React, { useState } from "react"
import GlobalContext from "./GlobalContext"


const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])

    const addPokemonToPokedex = (name) => {
        if (pokemons.includes(name)) return
        const newPokemons = [...pokemons, name]
        setPokemons(newPokemons)
    }

    const removePokemonFromPokemon = (name) => {
        const filtredArray = pokemons.filter(pokemon => name!==pokemon)
        setPokemons(filtredArray)
    }

    // const addPokemons = () => {

    // }

    // const getPokeDetails = () => {

    // }

    const states = { pokemons }
    const setters = { setPokemons, addPokemonToPokedex, removePokemonFromPokemon }
    // const requests = { getPokemons, getPokeDetails }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState