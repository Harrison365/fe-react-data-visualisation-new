import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const label = "energy share"
const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(25, 207, 192, 0.2)',
    'rgba(155, 82, 200, 0.2)',
    'rgba(233, 189, 164, 0.2)',
]

  const borderColour = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(25, 207, 192, 0.2)',
    'rgba(155, 82, 200, 0.2)',
    'rgba(233, 189, 164, 0.2)',
  ]

  const borderWidth = 1
export const Chart = ({ regionId }) => {
    const [fuels, setFuels] = useState([])
    const [percentages, setPercentages] = useState([])
    const [selectedRegionData, setSelectedRegionData] = useState({})

    const data = {
        labels: fuels,
        datasets: [
            {
            label: label,
        data: percentages,
        backgroundColor: backgroundColor,
        borderColour: borderColour,
        borderWidth: borderWidth
        },
        ],
    }



    useEffect(() => {
        fetch(`https://api.carbonintensity.org.uk/regional/regionid/${regionId}`).then((res) => res.json()).then(({ data }) => {
            console.log(data[0].data[0].generationmix)
            setSelectedRegionData(data[0].data[0].generationmix)
            setFuels(data[0].data[0].generationmix.map((element) => element.fuel))
            setPercentages(data[0].data[0].generationmix.map((element) => element.perc))
        }
    )}, [regionId])
        console.log(fuels, percentages);
    return (
        <Pie data={data} />
  )
}
