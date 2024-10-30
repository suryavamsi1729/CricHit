import React from "react";
import { Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
 } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        maxHeight:32,
        maxWidth: 100,
        labels:{
          boxWidth:10,
          boxHeight: 10,
          usePointStyle: true, 
          pointStyle: 'circle',
          padding: 18,
        },
  
      },
      title: {
        display: true,
        text: '50s 100s & 200s',
      },
      datalabels: {
          
          color: 'white',                // Label color
          font: {
            weight: 'bold',
            size: 14
          },
          anchor: 'center',               // Center the label on each arc
          align: 'center',                // Align text to be centered
          formatter: (value, context) => {
            return context.chart.data.labels[context.dataIndex]; // Show label text
          }
        },
    },
  };
  const data = {
    labels: [
      "4s","6s"
    ],
    datasets: [{
      label: 'Boundaries',
      data: [300, 29],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      borderWidth:0,
      hoverOffset: 4,
      borderJoinStyle:"round"
    }]
  };
export function Dounent46(){
    return(
        <>
            <div className="w-full h-full">
                <Doughnut options={options} data={data}/>
            </div>
        </>
    )
}