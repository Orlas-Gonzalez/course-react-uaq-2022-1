import "./css/appReact.css";
import FormFilter from "./components/FormFilter/index";
import Pokemon from "./components/Pokemon/index";
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [backUpPokemons, setBackUpPokemons] = useState([]);

  useEffect(() => {
    try {
      let fetchPokemon = async function () {
        let tempPoke = [];
        for (let i = 1; i <= 21; i++) {
          const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + i.toString()
          );
          tempPoke.push(response.data);
        }
        setPokemons(tempPoke);
        setBackUpPokemons(tempPoke);
      };
      fetchPokemon();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(pokemons);

  const searchPokemon = function (event) {
    let pokemonsArray = [...backUpPokemons];
    pokemonsArray = pokemonsArray.filter((pokemon) => {
      let namePokemon = pokemon.name;
      return (
        namePokemon.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });
    setPokemons(pokemonsArray);
  };
  return (
    <Container fluid className="containerMain">
      <Container className="mt-5">
      <h1 className="title">POKE API UAQ</h1>
        <FormFilter change={searchPokemon} />
        <br />
        <Row>
          {pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default App;
