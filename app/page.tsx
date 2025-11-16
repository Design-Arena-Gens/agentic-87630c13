'use client';

import { useState } from 'react';
import TarotSpread from './components/TarotSpread';
import SpreadSelector from './components/SpreadSelector';
import SeedInput from './components/SeedInput';
import ThemeToggle from './components/ThemeToggle';

export type SpreadType = 'single' | 'cross' | 'linear' | 'grand';

export default function Home() {
  const [selectedSpread, setSelectedSpread] = useState<SpreadType>('single');
  const [seed, setSeed] = useState<string>('');
  const [startReading, setStartReading] = useState(false);

  const handleStartReading = () => {
    setStartReading(true);
  };

  const handleReset = () => {
    setStartReading(false);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <ThemeToggle />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tarot de Marseille
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 dark:text-purple-300 font-light">
            Découvrez les mystères de votre destinée
          </p>
        </header>

        {!startReading ? (
          <div className="space-y-8 animate-slide-in">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto mystic-glow">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Choisissez votre tirage
              </h2>
              <SpreadSelector
                selectedSpread={selectedSpread}
                onSelectSpread={setSelectedSpread}
              />

              <div className="mt-8">
                <SeedInput seed={seed} onSeedChange={setSeed} />
              </div>

              <button
                onClick={handleStartReading}
                className="mt-8 w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 mystic-glow"
              >
                Commencer le tirage
              </button>
            </div>

            <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto text-center text-purple-200 dark:text-purple-300">
              <p className="text-sm leading-relaxed">
                Concentrez-vous sur votre question avant de commencer.
                Les cartes vous révéleront leur sagesse ancestrale.
              </p>
            </div>
          </div>
        ) : (
          <TarotSpread
            spreadType={selectedSpread}
            seed={seed}
            onReset={handleReset}
          />
        )}
      </div>

      <footer className="text-center mt-16 text-purple-300 dark:text-purple-400 text-sm">
        <p>✨ Prêt pour l&apos;intégration IA ✨</p>
      </footer>
    </main>
  );
}
