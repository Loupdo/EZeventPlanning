import NavBar from "../routes/NavBar";

import SigninForm from "./sign-in";
import { useVariable } from "./AppContext";
import Dashboard from "./dashboard";

export default function Home() {
  const { userName } = useVariable();
  if (userName === "") {
    return (
      <div className="container">
        <NavBar />
        <SigninForm />
      </div>
    );
  } else {
    return (
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}
