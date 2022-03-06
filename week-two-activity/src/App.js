import './App.css';
import './components/style_pokemon.css';
import React, {useState} from 'react';
import Pokemon from './components/Pokemon';
const pikachu = require("./img/pikachu.gif");
const charizard = require("./img/charizard.gif");
const umbreon = require("./img/umbreon.gif");
const blastoise = require("./img/blastoise.gif");
const img_404 = require("./img/404.png");
var pokemones = ["PIKACHU", "BLASTOISE", "CHARIZARD", "UMBREON"];
var pathPokemones = [pikachu, blastoise, charizard, umbreon];

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function App() {
  const [pokemon, setPokemon] = useState(
    {
      name: pokemones[0],
      path: pathPokemones[0] 
    }
  );
  const changePokemon = () =>{
    let indexPokemon = random(0, 3);
    setPokemon({...pokemon, name: pokemones[indexPokemon], path: pathPokemones[indexPokemon]});
    console.log(pokemon);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon name={pokemon.name} path={pokemon.path} alt={img_404} /><br/>
        <button className='button' onClick={() => changePokemon()}>Cambiar Pokemón</button>
      </header>
    </div>
  );
}

export default App;
