import {SeasonPlayerData} from "./SeasonPlayerData";

export class SeasonData {
    id: number;
    players: Array<SeasonPlayerData>;

    constructor(id: number, players: Array<SeasonPlayerData>) {
        this.id = id;
        this.players = players;
    }
}