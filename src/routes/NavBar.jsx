import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useVariable } from "../components/AppContext";

export default function NavBar() {
  const { userName } = useVariable();
  function greeting() {
    return userName.length > 0 ? `Welcome, ${userName[0]}` : "";
  }

  return (
    <Navbar bg="info" expand="lg" data-bs-theme="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="shopLogo">
          EZ Event Planning
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Navbar.Text className="ms-lg-3">{greeting()}</Navbar.Text>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home/Login
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
