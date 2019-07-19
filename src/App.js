import React from "react";
import "./App.scss";
import { Navbars } from "./components";

function App() {
  return (
    <div className="App ">
      <Navbars />
      <div className="container">
        <ul>
          <li>
            <h3>For the Accordion task kindly checkout to "Accordion" branch</h3>
          </li>
          <li>
            <h3>For the Form task kindly checkout to "Form" branch</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
