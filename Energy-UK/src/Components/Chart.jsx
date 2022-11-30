import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Chart.css";
import axios from "axios";

const carbonApi = axios.create({
  baseURL: "api.carbonintensity.org.uk",
});

ChartJS.register(ArcElement, Tooltip, Legend);

const label = "energy share";
const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(25, 207, 192, 0.2)",
  "rgba(155, 82, 200, 0.2)",
  "rgba(233, 189, 164, 0.2)",
];

const borderColour = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(25, 207, 192, 0.2)",
  "rgba(155, 82, 200, 0.2)",
  "rgba(233, 189, 164, 0.2)",
];

const borderWidth = 1;
export const Chart = ({ regionId }) => {
  const [fuels, setFuels] = useState([]);
  const [percentages, setPercentages] = useState([]);
  const [selectedRegionData, setSelectedRegionData] = useState({});

  const data = {
    labels: fuels,
    datasets: [
      {
        label: label,
        data: percentages,
        backgroundColor: backgroundColor,
        borderColour: borderColour,
        borderWidth: borderWidth,
      },
    ],
  };

  useEffect(() => {
    carbonApi.get(`/regionid/${regionId}`).then(({ data }) => {
      console.log(data);
      setSelectedRegionData(data[0].data[0].generationmix);
      setFuels(data[0].data[0].generationmix.map((element) => element.fuel));
      setPercentages(
        data[0].data[0].generationmix.map((element) => element.perc)
      );
    });
  }, [regionId]);

  return <Pie data={data} className="pie" />;
};
