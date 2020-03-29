import { Component } from '@angular/core';
import { PLAYERS } from './Enums/players.enum';
import { Card } from './Classes/card';
import { Deck } from './Classes/deck';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    CurrentPlayer: PLAYERS;
    Deck: Deck;
    Direction: number;
    LastCard: Card;
}
