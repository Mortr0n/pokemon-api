import React, { useState } from 'react';
import './App.css';
// import PokeAxios from './components/PokeAxios';
import PokeFetch from './components/PokeFetch';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <>
      <PokeFetch pokemon={pokemon} setPokemon={setPokemon}/>
      {/* <PokeAxios 
      pokemon={pokemon} 
      setPokemon={setPokemon}
      
      /> */}
    </>
  )
}

export default App;