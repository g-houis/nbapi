import TeamId from '../lib/parameters/TeamId';
import SeasonType from '../lib/parameters/SeasonType';
import { getTraditionalBoxScore } from '../lib/getTraditionalBoxScore/getTraditionalBoxScore';
import { getGame } from '../lib/getGame/getGame';

describe('Test enpoints', () => {
  test('Test traditional box scores - valid id', async () => {
    const supposedToBeValidResult = await getTraditionalBoxScore('0022200971');
    expect(supposedToBeValidResult).not.toBeNull();
    expect(supposedToBeValidResult?.gameId).not.toBeNull();
  });
  test('Test traditional box scores - invalid id', async () => {
    const supposedToBeValidResult = await getTraditionalBoxScore('invalid');
    expect(supposedToBeValidResult).toBeNull();
  });

  test('Test GameFinder', async () => {
    const supposedToBeValidResult = await getGame({
      teamId: TeamId.BOS,
      seasonType: SeasonType.REGULAR_SEASON,
      season: '2021-22',
    });
    expect(supposedToBeValidResult).not.toBeNull();
    expect(supposedToBeValidResult.length).toEqual(82);
  });
});

export {};
