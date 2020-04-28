import React from 'react';
import { withRouter } from 'react-router';
import UseFetch from '../../hooks/useFetch';
import { Loader } from '../Loader/Loader';
import { PokemonInfo } from './PokemonInfo';

import './pokemon.scss';

export const PokemonComponent = (props) => {
  const {
    location: { pathname },
  } = props;

  const {
    data,
    dataLoading,
    dataLoadingFailed,
  } = UseFetch(
    `https://pokeapi.co/api/v2/pokemon/${pathname.replace('/pokemon/', '')}`,
    {})

  return (
    <div>
      pokemon
      {dataLoading ? (
        <Loader />
      ) : (
        <PokemonInfo pokemonData={data} />
      )}
      {dataLoadingFailed && <div>Error...</div>}
    </div>
  )
}

export const Pokemon = withRouter(PokemonComponent)

export default Pokemon;