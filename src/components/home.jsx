import NavBar from "../routes/NavBar";

import SigninForm from "./sign-in";
import { useVariable } from "./AppContext";

export default function Home() {
  const { userName } = useVariable();
  console.log(userName);
  if (userName === "") {
    return (
      <div className="container">
        <NavBar />
        <SigninForm />
      </div>
    );
  } else {
    console.log("dashboard");
    return (
      <div className="container">
        <NavBar />
        <div>"hello"</div>
      </div>
    );
  }
}
