export const initialState = {
  url: "https://pokeapi.co/api/v2/pokemon?limit=10",
  pokemons: [],
  selectedIndex: 0,
  hoverIndex: null,
  previousUrl: null,
  nextUrl: null,
  descriptions: [],
  showDetail: false,
  loading: false
};

export const MAPPING_ACTIONS = {
  SET_URL: "set_url",
  SET_POKEMONS: "set_pokemons",
  SET_SELECTED_POKEMON_INDEX: "set_selected_pokemon",
  SET_HOVER_POKEMON_INDEX: "set_hover_pokemon",
  SET_PREVIOUS_URL: "set_previous_url",
  SET_NEXT_URL: "set_next_url",
  SET_DESCRIPTIONS: "set_descriptions",
  SET_SHOW_DETAIL: "set_show_detail",
  SET_LOADING: "set_loading"
};

const reducer = (state, action) => {
  switch (action.type) {
    case MAPPING_ACTIONS.SET_INITIAL:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        previousUrl: action.payload.previousUrl,
        nextUrl: action.payload.nextUrl,
        descriptions: action.payload.descriptions,
        loading: action.payload.loading
      };
    case MAPPING_ACTIONS.SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case MAPPING_ACTIONS.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case MAPPING_ACTIONS.SET_SELECTED_POKEMON_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    case MAPPING_ACTIONS.SET_HOVER_POKEMON_INDEX:
      return {
        ...state,
        hoverIndex: action.payload,
      };
    case MAPPING_ACTIONS.SET_DESCRIPTIONS:
      return {
        ...state,
        descriptions: action.payload,
      };
    case MAPPING_ACTIONS.SET_PREVIOUS_URL:
      return {
        ...state,
        previousUrl: action.payload,
      };
    case MAPPING_ACTIONS.SET_NEXT_URL:
      return {
        ...state,
        nextUrl: action.payload,
      };
    case MAPPING_ACTIONS.SET_SHOW_DETAIL:
      return {
        ...state,
        showDetail: action.payload,
      };
    case MAPPING_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export default reducer;
