import axios from "axios";
import "./App.css";

function App() {
  const load = () => {
    axios
      .get("http://localhost:3310/api/items")
      .then((items) => {
        console.info(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={load}>
        Load
      </button>
    </div>
  );
}

export default App;
