import {name} from "moment-timezone";

export class SeasonPlayerData {
    id: number;
    playerId: number;
    firstName: string;
    lastName: string;
    name: string;

    constructor(id: number, playerId: number, firstName: string, lastName: string, name: string) {
        this.id = id;
        this.playerId = playerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
    }
}