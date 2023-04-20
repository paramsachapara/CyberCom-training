import React from "react";
import { Chart } from "react-google-charts";

export function BarGraph1() {
  const responseArr = [
    ["Name", "Percentage", { role: "annotation" }, { role: "link" }],
    ["Google", 55, "55%", "https://www.google.com"],
    ["Facebook", 40, "40%", "https://www.facebook.com"],
    ["Amazon", 25, "25%", "https://www.amazon.com"],
    ["Microsoft", 30, "30%", "https://www.microsoft.com"],
  ];
  return (
    <>
      <Chart
        width={"500px"}
        height={"500px"}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={responseArr}
        options={{
          chart: {
            title: "Company Percentage",
            subtitle: "Google, Facebook, Amazon, and Microsoft",
          },
          legend: { position: "none" },
          vAxis: {
            title: "Percentage",
          },
          hAxis: {
            title: "Company",
          },
        }}
      />
    </>
  );
}

export default BarGraph1;
