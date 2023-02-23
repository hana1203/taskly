import React from "react";

import "./App.css";
import { Tasks } from "./pages/Tasks";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;
