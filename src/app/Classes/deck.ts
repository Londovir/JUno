import { Card } from './card';
import { COLORCODE } from '../Enums/colorcode.enum';
import { CARDTYPE } from '../Enums/cardtype.enum';
import { ACTIONTYPE } from '../Enums/actiontype.enum';
import { WILDTYPE } from '../Enums/wildtype.enum';

export class Deck {
    private undealt: Card[];
    private discard: Card[];

    constructor() {
        this.undealt = [];
        this.discard = [];

        for (let c = COLORCODE.FIRST; c <= COLORCODE.LAST; ++c) {
            this.undealt.push(new Card(CARDTYPE.NUMBER, 0, c));

            for (let n = 1; n <= 9; ++n) {
                this.undealt.push(new Card(CARDTYPE.NUMBER, n, c));
                this.undealt.push(new Card(CARDTYPE.NUMBER, n, c));
            }

            for (let at = ACTIONTYPE.FIRST; at <= ACTIONTYPE.LAST; ++at) {
                this.undealt.push(new Card(CARDTYPE.ACTION, undefined, c, at));
                this.undealt.push(new Card(CARDTYPE.ACTION, undefined, c, at));
            }
        }

        for (let w = WILDTYPE.FIRST; w <= WILDTYPE.LAST; ++w) {
            for (let i = 1; i <= 4; ++i) {
                this.undealt.push(new Card(CARDTYPE.WILD, undefined, undefined, undefined, w));
            }
        }

        this.Shuffle();
    }

    AddToDiscard(card: Card) {
        if (!card) {
            throw new Error('No card to add to discard!');
        }

        this.discard.push(card);
    }

    AnyCardsLeft() {
        return !!this.undealt.length;
    }

    DealCard() {
        if (!this.undealt.length) {
            if (!this.discard.length) {
                throw new Error('No cards available!');
            }

            this.Shuffle();
        }

        const card = this.undealt.pop();

        return card as Card;
    }

    GetAllCards() {
        return {
            Undealt: this.undealt.slice(),
            Discard: this.discard.slice(),
        };
    }

    NumberOfCardsLeft() {
        return this.undealt.length;
    }

    Shuffle() {
        const cardsToShuffle = this.discard.splice(0, this.discard.length);

        cardsToShuffle.push(...this.undealt.splice(0, this.undealt.length));

        for (let i = 0; i < cardsToShuffle.length - 1; ++i) {
            const tgtIdx = i + Math.floor(Math.random() * (cardsToShuffle.length - i));
            [cardsToShuffle[i], cardsToShuffle[tgtIdx]] = [cardsToShuffle[tgtIdx], cardsToShuffle[i]];
        }

        this.undealt = cardsToShuffle;
    }
}
