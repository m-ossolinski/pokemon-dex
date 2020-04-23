import React from 'react';
import PokemonPage from './PokemonPage/PokemonPage';
import PokemonDataProvider from "../contexts/PokemonDataContext";

function App() {
  return (
    <PokemonDataProvider>
      <div className="App">
        <PokemonPage />
      </div>
    </PokemonDataProvider>
  );
}

export default App;
