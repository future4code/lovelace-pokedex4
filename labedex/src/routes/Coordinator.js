export const goToHomePage = (history) => {
    history.push("/")
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToDetailsPage = (history, name) => {
    history.push(`/details/${name}`)
}

export const goBack = (history) => {
    history.goBack()
}

export const goToBattle = (history, namePokemon1, namePokemon2) => {
    history.push(`/battle/${namePokemon1}/${namePokemon2}`)
}