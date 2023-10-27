import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [id, setId] = useState(0);

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
