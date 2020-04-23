import React, { useContext } from 'react';
import {PokemonDataContext} from "../../contexts/PokemonDataContext";
import PokemonCard from "./PokemonCard";
import {SET_URL} from "../../reducers/pokemonListReducer";

const PokemonList = () => {
  const {
    pokemonList: { results, next },
    pokemonListLoading,
    dispatch,
    setureel,
  } = useContext(PokemonDataContext);

  return (
    <div>
      {pokemonListLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <button onClick={() => setureel(next)}>qwe</button>
          <div className="pokemon-list">
            {results.map(({ name }) => (
              <PokemonCard key={name} pokemonName={name}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonList;