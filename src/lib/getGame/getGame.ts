import nbaApiCall from '../NbaApiClient';
import {
  Game, GameFinderHeaders, GameFinderHeaderType, GameFinderRowType,
} from './GameType';
import TeamId from '../parameters/TeamId';
import LeagueId from '../parameters/LeagueId';
import SeasonType from '../parameters/SeasonType';

const endpoint = '/leaguegamefinder';

type NbaApiRessourceResponse = {
  ressource: string,
  parameters: { [key: string]: string | number | null }
  resultSets: { name: string, header: GameFinderHeaderType[], rowSet: GameFinderRowType[] }[]
};

type FindGameParameters = {
  teamId?: TeamId,
  leagueId?: LeagueId,
  seasonType?: SeasonType,
  season?: string,
};

// eslint-disable-next-line import/prefer-default-export
export const getGame = ({
  teamId, leagueId, seasonType, season,
} : FindGameParameters): Promise<Game[]> => nbaApiCall<NbaApiRessourceResponse>(endpoint, {
  TeamId: teamId ?? null,
  LeagueId: leagueId ?? null,
  season: season ?? null,
  seasonType: seasonType ?? null,
})
  .then((data: NbaApiRessourceResponse | null) => {
    const resultSets = data?.resultSets;
    return resultSets?.length ? resultSets[0].rowSet : [];
  })
  .then((data) => data.map((row) => ({
    ...GameFinderHeaders
      .map((value, index) => ({
        key: value,
        value: row[index],
      }))
      .reduce((accumulator, current) => ({ ...accumulator, [current.key]: current.value }), {}) as Game,
  })));
