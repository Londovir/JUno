import { CARDTYPE } from '../Enums/cardtype.enum';
import { COLORCODE } from '../Enums/colorcode.enum';
import { ACTIONTYPE } from '../Enums/actiontype.enum';
import { WILDTYPE } from '../Enums/wildtype.enum';

export class Card {
    private cardType: CARDTYPE;
    private cardNumber?: number;
    private color?: COLORCODE;
    private actionType?: ACTIONTYPE;
    private wildType?: WILDTYPE;

    get CardType() {
        return this.cardType;
    }
    get Number() {
        return this.cardNumber;
    }
    get Color() {
        return this.color;
    }
    get ActionType() {
        return this.actionType;
    }
    get WildType() {
        return this.wildType;
    }

    constructor(CardType: CARDTYPE, Num?: number, Color?: COLORCODE, ActionType?: ACTIONTYPE, WildType?: WILDTYPE) {
        this.cardType = CardType;
        this.cardNumber = Num;
        this.color = Color;
        this.actionType = ActionType;
        this.wildType = WildType;
    }
}
