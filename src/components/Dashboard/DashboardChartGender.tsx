import { GenderSummary } from "@/lib/api/mock/fetchMockSummary";
import React from "react";
import { Chart } from "react-google-charts";

interface IDashboardChartGender {
  data: GenderSummary[];
}

const DashboardChartGender = (props: IDashboardChartGender) => {
  const formattedData = props.data.map((item) => [item.gender, item.count]);
  const data = [["Gender", "Toal"], ...formattedData];

  return (
    <div className="p-6">
      <p className="font-bold">Gender Summary</p>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
  );
};

export default DashboardChartGender;
