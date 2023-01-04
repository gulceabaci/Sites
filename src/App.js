import React from "react";
import "./App.css";
import { data } from "./data";
import { useState } from "react";
import Icon  from "./components/Icon";
import Bottom from "./components/Bottom";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>Yardımcı Siteler</h1>
      <Icon/>
      <div className="container">
        {data.map((item) => (
          <div className="card">
            <div className="card2">
              <img src={item.image} />
              <p>{item.description}</p>

              <a target="_blank" rel="noopener noreferrer" href={item.link}>
                <button>Adrese Git..</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Bottom/>
    </div>
  );
}

export default App;
