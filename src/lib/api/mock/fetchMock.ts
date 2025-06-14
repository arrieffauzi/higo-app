import { IBaseApiResponse } from "../apiInterface";
import axios from "axios";
import { apiErrorHandler } from "../apiErrorHandler";

interface IRequest {
  page: number;
  limit: number;
}

interface IResponse {
  data: any[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export const fetchMock = async (
  request: IRequest
): Promise<IBaseApiResponse<IResponse | null>> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${apiUrl}/mock/get-list`;

  try {
    const { data } = await axios.post(url, request);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
