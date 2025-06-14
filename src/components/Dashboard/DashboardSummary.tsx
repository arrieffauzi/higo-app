import { AgeSummary } from "@/lib/api/mock/fetchMockSummary";
import React from "react";

interface IDashboardSummary{
  data: AgeSummary
}

const DashboardSummary = ({data}:IDashboardSummary) => {
  return (
    <div className="flex gap-8 mt-20">
      <div className="h-32 w-full [background:linear-gradient(93deg,_#005BD4_15.16%,_#00A3FF_99.91%)] rounded-xl text-white p-6">
        <p className="mb-2 font-bold">Minimum Age</p>
        <p className="text-4xl font-extrabold">{data.minAge}</p>
      </div>

      <div className="h-32 w-full [background:linear-gradient(93deg,_#A3F_15.16%,_#B78CFF_99.91%)] rounded-xl text-white p-6">
        <p className="mb-2 font-bold">Maximum Age</p>
        <p className="text-4xl font-extrabold">{data.maxAge}</p>
      </div>

      <div className="h-32 w-full [background:linear-gradient(93deg,_#CA024F_15.16%,_#FF75CB_99.91%)] rounded-xl text-white p-6">
        <p className="mb-2 font-bold">Average Age</p>
        <p className="text-4xl font-extrabold">{data.avgAge}</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
