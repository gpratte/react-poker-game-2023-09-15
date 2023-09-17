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
}