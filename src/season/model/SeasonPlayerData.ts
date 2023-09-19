import _, {entries} from "lodash";

export class SeasonPlayerData {
    id: number;
    playerId: number;
    seasonId: number;
    name: string;
    entries: number;
    points: number;
    place: number;
    forfeit: boolean;

    constructor(id: number, playerId: number, seasonId: number, name: string,
                entries: number, points: number, place: number, forfeit: boolean) {
        this.id = id;
        this.playerId = playerId;
        this.seasonId = seasonId;
        this.name = name;
        this.entries = entries;
        this.points = points;
        this.place = place;
        this.forfeit = forfeit;
    }

    public static getSeasonPlayers(players: Array<Object>): Array<SeasonPlayerData> {
        if (!players) {
            return [];
        }
        const seasonPlayers: Array<SeasonPlayerData> = [];
        players.forEach(p => {
            const id: number = _.get(p, 'id', 0);
            const playerId: number = _.get(p, 'playerId', 0);
            const seasonId: number = _.get(p, 'seasonId', 0);
            const name: string = _.get(p, 'name', '');
            const entries: number = _.get(p, 'entries', 0);
            const points: number = _.get(p, 'points', 0);
            const forfeit: boolean = _.get(p, 'forfeit', false);
            const place: number | undefined = _.get(p, 'place', 0);

            const seasonPlayer: SeasonPlayerData =
              new SeasonPlayerData(id, playerId, seasonId, name,
              entries, points, place, forfeit);
            seasonPlayers.push(seasonPlayer);
        })
        return seasonPlayers;
    }
}