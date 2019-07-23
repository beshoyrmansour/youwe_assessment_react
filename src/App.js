import React from "react";
import "./App.scss";
import { Navbars } from "./components";
import { ContactPage } from "./pages";

function App() {
  return (
    <div className="App ">
      <Navbars />
      <div className="container">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
