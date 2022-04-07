import Form from "../components/Form/index";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

function UpdatePokemon() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(`/pokemons/${id}`);
      setFormData(response.data);
    };
    fetchPokemons();
  }, [id]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`/pokemons/${id}`, formData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1 className="white-text m-4 text-center">Editar pokemon</h1>
      <Row className={"justify-content-center"}>
        <Col xs={6}>
          <Card className="p-4">
            <Form
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdatePokemon;