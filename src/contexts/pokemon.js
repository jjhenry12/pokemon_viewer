export const initialState = {
  pokemons: [],
  selectedPokemon: null
}

export const MAPPING_ACTIONS = {
  SET_POKEMONS: "set_pokemons",
  SET_SELECTED_POKEMON: "set_selected_pokemon"
}

const reducer = (state, action) => {
  switch (action.type) {
    case MAPPING_ACTIONS.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    case MAPPING_ACTIONS.SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}

export default reducer