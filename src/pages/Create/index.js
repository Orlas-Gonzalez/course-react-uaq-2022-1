import Form from "../../components/Form";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../store/actions/pokemonActions";
import "./Create.module.css";

function CreatePokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    base_experience: "",
    height: "",
    weight: "",
    sprite: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(createPokemon(formData));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1 className="white-text m-4 text-center subTitle">Crear Nuevo Pokemón</h1>
      <Row className={"justify-content-center"}>
        <Col xs={6}>
          <Card bg="dark" className="p-4 cardForm">
            <Form
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          </Card>
        </Col>
      </Row>
      <br/>
    </Container>
  );
}

export default CreatePokemon;
