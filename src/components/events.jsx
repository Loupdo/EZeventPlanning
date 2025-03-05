import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import components
import DisplayEvents from "./displayEvents";
import NavBar from "../routes/NavBar";

// import context
import { useVariable } from "./AppContext";

export default function Events() {
  const { userName } = useVariable();
  //if sign-in show Events
  if (userName.length !== 0) {
    return (
      <div className="container">
        <NavBar />
        <DisplayEvents />
      </div>
    );
  } else {
    //if not instruction and link to sign-in
    return (
      <div className="container">
        <NavBar />
        <div className=" d-flex mt-5 justify-content-center">
          <Card className="welcomeCard text-center p-5">
            <Card.Text className="fs-3">You need to be sign in!</Card.Text>
            <Card.Link as={Link} to="/" className="fs-2 fw-bold m-5">
              Sign in
            </Card.Link>
          </Card>
        </div>
      </div>
    );
  }
}
