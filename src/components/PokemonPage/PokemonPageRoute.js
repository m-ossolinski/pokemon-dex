import React from 'react';
import { Route } from 'react-router-dom';
import { PokemonPage } from './PokemonPage';
import PokemonDataProvider from "../../contexts/PokemonDataContext";

export const pokemonPagePath = '/';

export const PokemonPageRoute = () => {
  return (
    <Route
      path={pokemonPagePath}
      exact
    >
      <PokemonDataProvider>
        <PokemonPage />
      </PokemonDataProvider>
    </Route>
  )
};

export default PokemonPageRoute;
