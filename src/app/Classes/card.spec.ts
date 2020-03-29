import { Card } from './card';
import { CARDTYPE } from '../Enums/cardtype.enum';

describe('Card', () => {
    it('should create an instance', () => {
        expect(new Card(CARDTYPE.NUMBER)).toBeTruthy();
    });
});
