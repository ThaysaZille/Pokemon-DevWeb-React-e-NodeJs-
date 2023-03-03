// Componente filho
import React from 'react';

const PokemonCard = ({pokemon, proximo, anterior }) => {
  // Objeto que mapeia cada tipo a uma cor
  const tipoCor = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  }

  return (
    <div className="container">
      <div className="out">
        <ul> Status: {pokemon.stats.map((stat) => (<li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>))}</ul>
      </div>
      <div className="card">
        <div className="row card-header" style={{ backgroundColor: tipoCor[pokemon.types[0].type.name] }}>
          <label id="name">{pokemon.name}</label>
          <div className="row">
            <label>Height:{pokemon.height} </label>
            <label>Weight:{pokemon.weight}</label>
          </div>
        </div>
        <div className="row card-header">
          <img src={pokemon.sprites.front_default} alt="front sprite"/>
          <img src={pokemon.sprites.back_default} alt="back sprite"/>
        </div>
        <div className="row card-body">
          <div className="col-1">
            <div className="label-container">
              <label>Abilities:</label>
              <p>{pokemon.abilities.map(ha => <p key={ha.ability.name}>{ha.ability.name}</p>)}</p>
            </div>
          </div>
          <div className="col-1">
            <div className="label-container">
              <label>4 Moves:</label>
              <p>{pokemon.moves.slice(0,4).map(ha => <p key={ha.move.name}>{ha.move.name}</p>)}</p>
            </div>
          </div>
        </div>
        <div className="row card-footer">
          <button onClick={anterior}>Back</button> <button onClick={proximo}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;