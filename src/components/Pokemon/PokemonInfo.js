import React from 'react';

export const PokemonInfo = (props) => {
  const {
    pokemonData,
    pokemonData: {
      name,
      sprites,
    },
  } = props;

  return (
    <div className="pokemon-info">
      <span>{name}</span>
      <img
        className="pokemon-info__image"
        src={sprites && sprites.front_default}
        alt={name}
      />
    </div>
  )
}

export default PokemonInfo;