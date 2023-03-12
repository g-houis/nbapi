import axios, { AxiosResponse } from 'axios';

type Params = {
  [key: string]: string | number | null
};

const baseUrl: string = 'https://stats.nba.com/stats/';
const headers: { [key: string]: string } = { Referer: 'https://www.nba.com/' };

export default function nbaApiCall<T>(endpoint: string, params: Params): Promise<T | null> {
  return axios.get(`${baseUrl}${endpoint}`, { params, headers })
    .then((axiosResponse: AxiosResponse<T>) => axiosResponse.data)
    .catch(() => null);
}
