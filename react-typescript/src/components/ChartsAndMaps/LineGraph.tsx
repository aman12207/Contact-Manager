import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Loading from "../utils/Loading";
import ErrorComponent from '../utils/Error'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ApiResponse, ChartDataset } from "../../types/map.type";

ChartJS.register(         // registering chartjs 
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetchLineData = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all#"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

function LineGraph() {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: ChartDataset[]; 
  }>({ labels: [], datasets: [] });
  const { data, isLoading, isError } = useQuery<ApiResponse>(
    "chart-data",
    fetchLineData
  );

  useEffect(() => {
    if (data) {
      const { cases, deaths } = data;
      setChartData({
        labels: Object.keys(cases).map((item) => item),
        datasets: [
          {
            label: "No of Cases",
            data: Object.values(cases),
            fill: true,
            borderColor: "rgba(53, 162, 235, 0.7)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          {
            label: "No of Deaths",
            data: Object.values(deaths),
            fill: true,
            borderColor: "rgba(255, 0, 0, 0.7)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          },
        ],
      });
    }
  }, [data]);

  if (isLoading) return <Loading/>
  if (isError) return <ErrorComponent/>

  return (
    <div className="LineGraph grow flex justify-center mt-10">
      <div className="flex justify-center align-center chart w-[70vw] h-[70vh]">
        {chartData && chartData?.datasets && (
          <Line
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "COVID-19 Cases and Deaths Chart",
                },
              },
            }}
            data={chartData}
          />
        )}
      </div>
    </div>
  );
}

export default LineGraph;
