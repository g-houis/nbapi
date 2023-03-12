type TraditionalBoxScoreStatistics = {
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

type TraditionalBoxScorePlayer = {
  personId: number,
  firstName: string,
  familyName: string,
  nameI: string,
  playerSlug: string,
  position: string,
  comment: string,
  jerseyNum: string,
  statistics: TraditionalBoxScoreStatistics
};

type TraditionalBoxScoreTeam = {
  teamId: number,
  teamCity: string,
  teamName: string,
  teamTricode: string,
  teamSlug: string,
  players: TraditionalBoxScorePlayer[]
};

export type TraditionalBoxScore = {
  boxScoreTraditional: {
    gameId: string,
    awayTeamId: number,
    homeTeamId: number,
    homeTeam: TraditionalBoxScoreTeam,
    awayTeam: TraditionalBoxScoreTeam
  }
};
