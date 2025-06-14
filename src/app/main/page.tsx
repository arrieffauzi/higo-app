import DashboardMain from "@/components/Dashboard/DashboardMain";
import DashboardProvider from "@/components/Dashboard/DashboardProvider";
import { IBaseApiResponse } from "@/lib/api/apiInterface";
import {
  fetchMockSummary,
  SummaryResponse,
} from "@/lib/api/mock/fetchMockSummary";

const page = async () => {
  const result: IBaseApiResponse<SummaryResponse | null> =
    await fetchMockSummary();

  const summary: SummaryResponse = result.data ?? {
    genderSummary: [],
    locationSummary: [],
    ageSummary: { minAge: 0, maxAge: 0, avgAge: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-yellow-300 h-56 px-16 py-10 shadow-sm">
      <h1 className="text-3xl font-extrabold mb-4">Dashboard Higo App</h1>
      <DashboardProvider>
        <DashboardMain summary={summary} />
      </DashboardProvider>
    </div>
  );
};

export default page;
