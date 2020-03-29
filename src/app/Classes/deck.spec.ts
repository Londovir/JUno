import { Deck } from './deck';

describe('Deck', () => {
    it('should create an instance', () => {
        expect(new Deck()).toBeTruthy();
    });

    it('should have 108 cards on creation', () => {
        const d = new Deck();
        expect(d.NumberOfCardsLeft()).toEqual(108);
    });

    it('should have 107 cards after dealing a card', () => {
        const d = new Deck();
        d.DealCard();
        expect(d.NumberOfCardsLeft()).toEqual(107);
    });

    it('should accept a card for discard', () => {
        const d = new Deck();
        const c = d.DealCard();
        d.AddToDiscard(c);
        const cs = d.GetAllCards();

        expect(cs.Discard.length).toEqual(1);
    });

    it('should reshuffle discard to continue dealing', () => {
        const d = new Deck();
        for (let i = 1; i <= 109; ++i) {
            const c = d.DealCard();
            d.AddToDiscard(c);
        }
        expect(d.NumberOfCardsLeft()).toEqual(107);
    });
});
