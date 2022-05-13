import { Button, Form } from "react-bootstrap";
import "../../App.css";
import pokeName from "../../assets/images/pokename.png";
import pokeXP from "../../assets/images/pokexp.png";
import pokeHeight from "../../assets/images/pokeheight.png";
import pokeWidth from "../../assets/images/pokewidth.png";
import pokeSprite from "../../assets/images/pokepicture.png";
import pokeSend from "../../assets/images/pokesend.png";

function FormPokemon({ formData, setFormData, handleSubmit }) {
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="formComponent">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="propsName">NOMBRE</Form.Label>
          <img src={pokeName} alt="" className="pokeIcons" />
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa El Nombre"
            onChange={handleChange}
            value={formData.name}
            className="placeHForm"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="propsName">BASE EXPERIENCE</Form.Label>
          <img src={pokeXP} alt="" className="pokeIcons" />
          <Form.Control
            type="text"
            placeholder="Ingresa El Base Experience"
            name="base_experience"
            onChange={handleChange}
            value={formData.base_experience}
            className="placeHForm"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="propsName">HEIGHT</Form.Label>
          <img src={pokeHeight} alt="" className="pokeIcons" />
          <Form.Control
            type="text"
            name="height"
            placeholder="Ingresa El Height"
            onChange={handleChange}
            value={formData.height}
            className="placeHForm"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="propsName">WEIGHT</Form.Label>
          <img src={pokeWidth} alt="" className="pokeIcons" />
          <Form.Control
            type="text"
            name="weight"
            placeholder="Ingresa El Weight"
            onChange={handleChange}
            value={formData.weight}
            className="placeHForm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="propsName">SPRITE</Form.Label>
          <img src={pokeSprite} alt="" className="pokeIcons" />
          <Form.Control
            type="text"
            name="sprite"
            placeholder="Ingresa El Sprite"
            onChange={handleChange}
            value={formData.sprite}
            className="placeHForm"
          />
        </Form.Group>
        <Button variant="warning" type="submit" className="submitForm">
          ENVIAR POKÉMON
          <img src={pokeSend} alt="" className="pokeIcons" />
        </Button>
      </Form>
    </>
  );
}

export default FormPokemon;
