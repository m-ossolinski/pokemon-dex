import React from 'react';
import { Route } from 'react-router-dom';
import Pokemon from './Pokemon';

export const pokemonPath = '/pokemon/:pokemonName';

export const PokemonRoute = () => {
  return (
    <Route
      path={pokemonPath}
      component={Pokemon}
      exact
    />
  )
};

export default PokemonRoute;