import NavBar from "../routes/NavBar";
import { useVariable } from "./AppContext";
import DisplayEvents from "./displayEvents";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Events() {
  const { userName } = useVariable();
  if (userName !== "") {
    return (
      <div className="container">
        <NavBar />
        <DisplayEvents />
      </div>
    );
  } else {
    return (
      <div className="container">
        <NavBar />
        <div className=" d-flex mt-5 justify-content-center">
          <Card className="welcomeCard text-center p-5">
            <Card.Text>You need to be sign in!</Card.Text>
            <Card.Link as={Link} to="/" className="fs-2 fw-bold m-5">
              Sign in
            </Card.Link>
          </Card>
        </div>
      </div>
    );
  }
}
