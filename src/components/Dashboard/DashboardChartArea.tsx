import { LocationSummary } from "@/lib/api/mock/fetchMockSummary";
import React from "react";
import Chart from "react-google-charts";

interface IDashboardChartArea {
  data: LocationSummary[];
}

const DashboardChartArea = (props: IDashboardChartArea) => {
  const formattedData = props.data.map((item) => [
    item.locationType,
    item.count,
    "gold",
  ]);
  const data = [["Location", "Total", { role: "style" }], ...formattedData];

  return (
    <div className="w-full p-6">
      <p className="font-bold">Location Type Summary</p>
      <Chart chartType="ColumnChart" width="100%" height="300px" data={data} />
    </div>
  );
};

export default DashboardChartArea;
