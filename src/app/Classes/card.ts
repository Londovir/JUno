import { CARDTYPE } from '../Enums/cardtype.enum';
import { COLORCODE } from '../Enums/colorcode.enum';
import { ACTIONTYPE } from '../Enums/actiontype.enum';
import { WILDTYPE } from '../Enums/wildtype.enum';

export class Card {
    CardType: CARDTYPE;
    Number?: number;
    Color?: COLORCODE;
    ActionType?: ACTIONTYPE;
    WildType?: WILDTYPE;
}
