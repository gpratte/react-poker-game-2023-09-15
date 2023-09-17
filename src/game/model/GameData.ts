import {GamePlayerData} from "./GamePlayerData";

export class GameData {
    id: number;
    seasonId: number;
    numPaidPlayers: number;
    players: Array<GamePlayerData>;

    constructor(id: number,
                seasonId: number,
                numPaidPlayers: number,
                players: Array<GamePlayerData>) {
        this.id = id;
        this.seasonId = seasonId;
        this.numPaidPlayers = numPaidPlayers;
        this.players = players;
    }
}