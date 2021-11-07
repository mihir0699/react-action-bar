import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ActionBar from "./lib";

function App() {
  return (
    <div className="App">
      <ActionBar isVisible={false} />
    </div>
  );
}

export default App;
