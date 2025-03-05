import { useState } from "react";
import { Button, Card } from "react-bootstrap";

// import context
import { useVariable } from "./AppContext.jsx";

// import components
import EventForm from "./eventForm.jsx";

export default function DisplayEvents() {
  const { events, setEvents, showCreateForm, setShowCreateForm } =
    useVariable();
  const [editingEvent, setEditingEvent] = useState(null);

  return (
    <div className="eventCard row gy-3">
      <Button
        variant="success"
        className="addEventBtn"
        onClick={() => setShowCreateForm(true)}
      >
        + Add Event
      </Button>

      {showCreateForm ? (
        <EventForm
          setEvents={setEvents}
          events={events}
          setEditingEvent={setShowCreateForm}
        />
      ) : null}

      {!events || events.length === 0 ? (
        <p> You have no event plan use button: "+ Add Event" to add an event</p>
      ) : null}
      {/* creat for each event a card */}
      {events.map((event, index) => (
        <div className="col-md-4" key={index}>
          <Card className="cardEvent">
            <div className="d-flex buttonBar">
              <Button
                className="eventButton"
                variant="info"
                onClick={() => setEditingEvent({ ...event, index })}
              >
                Edit
              </Button>
              <Button
                className="eventButton"
                variant="danger"
                onClick={() => setEvents(events.filter((_, i) => i !== index))}
              >
                Delete
              </Button>
            </div>

            <Card.Title>{event.eventName}</Card.Title>
            <Card.Subtitle>
              {event.date} {event.time}
            </Card.Subtitle>
            <Card.Text>{event.description}</Card.Text>
            <p>{event.location}</p>
          </Card>
        </div>
      ))}
      {editingEvent ? (
        <EventForm
          event={editingEvent}
          setEditingEvent={setEditingEvent}
          setEvents={setEvents}
          events={events}
        />
      ) : null}
    </div>
  );
}
