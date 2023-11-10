import { useLoaderData } from "react-router-dom";
import "./App.css";
import BeerList from "./components/BeerList";
import Title from "./components/Title";

function App() {
  const beers = useLoaderData();
  return (
    <div>
      <Title />
      <div className="App">
        <BeerList beers={beers} />
      </div>
    </div>
  );
}

export default App;
