import { useState } from "react";
import axios from "axios";
import "./App.css";

import BeerInfo from "./components/BeerInfo";

function App() {
  const [id, setId] = useState(0);
  const [selectedBeer, setSelectedBeer] = useState("");

  const loadOneBeer = () => {
    axios
      .get(`http://localhost:3310/api/beers/${id}`)
      .then((items) => {
        console.info(items.data[0][0]);
        const beer = {
          name: items.data[0][0].name,
          picture: items.data[0][0].image_url,
        };
        setSelectedBeer(beer);
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
      <BeerInfo name={selectedBeer.name} picture={selectedBeer.picture} />
    </div>
  );
}

export default App;
