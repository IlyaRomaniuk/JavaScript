let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const deck = []
for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'heart' || suit === 'diamond') {
            color = 'red';
        } else {
            color = 'black';
        }
        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}
console.log(deck);

let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

let sixes = deck.filter(card => card.value === 6);
console.log(sixes);

let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

let diamondCards = deck.filter(card => card.cardSuit === 'diamond')
console.log(diamondCards);

let highClubs = deck.filter(card => card.cardSuit === 'clubs' &&
    ['9','10','jack','queen','king','ace'].includes(card.value)
);
console.log(highClubs);

let sortedDeck = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spade.push(card);
    }
    if (card.cardSuit === 'diamond') {
        accumulator.diamond.push(card);
    }
    if (card.cardSuit === 'heart') {
        accumulator.heart.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});
console.log(sortedDeck);

