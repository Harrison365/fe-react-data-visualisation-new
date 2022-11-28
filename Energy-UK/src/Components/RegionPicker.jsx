import React from "react";
console.log(regions);
export const RegionPicker = ({ regions }) => {
  <div>
    {regions.map((region) => {
      return (
        <div key={region.shortname}>
          <p>{region.shortname}</p>
        </div>
      );
    })}
  </div>;
};
