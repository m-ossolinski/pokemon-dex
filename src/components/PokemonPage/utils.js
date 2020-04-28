export const limitOptions = [
  { value: '20', label: '20' },
  { value: '40', label: '40' },
  { value: '60', label: '60' },
  { value: '80', label: '80' },
  { value: '100', label: '100' },
];

export const customStyles = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    cursor: 'pointer',
    '&:hover': {
      border: state.isFocused ? 0 : 0
    }
  }),
  container: (provided, state) => ({
    ...provided,
    width: 115,
    border: '1px solid red',
  }),
  option: (provided, state) => ({
    padding: 10,
    width: 100,
    margin: 0,
    '&:hover': {
      background: 'red',
    }
  }),
  placeholder: () => ({
    cursor: 'pointer',
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