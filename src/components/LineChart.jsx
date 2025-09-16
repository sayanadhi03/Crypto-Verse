"use client";
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const chartRef = useRef();

  if (!coinHistory?.data?.history) {
    return (
      <div className="flex items-center justify-center h-64 bg-white/5 rounded-xl">
        <p className="text-gray-400">No chart data available</p>
      </div>
    );
  }

  const coinPrice = [];
  const coinTimestamp = [];

  // Process the history data (reverse to get chronological order)
  for (let i = coinHistory.data.history.length - 1; i >= 0; i--) {
    const price = coinHistory.data.history[i]?.price;
    const timestamp = coinHistory.data.history[i]?.timestamp;

    if (price && timestamp) {
      coinPrice.push(parseFloat(price));
      coinTimestamp.push(new Date(timestamp * 1000).toLocaleDateString());
    }
  }

  // Determine if the price is going up or down
  const priceChange = coinPrice[coinPrice.length - 1] - coinPrice[0];
  const isPositive = priceChange >= 0;

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `${coinName} Price`,
        data: coinPrice,
        fill: true,
        backgroundColor: isPositive
          ? "rgba(16, 185, 129, 0.1)"
          : "rgba(239, 68, 68, 0.1)",
        borderColor: isPositive ? "#10b981" : "#ef4444",
        borderWidth: 3,
        pointBackgroundColor: isPositive ? "#10b981" : "#ef4444",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: isPositive ? "#10b981" : "#ef4444",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            return `Price: $${parseFloat(context.parsed.y).toFixed(2)}`;
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
          maxTicksLimit: 6,
        },
      },
      y: {
        display: true,
        grid: {
          color: "rgba(156, 163, 175, 0.1)",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#9ca3af",
          callback: function (value) {
            return `$${parseFloat(value).toFixed(2)}`;
          },
        },
      },
    },
    elements: {
      point: {
        hoverBackgroundColor: "#ffffff",
      },
    },
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{coinName} Price Chart</h3>
        <div
          className={`flex items-center gap-2 ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          <span>{isPositive ? "↗" : "↘"}</span>
          <span className="font-semibold">
            {isPositive ? "+" : ""}${priceChange.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="h-64 sm:h-80">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
