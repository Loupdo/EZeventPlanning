import NavBar from "../routes/NavBar";

import SigninForm from "./sign-in";
import { useVariable } from "./AppContext";
import Dashboard from "./dashboard";
import { useEffect } from "react";

export default function Home() {
  const { userName, setEvents } = useVariable();
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
  if (userName && userName.length === 2) {
    return (
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    );
  } else {
    return (
      <div className="container">
        <NavBar />
        <SigninForm />
      </div>
    );
  }
}
