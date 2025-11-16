import seedrandom from 'seedrandom';
import { TarotCard, tarotDeck } from './tarotCards';

export interface DrawnCard extends TarotCard {
  reversed: boolean;
  position?: string;
}

export function shuffleAndDraw(count: number, seed?: string): DrawnCard[] {
  const rng = seed ? seedrandom(seed) : seedrandom();

  // Create a copy of the deck
  const deck = [...tarotDeck];

  // Fisher-Yates shuffle with seeded RNG
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Draw the requested number of cards
  const drawn = deck.slice(0, count).map(card => ({
    ...card,
    reversed: rng() > 0.5, // 50% chance of being reversed
  }));

  return drawn;
}
