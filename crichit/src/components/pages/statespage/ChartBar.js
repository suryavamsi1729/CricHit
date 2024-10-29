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
  BarElement

} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        
        display: false // hides grid lines on x-axis
      },
      categoryPercentage: 0.4,
    },
    y: {
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
      text: 'Score per Year',
    },
    
  },
  barPercentage: 0.3
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
      backgroundColor: 'rgb(255, 99, 132, 0.6)',
      borderWidth: 0.2,
      borderRadius: 16,
    },
  ],
};

export function ChartBar() {
  return <div className='w-full h-full '> <Bar options={options} data={data} /> </div>;
}
