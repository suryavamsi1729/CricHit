import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler

} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
        display:false,
      grid: {
        display: false // hides grid lines on x-axis
      }
    },
    y: {
        display:true,
      grid: {
        display: false // hides grid lines on y-axis
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: true,
      text: 'StikeRaate per Year',
    },
    datalabels:{
      display:false,
    }
  },
};

const labels = [];
for(let i=2011;i<=2024;i++){
    labels.push(i.toString());
}

export const data = {
  labels,
  datasets: [
    {
      label: 'score',
      data: [1000,3000,2000,2500,5000,3000,4000,1000,3000,2000,2500,5000,3000,4000],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0,
      backgroundColor: 'rgb(255, 99, 132, 0.6)',
    },
  ],
};

export function StikeRate() {
  return <div className='w-full h-full '> <Line options={options} data={data} /> </div>;
}
