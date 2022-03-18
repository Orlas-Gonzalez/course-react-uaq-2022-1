import "../css/App_React.css";
import React from "react";
import ArrayPokemon from "./ArrayPokemon";
import { Form, Container } from "react-bootstrap";

function showPokemons() {
  var fullText = "";
  for (let i = 0; i < ArrayPokemon.length; i++) {
    fullText =
      fullText +
      "\n<!--- Pokémon #" +
      (i + 1) +
      " --->\n" +
      JSON.stringify(ArrayPokemon[i], null, 2);
  }
  return fullText;
}

function Pokemon(props) {
  var newPokemon = {};
  if (
    props.abis != "" &&
    props.expE != "" &&
    props.h != "" &&
    props.ident != "" &&
    props.nam != "" &&
    props.w != "" &&
    props.typ != ""
  ) {
    console.log("Estoy dentro");
    newPokemon.abilities = props.abis;
    newPokemon.base_experience = props.expE;
    newPokemon.height = props.h;
    newPokemon.id = props.ident;
    newPokemon.name = props.nam;
    newPokemon.weight = props.w;
    newPokemon.types = props.typ;
    console.log(newPokemon.abilities);
    ArrayPokemon.push(newPokemon);
    console.log(ArrayPokemon);
  }
  return (
    <>
      <Container fluid className="containerMain">
        <div className="formContainer">
          <Form>
            <Form.Group className="mb-3" controlId="resultPokemon">
              <Form.Label className="subTitle">
                [ Visualiza A Tus Pokémon ]
              </Form.Label>
              <Form.Control
                as="textarea"
                readOnly
                rows={10}
                value={showPokemons()}
              />
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Pokemon;
