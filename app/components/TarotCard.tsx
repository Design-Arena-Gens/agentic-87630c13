'use client';

import { motion } from 'framer-motion';
import { DrawnCard } from '../lib/shuffleDeck';
import { useState } from 'react';

interface TarotCardProps {
  card: DrawnCard;
  index: number;
  isRevealed: boolean;
  onReveal: () => void;
  position?: string;
}

export default function TarotCard({ card, index, isRevealed, onReveal, position }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isRevealed) {
      onReveal();
      setIsFlipped(true);
    }
  };

  const getSuitColor = () => {
    switch (card.suit) {
      case 'cups':
        return 'from-blue-500 to-cyan-500';
      case 'pentacles':
        return 'from-yellow-500 to-amber-500';
      case 'swords':
        return 'from-gray-400 to-slate-500';
      case 'wands':
        return 'from-red-500 to-orange-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getSuitEmoji = () => {
    switch (card.suit) {
      case 'cups':
        return '🏆';
      case 'pentacles':
        return '⭐';
      case 'swords':
        return '⚔️';
      case 'wands':
        return '🔥';
      default:
        return '✨';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-80 cursor-pointer preserve-3d"
        onClick={handleClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full rounded-xl card-back card-shadow card-hover flex items-center justify-center border-4 border-gold-400/50">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-pulse">🌙</div>
              <div className="text-sm text-white/80 font-semibold">Cliquez pour révéler</div>
            </div>
          </div>
        </div>

        {/* Card Front */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${card.reversed ? 'rotate-180' : ''}`}>
          <div className={`w-full h-full rounded-xl bg-gradient-to-br ${getSuitColor()} card-shadow p-6 flex flex-col justify-between border-4 border-white/20`}>
            <div className="text-center">
              <div className="text-4xl mb-3">{getSuitEmoji()}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
              {position && (
                <p className="text-xs text-white/80 mb-3 font-semibold uppercase tracking-wider">
                  {position}
                </p>
              )}
              {card.reversed && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white mb-3">
                  Renversée
                </span>
              )}
            </div>

            <div className="space-y-2">
              <div className="text-xs text-white/90 font-semibold uppercase tracking-wide">
                Mots-clés
              </div>
              <div className="flex flex-wrap gap-2">
                {card.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs text-white"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                {card.arcana === 'major' ? 'Arcane Majeur' : 'Arcane Mineur'}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
