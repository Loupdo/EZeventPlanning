import { useState } from "react";
import { useVariable } from "./AppContext.jsx";
import { Button, Card } from "react-bootstrap";
import EventForm from "./eventForm.jsx"; // Updated name

export default function DisplayEvents() {
  const { events, setEvents, showCreateForm, setShowCreateForm } =
    useVariable();
  const [editingEvent, setEditingEvent] = useState(null);

  return (
    <div className="eventCard row">
      <Button
        variant="success"
        className="my-3"
        onClick={() => setShowCreateForm(true)}
      >
        + Add Event
      </Button>

      {showCreateForm && (
        <EventForm
          setEvents={setEvents}
          events={events}
          setEditingEvent={setShowCreateForm}
        />
      )}

      {events.length === 0 ? <p>No event</p> : null}

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

      {/* Conditionally render the edit form */}
      {editingEvent && (
        <EventForm
          event={editingEvent}
          setEditingEvent={setEditingEvent}
          setEvents={setEvents}
          events={events}
        />
      )}
    </div>
  );
}
