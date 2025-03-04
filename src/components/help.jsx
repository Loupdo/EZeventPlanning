import NavBar from "../routes/NavBar";

export default function Help() {
  return (
    <div className="container">
      <NavBar />
      <div className="helpGuide m-4 d-flex flex-column">
        <h2 className="mb-5">Help & User Guide</h2>
        <p className="fs-5 mb-5">
          Welcome to EZ Event Planning! Here's how to navigate and use our
          platform:
        </p>

        <h4> Navigating the App</h4>
        <p>
          Use the navigation bar at the top to access different sections like
          Home, Events, and Help.
        </p>

        <h4> Registering an Account</h4>
        <p>
          To create an account, click on "Register" and fill in your details.
          Once registered, you can log in.
        </p>

        <h4> Creating an Event</h4>
        <p>
          After logging in, go to the "Events" page and click " + Add Event".
          Fill in the details and save.
        </p>

        <h4> Editing & Deleting Events</h4>
        <p>
          On the "Events" page, find your event and click "Edit" to update
          details or "Delete" to remove it.
        </p>

        <h4 className="mt-4"> Event Planning Tips</h4>
        <ul>
          <li>Plan early and send invitations in advance.</li>
          <li>Set a clear agenda and keep track of RSVPs.</li>
          <li>Use reminders to ensure a smooth event experience.</li>
        </ul>

        <p>If you need further assistance, feel free to reach out!</p>
      </div>
    </div>
  );
}
