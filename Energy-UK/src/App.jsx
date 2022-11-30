import "./App.css";
import { useState, useEffect } from "react";
import { RegionPicker } from "./Components/RegionPicker";
import { Chart } from "./Components/Chart";

function App() {
  const [regionId, setRegionId] = useState("18");

  return (
    <div className="App">
      <h1>Welcome to Energy-UK</h1>
      <RegionPicker setRegionId={setRegionId} />
      <Chart regionId={regionId} />
    </div>
  );
}

export default App;
