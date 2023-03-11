import getTraditionalBoxScore from '../lib/nbaApi/traditionalBoxScoresV2/TraditionalBoxScoreV2Request';

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
});

export {};
