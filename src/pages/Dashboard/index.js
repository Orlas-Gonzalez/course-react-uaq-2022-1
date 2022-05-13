import "../../App.css";
import Pokemon from "../../components/Pokemon";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../../store/actions/pokemonActions";

function App() {
  const dispatch = useDispatch();
  const { list: pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    try {
      dispatch(fetchPokemons());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const debounce = (callback, wait) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  return (
    <>
      <Container className="mt-5">
        <Form>
          <Row>
            <Col className="d-flex justify-content-center">
              <Form.Label className="subTitle">Buscar Pokémon</Form.Label>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={8}>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Ingresa El Nombre De Tu Pokémon"
                className="placeH"
                name="name"
                onKeyUp={debounce(function (e) {
                  const filter = { [e.target.name]: e.target.value.trim() };
                  dispatch(fetchPokemons(filter));
                }, 500)}
              />
            </Col>
          </Row>
        </Form>
        <Row>
          <div className="pokemon-container m-5">
            {pokemons.map((pokemon) => {
              return (
                <Col key={pokemon.id}>
                  <Pokemon pokemon={pokemon} />
                </Col>
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
