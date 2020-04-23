import React, { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';

import {
  GET_POKEMON_LIST,
  SET_POKEMON_LIST_ERROR,
  SET_POKEMON_LIST_SUCCESS,
  initialPokemonListState,
  pokemonListReducer,
} from '../reducers/pokemonListReducer';

export const PokemonDataContext = createContext();

const PokemonDataProvider = (props) => {
  const [pokemonList, dispatch] = useReducer(pokemonListReducer, initialPokemonListState);
  const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')

  const setNewApiUrl = (newApiUrl) => {
    setApiUrl(newApiUrl);
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: GET_POKEMON_LIST })
      try{
        const result = await axios(apiUrl);
        dispatch({ type: SET_POKEMON_LIST_SUCCESS, payload: result.data });
      } catch (err) {
        dispatch({ type: SET_POKEMON_LIST_ERROR });
      }
    }

    fetchData();
  }, [apiUrl]);

  return (
    <PokemonDataContext.Provider value={{ ...pokemonList, dispatch, setNewApiUrl }}>
      {props.children}
    </PokemonDataContext.Provider>
  )
}

export default PokemonDataProvider;