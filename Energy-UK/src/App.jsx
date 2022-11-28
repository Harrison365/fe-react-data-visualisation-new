import "./App.css";
import { useState, useEffect } from "react";
import { RegionPicker } from "./Components/RegionPicker";

function App() {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    fetch("https://api.carbonintensity.org.uk/regional")
      .then((res) => {
        return res.json();
      })
      .then(({ data }) => {
        setRegions(data[0].regions);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Energy-UK</h1>
      <RegionPicker regions={regions} />
    </div>
  );
}

export default App;
