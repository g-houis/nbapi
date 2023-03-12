import nbaApiCall from '../NbaApiClient';
import { TraditionalBoxScore } from './TraditionalBoxScoreTypes';

const endpoint = '/boxscoretraditionalv3';

type NbaApiResponse<T> = {
  meta: {
    version: number,
    request: string,
    time: string
  },
} & T;

// eslint-disable-next-line import/prefer-default-export
export const getTraditionalBoxScore = (gameId: string) => nbaApiCall<NbaApiResponse<TraditionalBoxScore>>(endpoint, {
  gameId,
}).then((data: NbaApiResponse<TraditionalBoxScore> | null) => data?.boxScoreTraditional ?? null);
