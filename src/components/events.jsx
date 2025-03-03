import NavBar from "../routes/NavBar";

import DisplayEvents from "./displayEvents";

export default function Events() {
  return (
    <div className="container">
      <NavBar />
      <DisplayEvents />
    </div>
  );
}
