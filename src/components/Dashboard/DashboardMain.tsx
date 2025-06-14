"use client";

import React, { useState } from "react";
import Table from "../common/Table/Table";
import Card from "../common/Card/Card";
import DashboardSummary from "./DashboardSummary";
import DashboardChartGender from "./DashboardChartGender";
import DashboardChartArea from "./DashboardChartArea";
import { fetchMock } from "@/lib/api/mock/fetchMock";
import { useQuery } from "@tanstack/react-query";
import { fetchMockSummary, SummaryResponse } from "@/lib/api/mock/fetchMockSummary";

const Headers = [
  "Id",
  "Number",
  "Name of Location",
  "Date",
  "Login Hour",
  "Name",
  "Birth Year",
  "Gender",
  "Email",
  "Phone",
  "Brand Device",
  "Digital Interest",
  "Location Type",
];

interface IDashboardMain{
  summary: SummaryResponse
}

const DashboardMain = ({summary}: IDashboardMain) => {
  const [paging, setPaging] = useState({
    page: 1,
    limit: 10,
  });

  const { data, isFetching } = useQuery({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryKey: ["fetchMockData", paging],
    queryFn: async () => {
      const requset = {
        page: paging.page,
        limit: paging.limit,
      };
      const result = await fetchMock(requset);
      return result;
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <DashboardSummary data={summary.ageSummary}/>

      <div className="flex gap-4">
        <Card className="w-full">
          <DashboardChartGender data={summary.genderSummary}/>
        </Card>
        <Card className="w-full flex justify-center">
          <DashboardChartArea data={summary.locationSummary}/>
        </Card>
      </div>

      <Card className="p-4">
        <Table
          showPagination
          isLoading={isFetching}
          headers={Headers}
          bodies={data?.data?.data ?? []}
          totalItems={data?.data?.total}
          currentPage={paging.page}
          itemsPerPage={paging.limit}
          paginationContainerClassname="mt-8"
          onShownItemsChange={(limit) =>
            setPaging((prev) => ({ ...prev, limit }))
          }
          onPaginationChange={(page) =>
            setPaging((prev) => ({ ...prev, page }))
          }
        />
      </Card>
    </div>
  );
};

export default DashboardMain;
