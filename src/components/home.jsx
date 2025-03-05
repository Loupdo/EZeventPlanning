import { useEffect } from "react";

//import Context
import { useVariable } from "./AppContext";

// import components
import NavBar from "../routes/NavBar";
import SigninForm from "./sign-in";
import Dashboard from "./dashboard";

export default function Home() {
  const { userName, setEvents } = useVariable();
  // get events link to an email
  useEffect(() => {
    if (userName && userName.length === 2) {
      const storedEvents = localStorage.getItem(`events_${userName[1]}`);
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      } else {
        setEvents([]);
      }
    }
  }, [userName]);

  // if sign in show dashboard
  if (userName && userName.length === 2) {
    return (
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    );
  } else {
    // else show the sign-in form
    return (
      <div className="container">
        <NavBar />
        <SigninForm />
      </div>
    );
  }
}
