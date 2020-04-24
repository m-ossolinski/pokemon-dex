import React from 'react';
import PokemonList from './PokemonList';
import { PokemonLimitSelect } from './PokemonLimitSelect';
import { PokemonListPageSwitch } from './PokemonListPageSwitch';

import './pokemonPage.scss';

const PokemonPage = () => {
  return (
    <div>
      <PokemonLimitSelect />
      <PokemonList />
      <PokemonListPageSwitch />
    </div>
  )
}

export default PokemonPage;