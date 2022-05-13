import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pokeAdd from "../../assets/images/addPokemon.png";

function NavbarApp() {
  return (
    <Navbar bg="dark" className="navBar" expand="lg">
      <Container>
        <NavLink to="/" className="navbar navbar-brand titleNavBar">
          POKE-API
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/crear" className="nav-link subtitleNavBar">
              <img src={pokeAdd} alt="" className="iconAdd" /><br/>
              CREAR POKEMÓN
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
