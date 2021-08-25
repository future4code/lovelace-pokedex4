import React, { useState } from "react"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = () => {

    }

    const getPokeDetails = () => {

    }

    const states = { pokemons }
    const setters = { setPokemons }
    const requests = { getPokemons, getPokeDetails }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState