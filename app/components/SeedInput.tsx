'use client';

interface SeedInputProps {
  seed: string;
  onSeedChange: (seed: string) => void;
}

export default function SeedInput({ seed, onSeedChange }: SeedInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-purple-200 dark:text-purple-300">
        Graine personnalisée (optionnel)
      </label>
      <input
        type="text"
        value={seed}
        onChange={(e) => onSeedChange(e.target.value)}
        placeholder="Entrez une graine pour reproductibilité..."
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
      <p className="mt-2 text-xs text-purple-300/70">
        Utilisez la même graine pour obtenir le même tirage à chaque fois
      </p>
    </div>
  );
}
