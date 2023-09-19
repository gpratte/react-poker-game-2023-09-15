import _ from "lodash";

export class GamePlayerData {
  id: number;
  playerId: number;
  name: string;
  boughtIn: boolean;
  rebought: boolean;
  annualTocParticipant: boolean;
  quarterlyTocParticipant: boolean;
  roundUpdates: boolean;
  chop?: number;
  tocPoints?: number;
  tocChopPoints?: number;
  qtocPoints?: number;
  qtocChopPoints?: number;
  place?: number;

  constructor(id: number, playerId: number, name: string,
              boughtIn: boolean, rebought: boolean,
              annualTocParticipant: boolean, quarterlyTocParticipant: boolean,
              roundUpdates: boolean) {
    this.id = id;
    this.playerId = playerId;
    this.name = name;
    this.boughtIn = boughtIn;
    this.rebought = rebought;
    this.annualTocParticipant = annualTocParticipant;
    this.quarterlyTocParticipant = quarterlyTocParticipant;
    this.roundUpdates = roundUpdates;
  }

  public static getGamePlayers(players: Array<Object>): Array<GamePlayerData> {
    if (!players) {
      return [];
    }

    const gamePlayers: Array<GamePlayerData> = [];
    players.forEach(p => {
      const id: number = _.get(p, 'id', 0);
      const playerId: number = _.get(p, 'id', 0);
      const name: string = _.get(p, 'id', '');
      const boughtIn: boolean = _.get(p, 'id', false);
      const rebought: boolean = _.get(p, 'id', false);
      const annualTocParticipant: boolean = _.get(p, 'id', false);
      const quarterlyTocParticipant: boolean = _.get(p, 'id', false);
      const roundUpdates: boolean = _.get(p, 'id', false);
      const chop: number | undefined = _.get(p, 'id');
      const tocPoints: number | undefined = _.get(p, 'id');
      const tocChopPoints: number | undefined = _.get(p, 'id');
      const qtocPoints: number | undefined = _.get(p, 'id');
      const qtocChopPoints: number | undefined = _.get(p, 'id');
      const place: number | undefined = _.get(p, 'id');

      const gamePlayer: GamePlayerData = new GamePlayerData(id, playerId, name, boughtIn,
        rebought, annualTocParticipant, quarterlyTocParticipant, roundUpdates);
      gamePlayer.chop = chop;
      gamePlayer.tocPoints = tocPoints;
      gamePlayer.tocChopPoints = tocChopPoints;
      gamePlayer.qtocPoints = qtocPoints;
      gamePlayer.qtocChopPoints = qtocChopPoints;
      gamePlayer.place = place;

      gamePlayers.push(gamePlayer);
    })
    return gamePlayers;
  }
}