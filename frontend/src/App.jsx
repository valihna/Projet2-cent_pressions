import axios from "axios";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <button type="button" onClick={loadBeers}>
        afficher toutes les bières
      </button>
    </div>
  );
}

export default App;
