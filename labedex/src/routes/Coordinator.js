export const goToHomePage = (history) => {
    history.push("/")
}

export const goToPokedexPage = (history) => {
    history.push("/pokedex")
}

export const goToDetailsPage = (history, id) => {
    history.push(`/details/${id}`)
}

