import { Card } from './card';
import { PLAYERS } from '../Enums/players.enum';

export class Player {
    Hand: Card[];
    IsHuman: boolean;
    LastCardPlayed: Card | undefined;
    PlayerNumber: PLAYERS;

    constructor(isHuman: boolean, playerNumber: PLAYERS) {
        this.Hand = [];
        this.IsHuman = isHuman;
        this.LastCardPlayed = undefined;
        this.PlayerNumber = playerNumber;
    }
}
