import React, {useContext} from 'react';
import classNames from 'classnames';
import { PokemonDataContext } from '../../contexts/PokemonDataContext';

const PokemonListPageSwitch = () => {
  const {
    pokemonList: { next, previous },
    setNewApiUrl,
  } = useContext(PokemonDataContext);

  const switchConfig = [
    { type: previous, label: 'Previous page' },
    { type: next, label: 'Next page' },
  ];

  return (
    <div className="pokemon-list__page-switch">
      {switchConfig.map(({ type, label }) => (
        <button
          type={type}
          onClick={() => setNewApiUrl(type)}
          disabled={!type}
          className={classNames('pokemon-list__page-switch-btn', {
            'pokemon-list__page-switch-btn-disabled': !type,
          })}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export {PokemonListPageSwitch}