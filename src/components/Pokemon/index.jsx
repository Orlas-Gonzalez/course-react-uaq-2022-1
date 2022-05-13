import update from "../../assets/images/update.png";
import deleteIcon from "../../assets/images/delete.png";
import styles from "./Pokemon.module.css";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePokemon } from "../../store/actions/pokemonActions";

function Pokemon({ pokemon }) {
  const dispatch = useDispatch();

  const deletePokemon = async () => {
    dispatch(removePokemon(pokemon.id));
    alert("Se ha eliminado el pokemon exitosamente!");
  };

  return (
    <Card className={`${styles.cardMain}`}>
      <Card.Body className={`${styles.card} text-center`}>
        <div className={`${styles.pokemonImg}`}>
          {" "}
          {/*mb-5*/}
          <img src={pokemon.sprite} alt="pokemon-img" />
        </div>
        <div>
          <span className={`${styles.titleCard}`}>{`${pokemon.name}`}</span>
        </div>
        <p>
          <span className={`${styles.propsCard}`}>Base XP: </span>
          <span
            className={`${styles.propsValue}`}
          >{`${pokemon.base_experience} xp`}</span>
          <br />
          <span className={`${styles.propsCard}`}>Height: </span>{" "}
          <span
            className={`${styles.propsValue}`}
          >{`${pokemon.height} m`}</span>
          <br />
          <span className={`${styles.propsCard}`}>Weight: </span>{" "}
          <span
            className={`${styles.propsValue}`}
          >{`${pokemon.weight} kg`}</span>
        </p>
        <div className={`${styles.actionsContainer}`}>
          <NavLink to={`/actualizar/${pokemon.id}`}>
            <img className={`${styles.updateButton}`} src={update} alt="" />
          </NavLink>
          <img
            className={`${styles.updateButton}`}
            src={deleteIcon}
            alt=""
            onClick={deletePokemon}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;
