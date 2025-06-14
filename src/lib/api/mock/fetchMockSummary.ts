import { apiErrorHandler } from "../apiErrorHandler";
import { IBaseApiResponse } from "../apiInterface";
import axios from "axios";

export interface GenderSummary {
  count: number;
  gender: string;
}

export interface LocationSummary {
  count: number;
  locationType: string;
}

export interface AgeSummary {
  minAge: number;
  maxAge: number;
  avgAge: number;
}

export interface SummaryResponse {
  genderSummary: GenderSummary[];
  locationSummary: LocationSummary[];
  ageSummary: AgeSummary;
}

export const fetchMockSummary = async (): Promise<
  IBaseApiResponse<SummaryResponse | null>
> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${apiUrl}/mock/summary`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
