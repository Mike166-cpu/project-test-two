import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  salesData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1500, 1800, 2000, 1700, 2200, 2500, 2700, 2400, 2600, 2300, 2900],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        fill: true,
      },
    ],
  },
  trafficData: {
    labels: ['Direct', 'Organic', 'Referral', 'Social'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [4000, 3000, 2500, 1500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  },
};

const AnalyticsDashboard = () => {
  return (
    <div className="p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sales Over Time */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-medium mb-4">Sales</h2>
          <div className="h-64">
            <Line data={data.salesData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-medium mb-4">Traffic</h2>
          <div className="h-64">
            <Bar data={data.trafficData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Additional Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-3xl font-semibold mb-2">32,000</div>
          <div className="text-lg font-medium">Total Sales</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-3xl font-semibold mb-2">1,200</div>
          <div className="text-lg font-medium">New Users</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-3xl font-semibold mb-2">890</div>
          <div className="text-lg font-medium">Active Sessions</div>
        </div>
      </div>
      
      {/* Info Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-xl font-medium mb-2">Top Product</div>
          <div className="text-lg">Product XYZ</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-xl font-medium mb-2">Best Month</div>
          <div className="text-lg">December</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-xl font-medium mb-2">Growth Rate</div>
          <div className="text-lg">15%</div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <div className="text-xl font-medium mb-2">Churn Rate</div>
          <div className="text-lg">5%</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
