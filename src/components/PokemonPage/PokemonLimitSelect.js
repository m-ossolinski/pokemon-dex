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
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0
    }
  }),
  container: (provided, state) => ({
    ...provided,
    width: 115,
    border: '5px solid red',
  }),
  option: (provided, state) => ({
    padding: 10,
    width: 100,
    margin: 0,
    '&:hover': {
      background: 'red',
    }
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  menuList: (state) => ({
    overflow: 'hidden',
    width: 105,
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
    <div className="pokemon-limit">
      <p>Results number:</p>
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