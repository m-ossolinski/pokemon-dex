import React from 'react';
import PokemonList from './PokemonList';
import { PokemonLimitSelect } from './PokemonLimitSelect';
import { PokemonListPageSwitch } from './PokemonListPageSwitch';

import './pokemonPage.scss';

export const PokemonPage = () => {
  return (
    <div className="pokemon-page">
      <PokemonLimitSelect />
      <PokemonList />
      <PokemonListPageSwitch />
    </div>
  )
}

export default {PokemonPage}