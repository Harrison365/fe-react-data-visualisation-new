import { useState, useEffect } from "react";

export const RegionPicker = ({setRegionId}) => {
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

  const handleClick = (id) => {
    setRegionId(id)
  }

  return <>
    <ul>
      {regions.map((region) => {
        return (
          <li key={region.id} onClick={() => {
            handleClick(region)
          }}>
            <p>{region.shortname}</p>
          </li>
        )
      })}
    </ul>
  </>
};
