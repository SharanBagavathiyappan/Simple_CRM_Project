import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import "./piechart.css";

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      datasets: [
        {
          data: [15, 35, 50],
          backgroundColor: [
            // documentStyle.getPropertyValue()),
            documentStyle.getPropertyValue("--pink-500"),
            documentStyle.getPropertyValue("--blue-800"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--pink-400"),
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          borderWidth:[0,10,20]
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center ">
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-30rem "
      />
    </div>
  );
}
