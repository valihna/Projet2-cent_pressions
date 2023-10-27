import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [id, setId] = useState(0);
  const loadBeers = () => {
    axios
      .get("http://localhost:3310/api/beers")
      .then((items) => {
        console.info(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const loadOneBeer = () => {
    axios
      .get(`http://localhost:3310/api/beers/${id}`)
      .then((items) => {
        console.info(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={loadBeers}>
        afficher toutes les bières
      </button>
      <form
        onSubmit={(event) => {
          loadOneBeer();
          event.preventDefault();
        }}
      >
        <label>
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
