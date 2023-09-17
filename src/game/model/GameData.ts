import {GamePlayerData} from "./GamePlayerData";

export interface GamePayout {
  id: number;
  gameId: number;
  place: number;
  amount: number;
  chopAmount: number;
}

export class GameData {
  id: number;
  seasonId: number;
  date: string;
  hostName?: string;
  numPaidPlayers: number;
  players: Array<GamePlayerData>;
  totalCollected: number;
  totalCombinedTocCalculated: number;
  kittyCalculated: number;
  prizePotCalculated: number;
  payouts?: Array<GamePayout>;


  constructor(id: number,
              seasonId: number,
              date: string,
              numPaidPlayers: number,
              players: Array<GamePlayerData>,
              totalCollected: number,
              totalCombinedTocCalculated: number,
              kittyCalculated: number,
              prizePotCalculated: number) {
    this.id = id;
    this.seasonId = seasonId;
    this.date = date;
    this.numPaidPlayers = numPaidPlayers;
    this.players = players;
    this.totalCollected = totalCollected;
    this.totalCombinedTocCalculated = totalCombinedTocCalculated;
    this.kittyCalculated = kittyCalculated;
    this.prizePotCalculated = prizePotCalculated;
  }
}