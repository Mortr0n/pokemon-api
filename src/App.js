import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // there's actually 1118 pokemon but the assignment says 807
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then((res) =>{
      console.log(res)
      // I tried this with just res like they
      //  told us, but it needed the result for it to work
      setPokemon(res.results);
    })
    .catch((err) =>console.log(err))
  }, []);

  return (
    <div className="App">
      {console.log(pokemon)}
      {
      pokemon.map((poke, index)=>{
        return(
          <div key={index}>
            {poke.name}
          </div>
        )
      })}
    </div>
  )
}

export default App;