import axios, { AxiosResponse } from 'axios';

type Params = {
  [key: string]: string | number
};

export type NbaApiResponse<T> = {
  meta: {
    version: number,
    request: string,
    time: string
  },
} & T;

const baseUrl: string = 'https://stats.nba.com/stats/';
const headers: { [key: string]: string } = { Referer: 'https://www.nba.com/' };

export function nbaApiCall<T>(endpoint: string, params: Params): Promise<NbaApiResponse<T> | null> {
  return axios.get(`${baseUrl}${endpoint}`, { params, headers })
    .then((axiosResponse: AxiosResponse<NbaApiResponse<T>>) => axiosResponse.data)
    .catch(() => null);
}
