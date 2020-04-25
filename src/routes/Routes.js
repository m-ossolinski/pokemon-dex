import React, { Fragment } from 'react';
import { PokemonPageRoute } from '../components/PokemonPage';
import { PokemonRoute } from '../components/Pokemon';

export const Routes = () => {
  return (
    <Fragment>
      <PokemonPageRoute />
      <PokemonRoute />
    </Fragment>
  );
};

export default {Routes};
