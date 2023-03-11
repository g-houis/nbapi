import { nbaApiCall, NbaApiResponse } from '../NbaApiClient';
import { BoxScoreTraditionalV2 } from './TraditionalBoxScoreV2Types';

const endpoint = '/boxscoretraditionalv3';

const getTraditionalBoxScore = (gameId: string) => nbaApiCall<BoxScoreTraditionalV2>(endpoint, {
  gameId,
}).then((data: NbaApiResponse<BoxScoreTraditionalV2> | null) => data?.boxScoreTraditional ?? null);

export default getTraditionalBoxScore;
