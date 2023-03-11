type BoxScoreTraditionalV2Statistics = {
  minutes: string,
  fieldGoalsMade: number,
  fieldGoalsAttempted: number,
  fieldGoalsPercentage: number,
  threePointersMade: number,
  threePointersAttempted: number,
  threePointersPercentage: number,
  freeThrowsMade: number,
  freeThrowsAttempted: number,
  freeThrowsPercentage: number,
  reboundsOffensive: number,
  reboundsDefensive: number,
  reboundsTotal: number,
  assists: number,
  steals: number,
  blocks: number,
  turnovers: number,
  foulsPersonal: number,
  points: number,
  plusMinusPoints: number
};

type BoxScoreTraditionalV2Player = {
  personId: number,
  firstName: string,
  familyName: string,
  nameI: string,
  playerSlug: string,
  position: string,
  comment: string,
  jerseyNum: string,
  statistics: BoxScoreTraditionalV2Statistics
};

type BoxScoreTraditionalV2Team = {
  teamId: number,
  teamCity: string,
  teamName: string,
  teamTricode: string,
  teamSlug: string,
  players: BoxScoreTraditionalV2Player[]
};

export type BoxScoreTraditionalV2 = {
  boxScoreTraditional: {
    gameId: string,
    awayTeamId: number,
    homeTeamId: number,
    homeTeam: BoxScoreTraditionalV2Team,
    awayTeam: BoxScoreTraditionalV2Team
  }
};
