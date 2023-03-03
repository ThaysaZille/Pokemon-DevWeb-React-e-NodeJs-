// Componente pai
import React, { useState } from 'react';
import './App.css'
import PokemonCard from './PokemonCard.js'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [i, setI] = useState(1);

  const proximo = () => {
    setI(i + 1);
    Carregar();
  }

  const anterior = () => {
    setI(i - 1);
    Carregar();
  }

  const Carregar = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {pokemon.sprites ?
        <PokemonCard pokemon={pokemon} proximo={proximo} anterior={anterior} />
        :
        <div className="start">
          <button onClick={Carregar}>Carregar Pokemons</button>
        </div>
      }
    </div>
  );
}

export default App;