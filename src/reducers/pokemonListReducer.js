export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const SET_POKEMON_LIST_SUCCESS = 'SET_POKEMON_LIST_SUCCESS';
export const SET_POKEMON_LIST_ERROR = 'SET_POKEMON_LIST_ERROR';
export const SET_URL = 'SET_URL';

export const initialPokemonListState = {
  pokemonList: {},
  pokemonListLoading: true,
  pokemonListError: false,
  pokeListUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0',
  activePokemonLimit: '40',
}

export const pokemonListReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: {},
        pokemonListLoading: true,
        pokemonListError: false,
      }

    case SET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload,
        pokemonListLoading: false,
        pokemonListError: false,
      }

    case SET_POKEMON_LIST_ERROR:
      return {
        ...state,
        pokemonListLoading: false,
        pokemonListError: true,
      }

    default:
      return state;
  }
}