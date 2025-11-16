'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SpreadType } from '../page';
import { shuffleAndDraw, DrawnCard } from '../lib/shuffleDeck';
import TarotCard from './TarotCard';

interface TarotSpreadProps {
  spreadType: SpreadType;
  seed: string;
  onReset: () => void;
}

const spreadConfigs = {
  single: {
    count: 1,
    positions: ['Réponse'],
    layout: 'grid-cols-1 max-w-xs',
  },
  linear: {
    count: 3,
    positions: ['Passé', 'Présent', 'Futur'],
    layout: 'grid-cols-1 md:grid-cols-3 max-w-4xl',
  },
  cross: {
    count: 5,
    positions: ['Situation', 'Obstacle', 'Passé', 'Futur', 'Résultat'],
    layout: 'grid-cols-1 md:grid-cols-3 max-w-5xl',
  },
  grand: {
    count: 10,
    positions: [
      'Vous',
      'Influences',
      'Objectifs',
      'Fondations',
      'Passé récent',
      'Futur proche',
      'Attitude',
      'Environnement',
      'Espoirs/Peurs',
      'Résultat final',
    ],
    layout: 'grid-cols-2 md:grid-cols-5 max-w-7xl',
  },
};

export default function TarotSpread({ spreadType, seed, onReset }: TarotSpreadProps) {
  const [cards, setCards] = useState<DrawnCard[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());
  const [isShuffling, setIsShuffling] = useState(true);

  const config = spreadConfigs[spreadType];

  useEffect(() => {
    // Simulate shuffling
    const timer = setTimeout(() => {
      const drawnCards = shuffleAndDraw(config.count, seed);
      setCards(drawnCards);
      setIsShuffling(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [spreadType, seed, config.count]);

  const handleRevealCard = (index: number) => {
    setRevealedCards(prev => new Set(prev).add(index));
  };

  const allRevealed = revealedCards.size === cards.length;

  const getCardPosition = (index: number) => {
    if (spreadType === 'cross') {
      // Special layout for cross spread
      const positions = [
        'md:col-start-2 md:row-start-1', // Situation (center top)
        'md:col-start-2 md:row-start-2', // Obstacle (center)
        'md:col-start-1 md:row-start-2', // Passé (left)
        'md:col-start-3 md:row-start-2', // Futur (right)
        'md:col-start-2 md:row-start-3', // Résultat (center bottom)
      ];
      return positions[index] || '';
    }
    return '';
  };

  if (isShuffling) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="text-6xl mb-6"
        >
          🌙
        </motion.div>
        <p className="text-2xl text-purple-200">Mélange des cartes...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          {spreadType === 'single' && 'Tirage Simple'}
          {spreadType === 'linear' && 'Tirage Linéaire'}
          {spreadType === 'cross' && 'Tirage en Croix'}
          {spreadType === 'grand' && 'Grand Tirage'}
        </h2>
        <p className="text-purple-300">
          {allRevealed
            ? 'Toutes les cartes sont révélées'
            : 'Cliquez sur les cartes pour les révéler'}
        </p>
      </div>

      <div className={`grid ${config.layout} gap-6 mx-auto justify-items-center`}>
        {cards.map((card, index) => (
          <div key={index} className={`w-full max-w-xs ${getCardPosition(index)}`}>
            <TarotCard
              card={card}
              index={index}
              isRevealed={revealedCards.has(index)}
              onReveal={() => handleRevealCard(index)}
              position={config.positions[index]}
            />
          </div>
        ))}
      </div>

      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto text-center"
        >
          <p className="text-purple-200 mb-4">
            ✨ Prêt pour l&apos;interprétation IA ✨
          </p>
          <p className="text-sm text-purple-300 mb-6">
            Cette zone accueillera prochainement l&apos;analyse complète du tirage par intelligence artificielle
          </p>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Nouveau tirage
          </button>
        </motion.div>
      )}
    </div>
  );
}
