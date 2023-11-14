import { useLoaderData } from "react-router-dom";

import BeerList from "./components/BeerList";
import Title from "./components/Title";
import NavBar from "./components/Navbar";

import "./App.css";

function App() {
  const beers = useLoaderData();
  return (
    <div>
      <NavBar />
      <Title />
      <div className="App">
        <BeerList beers={beers} />
      </div>
    </div>
  );
}

export default App;
