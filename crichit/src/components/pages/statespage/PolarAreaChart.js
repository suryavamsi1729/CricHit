import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  Ticks
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: {
        color: 'rgba(255, 255, 255, 0.2)', // White color for circular grid lines
        lineWidth: 1, // Adjust the line width if needed
      },
      angleLines: {
        color: 'rgba(255, 255, 255, 0.2)', // White color for radial (angle) grid lines
        lineWidth: 1,
      },
      ticks: {
        backdropColor: 'rgba(0, 0, 0, 0)', // Transparent background for ticks
        color: 'white', // Set the color of tick text if needed
      }
    },
  },
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
    '50s',
    '100s',
    '200s',
  ],
  datasets: [{
    label: "total",
    data: [11, 16, 7],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
    ],
    borderColor: 'rgb(199, 204, 204)',
    borderWidth: 1,
  }]
};

export function PolarAreaChart() {
  return (
    <div className="w-full h-full">
      <PolarArea options={options} data={data} />
    </div>
  );
}
