import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { PokemonDataContext } from '../../contexts/PokemonDataContext';

const limitOptions = [
  { value: '20', label: '20' },
  { value: '40', label: '40' },
  { value: '60', label: '60' },
  { value: '80', label: '80' },
  { value: '100', label: '100' },
];

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    border: '1px solid red',
    width: 100,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    width: 100,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 100,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

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
    <div>
      select
      <Select
        styles={customStyles}
        placeholder={activeLimit}
        options={limitOptions}
        onChange={setNewActivePokemonLimit}
        className="pokemon-limit-select"
        classNamePrefix="pokemon-limit-select__prefix"
      />
    </div>
  )
}

export {PokemonLimitSelect}