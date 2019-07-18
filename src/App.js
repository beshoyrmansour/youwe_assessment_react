import React from "react";
import "./App.scss";
import { AccordionPage } from "./pages";
import { Navbars } from "./components";

function App() {
  return (
    <div className="App ">
      <Navbars />
      <div className="container">
        <AccordionPage />
      </div>
    </div>
  );
}

export default App;
