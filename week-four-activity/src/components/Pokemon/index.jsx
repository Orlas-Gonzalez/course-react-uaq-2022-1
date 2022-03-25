import "../../css/appReact.css";
import { Col, Card } from "react-bootstrap";

function Pokemon(props) {
  const { pokemon } = props;
  return (
    <Col>
      <Card className="cardM">
        <Card.Body className="cardPoke text-center">
          <img
            src={pokemon.sprites.front_default}
            alt="src\img\poke.png"
            className="containerImage"
          ></img>
          <p className="titleCard">{pokemon.name}</p>
          <p className="infoCard">
            ID: <span className="resultInfo">{pokemon.id}</span>
            <br />
            Abilities:{" "}
            <span className="resultInfo">
              {pokemon.abilities[0].ability.name}
            </span>
            <br />
            Base Experience:{" "}
            <span className="resultInfo">{pokemon.base_experience}</span>
            <br />
            Height: <span className="resultInfo">{pokemon.height}</span>
            <br />
            Weight: <span className="resultInfo">{pokemon.weight}</span>
            <br />
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Pokemon;
