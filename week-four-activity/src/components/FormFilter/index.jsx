import "../../css/appReact.css";
import { Form, Row, Col } from "react-bootstrap";

function FormFilter(props) {
  return (
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
            onChange={props.change}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilter;
