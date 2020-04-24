import React, { useContext } from 'react';
import { PokemonDataContext } from '../../contexts/PokemonDataContext';
import PokemonCard from './PokemonCard';
import { Loader } from '../Loader/Loader';

const PokemonList = () => {
  const {
    pokemonList: { results },
    pokemonListLoading,
  } = useContext(PokemonDataContext);

  return (
    <div>
      {pokemonListLoading ? (
        <Loader />
      ) : (
        <div>
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