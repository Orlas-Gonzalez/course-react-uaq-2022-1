import "./css/App_React.css";
import React, { useState } from "react";
import Pokemon from "./components/Pokemon";
import ArrayPokemon from "./components/ArrayPokemon";
import Button from "react-bootstrap/Button";
import { Container, Form, Modal } from "react-bootstrap";

function App() {
  /* Estado Para El Manejo De Obtención De Datos Del Formulario */
  const [abilities, setAbilities] = useState("");
  const [baseExperience, setBaseExperience] = useState("");
  const [height, setHeight] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [types, setTypes] = useState("");
  /* Estado Para El Manejo Del Componente Modal */
  const [show, setShow] = useState(false);
  /* Estado Para El Recuento De Los Pokemons */
  const [countPokemon, setCountPokemon] = useState(ArrayPokemon.length);
  /* Estado Para El Contenido Del Modal */
  const [contentModal, setContentModal] = useState({
    title: "",
    body: "",
    foot: "",
  });
  /* Estado Para Guardar El Valor De Los Inputs */
  const [inputEntry1, setInputEntry1] = useState("");
  const [inputEntry2, setInputEntry2] = useState("");
  const [inputEntry3, setInputEntry3] = useState("");
  const [inputEntry4, setInputEntry4] = useState("");
  const [inputEntry5, setInputEntry5] = useState("");
  const [inputEntry6, setInputEntry6] = useState("");
  const [inputEntry7, setInputEntry7] = useState("");
  var auxBody = "";
  const handleClose = () => setShow(false);
  const registerPokemon = () => {
    if (
      inputEntry1 == "" ||
      inputEntry2 == "" ||
      inputEntry3 == "" ||
      inputEntry4 == "" ||
      inputEntry5 == "" ||
      inputEntry6 == "" ||
      inputEntry7 == ""
    ) {
      setContentModal({
        ...contentModal,
        title: "[ ATENCIÓN ]: Campos Vácios",
        body: "Lo sentimos. No puedes dejar campos vacíos para registrar a tu Pokémo, por favor vuelve a intentarlo.",
        foot: "¡Lo Entiendo!",
      });
      setShow(true);
    } else {
      setAbilities(inputEntry1);
      setBaseExperience(inputEntry2);
      setHeight(inputEntry3);
      setId(inputEntry4);
      setName(inputEntry5);
      setWeight(inputEntry6);
      setTypes(inputEntry7);
      setCountPokemon(ArrayPokemon.length);
      auxBody =
        "Número(#) Total De Pokémons: [ " +
        { countPokemon }.toString() +
        " Pokémons ]";
      console.log(auxBody);
      setContentModal({
        ...contentModal,
        title: "Recuento De Pokémons",
        body: "Adios",
        foot: "¡Excelente!",
      });
      setShow(true);
    }
  };
  return (
    <>
      <Container fluid className="containerMain">
        <div className="formContainer">
          <h1 className="title">POKEMON</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formAbilities">
              <Form.Label className="subTitle">Habiliades</Form.Label>
              <Form.Control
                value={inputEntry1}
                onChange={(e) => setInputEntry1(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Sus Habilidades"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBaseExperience">
              <Form.Label className="subTitle">Experiencia Base</Form.Label>
              <Form.Control
                value={inputEntry2}
                onChange={(e) => setInputEntry2(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Su Experiencia Base"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label className="subTitle">Altura</Form.Label>
              <Form.Control
                value={inputEntry3}
                onChange={(e) => setInputEntry3(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Su Altura"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formId">
              <Form.Label className="subTitle">Identificador</Form.Label>
              <Form.Control
                value={inputEntry4}
                onChange={(e) => setInputEntry4(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Su Identificar"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="subTitle">Nombre</Form.Label>
              <Form.Control
                value={inputEntry5}
                onChange={(e) => setInputEntry5(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Su Nombre"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label className="subTitle">Peso</Form.Label>
              <Form.Control
                value={inputEntry6}
                onChange={(e) => setInputEntry6(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Su Peso"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formType">
              <Form.Label className="subTitle">Tipo</Form.Label>
              <Form.Control
                value={inputEntry7}
                onChange={(e) => setInputEntry7(e.target.value)}
                size="lg"
                className="placeH"
                placeholder="Ingresa Sus Tipos"
              />
            </Form.Group>

            <Button
              variant="outline-warning"
              size="lg"
              className="subTitle"
              onClick={() => registerPokemon()}
            >
              REGISTRAR POKÉMON
            </Button>
          </Form>
        </div>
      </Container>
      <Pokemon
        abis={abilities}
        expE={baseExperience}
        h={height}
        ident={id}
        nam={name}
        w={weight}
        typ={types}
      ></Pokemon>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{contentModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contentModal.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            {contentModal.foot}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
