import {name} from "moment-timezone";

export class PlayerData {
    id: number;
    firstName: string;
    lastName: string;
    name: string;

    constructor(id: number, firstName: string, lastName: string, name: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
    }
}