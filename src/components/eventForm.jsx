import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useVariable } from "./AppContext.jsx";

export default function EventForm({
  event = null,
  setEditingEvent,
  setEvents,
  events,
}) {
  const isEditing = !!event;
  const { setShowCreateForm } = useVariable();

  const formik = useFormik({
    initialValues: {
      eventName: event?.eventName || "",
      date: event?.date || "",
      time: event?.time || "",
      description: event?.description || "",
      location: event?.location || "",
    },
    validationSchema: Yup.object({
      eventName: Yup.string().required("Required").min(3, "Name is too short"),
      date: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (isEditing) {
        setEvents(events.map((e, i) => (i === event.index ? values : e)));
        setEditingEvent(null);
      } else {
        setEvents([...events, values]);
      }
      formik.resetForm();
    },
  });

  return (
    <div className="eventModal">
      <form onSubmit={formik.handleSubmit} className="formEvent">
        <h3 className="text-center">
          {isEditing ? "Edit Event" : "Create Event"}
        </h3>

        <div className="row">
          <div className="form-group col-md-5 offset-md-1">
            <label htmlFor="eventName">Event name*:</label>
            <input
              id="eventName"
              name="eventName"
              type="text"
              className="form-control"
              placeholder="Event name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventName}
            />
            {formik.touched.eventName && formik.errors.eventName && (
              <p className="error">{formik.errors.eventName}</p>
            )}
          </div>

          <div className="form-group col-md-3">
            <label htmlFor="date">Date*:</label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date && (
              <p className="error">{formik.errors.date}</p>
            )}
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="time">Start time:</label>
            <input
              id="time"
              name="time"
              type="time"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
            />
          </div>

          <div className="form-group col-md-10 offset-md-1">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </div>

          <div className="form-group col-md-5 offset-1">
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              name="location"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center my-3">
          <Button variant="info" type="submit">
            {isEditing ? "Update Event" : "Create Event"}
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              isEditing ? setEditingEvent(null) : setShowCreateForm(false)
            }
            className="mx-2"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
