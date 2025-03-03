import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useVariable } from "../components/AppContext";

export default function NavBar() {
  const { userName } = useVariable();
  function greeting() {
    return userName ? `Welcome, ${userName}` : "";
  }

  return (
    <Navbar bg="info" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="shopLogo">
          EZ Event Planning
        </Navbar.Brand>
        <Navbar.Text>{greeting()}</Navbar.Text>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home/login
          </Nav.Link>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/help">
            Help
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
