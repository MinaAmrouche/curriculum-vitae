import React from "react";
import "./App.scss";
import Introduction from "./components/Introduction/Introduction";
import Experiences from "./components/Experiences/Experiences";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Experiences />
    </div>
  );
}

export default App;
