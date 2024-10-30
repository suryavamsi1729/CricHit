import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export const options = {
  responsive: true,
  indexAxis: 'y', // Keeps it vertical; change to 'y' for horizontal
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Boundary Histogram for Player',
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      
      beginAtZero: true,
      title: {
        display: true,
        text: 'Boundary Count',
      },
    },
    y: {
        grid: {
            display: false,
          },
    },
  },
};

const labels = [''];

export const data = {
  labels,
  datasets: [
    {
      label: '4s',
      data: [1010],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 0.5,
      barPercentage: 1, // Max width
      categoryPercentage: 0.5, // Tighten space
    },
    {
      label: '6s',
      data: [29],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 0.5,
      barPercentage: 1, // Max width
      categoryPercentage: 0.5, // Tighten space // Tighten space
    },
  ],
};

export function Boundry() {
  return (
    <div className="w-full h-full">
      <Bar options={options} data={data} />
    </div>
  );
}
