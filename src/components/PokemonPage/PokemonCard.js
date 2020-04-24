import React, { Fragment } from 'react';
import { FetchDataHook } from '../../hooks/FetchDataHook';
import { Loader } from '../Loader/Loader';

const PokemonCard = (props) => {
  const { pokemonName } = props;

  const {
    data: {
      sprites,
      abilities,
    },
    dataLoading,
    dataLoadingFailed,
  } = FetchDataHook(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  return (
    <Fragment>
      {dataLoading ? (
        <Loader />
      ) : (
        <div className="pokemon-list__card">
          <h2 className="pokemon-list__card-name">
            {pokemonName}
          </h2>
          <img
            src={sprites && sprites.front_default}
            alt={pokemonName}
            className="pokemon-list__card-image"
          />
          {dataLoadingFailed && <span>error</span>}
        </div>
      )}
    </Fragment>
  )
}

export default PokemonCard;