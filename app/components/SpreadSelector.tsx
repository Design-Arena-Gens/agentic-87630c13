'use client';

import { SpreadType } from '../page';

interface SpreadSelectorProps {
  selectedSpread: SpreadType;
  onSelectSpread: (spread: SpreadType) => void;
}

const spreads = [
  {
    type: 'single' as SpreadType,
    name: 'Tirage Simple',
    description: 'Une carte pour une réponse directe',
    cards: 1,
  },
  {
    type: 'linear' as SpreadType,
    name: 'Tirage Linéaire',
    description: 'Passé, Présent, Futur',
    cards: 3,
  },
  {
    type: 'cross' as SpreadType,
    name: 'Tirage en Croix',
    description: 'Analyse approfondie de la situation',
    cards: 5,
  },
  {
    type: 'grand' as SpreadType,
    name: 'Grand Tirage',
    description: 'Vision complète et détaillée',
    cards: 10,
  },
];

export default function SpreadSelector({ selectedSpread, onSelectSpread }: SpreadSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {spreads.map((spread) => (
        <button
          key={spread.type}
          onClick={() => onSelectSpread(spread.type)}
          className={`p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
            selectedSpread === spread.type
              ? 'bg-gradient-to-br from-purple-600 to-pink-600 mystic-glow'
              : 'glass-effect hover:glass-effect'
          }`}
        >
          <h3 className="text-xl font-semibold mb-2">{spread.name}</h3>
          <p className="text-sm text-purple-200 dark:text-purple-300 mb-3">
            {spread.description}
          </p>
          <div className="flex items-center text-xs text-purple-300 dark:text-purple-400">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            {spread.cards} carte{spread.cards > 1 ? 's' : ''}
          </div>
        </button>
      ))}
    </div>
  );
}
