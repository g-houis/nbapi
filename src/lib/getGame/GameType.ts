export const GameFinderHeaders = [
  'SEASON_ID',
  'TEAM_ID',
  'TEAM_ABBREVIATION',
  'TEAM_NAME',
  'GAME_ID',
  'GAME_DATE',
  'MATCHUP',
  'WL',
  'MIN',
  'PTS',
  'FGM',
  'FGA',
  'FG_PCT',
  'FG3M',
  'FG3A',
  'FG3_PCT',
  'FTM',
  'FTA',
  'FT_PCT',
  'OREB',
  'DREB',
  'REB',
  'AST',
  'STL',
  'BLK',
  'TOV',
  'PF',
  'PLUS_MINUS',
];

export type GameFinderRowType = (string | number)[];

export type GameFinderHeaderType =
  'SEASON_ID' |
  'TEAM_ID' |
  'TEAM_ABBREVIATION' |
  'TEAM_NAME' |
  'GAME_ID' |
  'GAME_DATE' |
  'MATCHUP' |
  'WL' |
  'MIN' |
  'PTS' |
  'FGM' |
  'FGA' |
  'FG_PCT' |
  'FG3M' |
  'FG3A' |
  'FG3_PCT' |
  'FTM' |
  'FTA' |
  'FT_PCT' |
  'OREB' |
  'DREB' |
  'REB' |
  'AST' |
  'STL' |
  'BLK' |
  'TOV' |
  'PF' |
  'PLUS_MINUS';

export type Game = {
  SEASON_ID: string,
  TEAM_ID: number,
  TEAM_ABBREVIATION: string,
  TEAM_NAME: string,
  GAME_ID: string,
  GAME_DATE: string,
  MATCHUP: string,
  WL: string,
  MIN: number,
  PTS: number,
  FGM: number,
  FGA: number,
  FG_PCT: number,
  FG3M: number,
  FG3A: number,
  FG3_PCT: number,
  FTM: number,
  FTA: number,
  FT_PCT: number,
  OREB: number,
  DREB: number,
  REB: number,
  AST: number,
  STL: number,
  BLK: number,
  TOV: number,
  PF: number,
  PLUS_MINUS: number
};
