'use client'

import React, { useState, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface Dataset {
label:string,
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

const DashboardBarChart = () => {
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: Dataset[] }>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
         label:'Sales $',
          data: [1400, 1300, 2800, 4400, 3500, 2000, 2200, 5800, 3800, 3000, 4300, 4200],
          borderColor: 'rgb(208, 225, 236)',
          backgroundColor: 'rgba(243, 243, 243, 0.904)',
        },
      ]
    });

    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
          display:false
      },
        title: {
          display: true,
          color:'white',
          text: 'Overview', 
          align:'start',
          font: {
            weight: 'bold',
            size: 20,
          },
        }
      },
      scales: {
        y: {
          display: true,
          ticks: {
            beginAtZero: true,
            callback: (value: number) => `$${value}`,
          },
        },
        x: {
          display: true,
        },
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <div className='w-full md:w-3/5 md:col-span-2 relative lg:h-[55vh] h-[50vh] mr-2  p-4 border rounded-lg bg-transparent'>
      <Bar data={chartData} options={chartOptions}  />
    </div>
  );
};

export default DashboardBarChart;