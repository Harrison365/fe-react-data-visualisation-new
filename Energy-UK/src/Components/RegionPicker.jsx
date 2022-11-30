import { useState, useEffect } from "react";
import axios from "axios";

const carbonApi = axios.create({
  baseURL: "api.carbonintensity.org.uk",
});

export const RegionPicker = ({ setRegionId }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    carbonApi.get("/regional").then(({ data }) => {
      setRegions(data[0].regions);
    });
  }, []);

  const handleClick = (id) => {
    setRegionId(id);
  };

  return (
    <>
      <ul>
        {regions.map((region) => {
          return (
            <li
              key={region.regionid}
              onClick={() => {
                handleClick(region);
              }}
            >
              <p>{region.shortname}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
