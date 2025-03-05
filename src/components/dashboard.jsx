import { Button, Card } from "react-bootstrap";
import { useVariable } from "./AppContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { userName, events, setUserName } = useVariable();
  const nextevent = () => {
    const today = new Date();
    if (events && events.length > 0) {
      for (let event of events) {
        if (new Date(event.date) > today) {
          return event.eventName;
        }
      }
    }
    return null;
  };
  return (
    <div className=" d-flex mt-5 justify-content-center">
      <Card className="welcomeCard text-center p-5">
        <Card.Title className="fs-2 fw-bold m-5">
          Welcome, {userName[0]}
        </Card.Title>
        <Card.Subtitle className="fs-4 mb-2">
          You have {events?.length || "0"} incomming event(s)
        </Card.Subtitle>
        <Card.Text className="mb-4">
          {nextevent
            ? `Your next event: ${nextevent()}`
            : "You have no upcoming events."}
        </Card.Text>
        <Card.Link as={Link} to="/events" className="fs-2 fw-bold m-5">
          Manage events
        </Card.Link>
        <Button onClick={() => setUserName([])}>Logout</Button>
      </Card>
    </div>
  );
}
