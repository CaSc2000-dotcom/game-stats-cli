export class LeaderboardEntry {
    readonly _username: string;
    readonly _score: number;

    constructor(username: string = '', score: number = 0) {
        this._username = username;
        this._score = score;
    }

    get username(): string {
        return this._username;
    }
    get score(): number {
        return this._score;
    }
}