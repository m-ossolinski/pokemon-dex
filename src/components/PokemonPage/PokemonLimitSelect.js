import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { PokemonDataContext } from '../../contexts/PokemonDataContext';
import {
  limitOptions,
  customStyles,
} from './utils';

const PokemonLimitSelect = () => {
  const {
    setNewPokemonLimit,
    activePokemonLimit,
  } = useContext(PokemonDataContext);
  const [activeLimit, setActiveLimit] = useState(activePokemonLimit);

  const setNewActivePokemonLimit = option => {
    setActiveLimit(option);
    setNewPokemonLimit(option.value);
  }

  return (
    <div className="pokemon-limit">
      <p>Results number:</p>
      <Select
        styles={customStyles}
        placeholder={activeLimit}
        options={limitOptions}
        onChange={setNewActivePokemonLimit}
        className="pokemon-limit-select"
        classNamePrefix="pokemon-limit-select__prefix"
        isSearchable={false}
      />
    </div>
  )
}

export {PokemonLimitSelect}