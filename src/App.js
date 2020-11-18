import React, { useState, useEffect } from "react";
import { get } from "./modules/rest";
import Beer from "./components/Beer";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    get(setState);
    const interval = setInterval(() => {
      get(setState);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const fields = [];
  for (let i = 1; i <= state.inQueue; i++) {
    fields.push(<Beer />);
  }

  return (
    <div className="App">
      <h1>People currently waiting for some cold beer</h1>
      <h2 className="App-number">{state.inQueue}</h2>
      <section className="Beer">
        <h1>Be jelly of all the beer that people are drinking without you</h1>
        <article className="Beer-wrapper">{fields}</article>
      </section>
    </div>
  );
}

export default App;
