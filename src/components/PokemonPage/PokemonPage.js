import React from 'react';
import PokemonList from './PokemonList';
import { PokemonLimitSelect } from './PokemonLimitSelect';
import { PokemonListPageSwitch } from './PokemonListPageSwitch';
import { PageContent, TopBar } from '../../containers';

import './pokemonPage.scss';

export const PokemonPage = () => {
  return (
    <TopBar>
      <PageContent>
        <div className="pokemon-page">
          <PokemonLimitSelect />
          <PokemonList />
          <PokemonListPageSwitch />
        </div>
      </PageContent>
    </TopBar>
  )
}

export default {PokemonPage}