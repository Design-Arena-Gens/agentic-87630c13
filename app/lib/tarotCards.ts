export interface TarotCard {
  id: number;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'pentacles' | 'swords' | 'wands';
  keywords: string[];
}

export const tarotDeck: TarotCard[] = [
  // Major Arcana
  { id: 0, name: 'Le Mat', arcana: 'major', keywords: ['nouveau départ', 'spontanéité', 'liberté'] },
  { id: 1, name: 'Le Bateleur', arcana: 'major', keywords: ['création', 'habileté', 'manifestation'] },
  { id: 2, name: 'La Papesse', arcana: 'major', keywords: ['intuition', 'mystère', 'sagesse'] },
  { id: 3, name: 'L\'Impératrice', arcana: 'major', keywords: ['abondance', 'fertilité', 'nature'] },
  { id: 4, name: 'L\'Empereur', arcana: 'major', keywords: ['autorité', 'structure', 'stabilité'] },
  { id: 5, name: 'Le Pape', arcana: 'major', keywords: ['tradition', 'spiritualité', 'guidance'] },
  { id: 6, name: 'L\'Amoureux', arcana: 'major', keywords: ['amour', 'choix', 'union'] },
  { id: 7, name: 'Le Chariot', arcana: 'major', keywords: ['victoire', 'détermination', 'contrôle'] },
  { id: 8, name: 'La Justice', arcana: 'major', keywords: ['équilibre', 'vérité', 'karma'] },
  { id: 9, name: 'L\'Hermite', arcana: 'major', keywords: ['introspection', 'sagesse', 'solitude'] },
  { id: 10, name: 'La Roue de Fortune', arcana: 'major', keywords: ['destin', 'cycles', 'changement'] },
  { id: 11, name: 'La Force', arcana: 'major', keywords: ['courage', 'patience', 'compassion'] },
  { id: 12, name: 'Le Pendu', arcana: 'major', keywords: ['sacrifice', 'lâcher-prise', 'perspective'] },
  { id: 13, name: 'L\'Arcane sans nom', arcana: 'major', keywords: ['transformation', 'fin', 'renouveau'] },
  { id: 14, name: 'Tempérance', arcana: 'major', keywords: ['équilibre', 'modération', 'harmonie'] },
  { id: 15, name: 'Le Diable', arcana: 'major', keywords: ['attachement', 'tentation', 'matérialisme'] },
  { id: 16, name: 'La Maison Dieu', arcana: 'major', keywords: ['révélation', 'changement brutal', 'libération'] },
  { id: 17, name: 'L\'Étoile', arcana: 'major', keywords: ['espoir', 'inspiration', 'sérénité'] },
  { id: 18, name: 'La Lune', arcana: 'major', keywords: ['illusion', 'intuition', 'inconscient'] },
  { id: 19, name: 'Le Soleil', arcana: 'major', keywords: ['joie', 'succès', 'vitalité'] },
  { id: 20, name: 'Le Jugement', arcana: 'major', keywords: ['renaissance', 'pardon', 'révélation'] },
  { id: 21, name: 'Le Monde', arcana: 'major', keywords: ['accomplissement', 'unité', 'voyage'] },

  // Minor Arcana - Coupes (Cups)
  { id: 22, name: 'As de Coupe', arcana: 'minor', suit: 'cups', keywords: ['amour nouveau', 'émotions', 'créativité'] },
  { id: 23, name: 'Deux de Coupe', arcana: 'minor', suit: 'cups', keywords: ['partenariat', 'harmonie', 'romance'] },
  { id: 24, name: 'Trois de Coupe', arcana: 'minor', suit: 'cups', keywords: ['célébration', 'amitié', 'communauté'] },
  { id: 25, name: 'Quatre de Coupe', arcana: 'minor', suit: 'cups', keywords: ['contemplation', 'apathie', 'réévaluation'] },
  { id: 26, name: 'Cinq de Coupe', arcana: 'minor', suit: 'cups', keywords: ['perte', 'regret', 'déception'] },
  { id: 27, name: 'Six de Coupe', arcana: 'minor', suit: 'cups', keywords: ['nostalgie', 'innocence', 'générosité'] },
  { id: 28, name: 'Sept de Coupe', arcana: 'minor', suit: 'cups', keywords: ['choix', 'illusion', 'imagination'] },
  { id: 29, name: 'Huit de Coupe', arcana: 'minor', suit: 'cups', keywords: ['abandon', 'transition', 'recherche'] },
  { id: 30, name: 'Neuf de Coupe', arcana: 'minor', suit: 'cups', keywords: ['satisfaction', 'bonheur', 'désirs'] },
  { id: 31, name: 'Dix de Coupe', arcana: 'minor', suit: 'cups', keywords: ['harmonie familiale', 'bonheur', 'unité'] },
  { id: 32, name: 'Valet de Coupe', arcana: 'minor', suit: 'cups', keywords: ['message', 'créativité', 'sensibilité'] },
  { id: 33, name: 'Cavalier de Coupe', arcana: 'minor', suit: 'cups', keywords: ['romance', 'charme', 'idéalisme'] },
  { id: 34, name: 'Reine de Coupe', arcana: 'minor', suit: 'cups', keywords: ['compassion', 'intuition', 'empathie'] },
  { id: 35, name: 'Roi de Coupe', arcana: 'minor', suit: 'cups', keywords: ['équilibre émotionnel', 'diplomatie', 'sagesse'] },

  // Minor Arcana - Deniers (Pentacles)
  { id: 36, name: 'As de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['opportunité', 'prospérité', 'manifestation'] },
  { id: 37, name: 'Deux de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['équilibre', 'adaptation', 'priorités'] },
  { id: 38, name: 'Trois de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['travail d\'équipe', 'compétence', 'collaboration'] },
  { id: 39, name: 'Quatre de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['sécurité', 'contrôle', 'possession'] },
  { id: 40, name: 'Cinq de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['difficulté financière', 'isolement', 'adversité'] },
  { id: 41, name: 'Six de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['générosité', 'charité', 'partage'] },
  { id: 42, name: 'Sept de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['patience', 'évaluation', 'récolte'] },
  { id: 43, name: 'Huit de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['maîtrise', 'apprentissage', 'diligence'] },
  { id: 44, name: 'Neuf de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['abondance', 'luxe', 'indépendance'] },
  { id: 45, name: 'Dix de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['richesse', 'héritage', 'famille'] },
  { id: 46, name: 'Valet de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['opportunité', 'étude', 'ambition'] },
  { id: 47, name: 'Cavalier de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['responsabilité', 'travail', 'routine'] },
  { id: 48, name: 'Reine de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['praticité', 'confort', 'sécurité'] },
  { id: 49, name: 'Roi de Denier', arcana: 'minor', suit: 'pentacles', keywords: ['abondance', 'discipline', 'succès'] },

  // Minor Arcana - Épées (Swords)
  { id: 50, name: 'As d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['clarté', 'vérité', 'percée'] },
  { id: 51, name: 'Deux d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['indécision', 'impasse', 'trêve'] },
  { id: 52, name: 'Trois d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['chagrin', 'trahison', 'douleur'] },
  { id: 53, name: 'Quatre d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['repos', 'récupération', 'contemplation'] },
  { id: 54, name: 'Cinq d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['conflit', 'défaite', 'trahison'] },
  { id: 55, name: 'Six d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['transition', 'voyage', 'guérison'] },
  { id: 56, name: 'Sept d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['ruse', 'stratégie', 'évitement'] },
  { id: 57, name: 'Huit d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['restriction', 'confusion', 'impuissance'] },
  { id: 58, name: 'Neuf d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['anxiété', 'cauchemar', 'tourment'] },
  { id: 59, name: 'Dix d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['fin', 'trahison', 'fond'] },
  { id: 60, name: 'Valet d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['curiosité', 'vigilance', 'esprit vif'] },
  { id: 61, name: 'Cavalier d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['action', 'impulsivité', 'défense'] },
  { id: 62, name: 'Reine d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['indépendance', 'perception', 'complexité'] },
  { id: 63, name: 'Roi d\'Épée', arcana: 'minor', suit: 'swords', keywords: ['autorité intellectuelle', 'vérité', 'jugement'] },

  // Minor Arcana - Bâtons (Wands)
  { id: 64, name: 'As de Bâton', arcana: 'minor', suit: 'wands', keywords: ['inspiration', 'potentiel', 'création'] },
  { id: 65, name: 'Deux de Bâton', arcana: 'minor', suit: 'wands', keywords: ['planification', 'décisions', 'découverte'] },
  { id: 66, name: 'Trois de Bâton', arcana: 'minor', suit: 'wands', keywords: ['expansion', 'vision', 'opportunité'] },
  { id: 67, name: 'Quatre de Bâton', arcana: 'minor', suit: 'wands', keywords: ['célébration', 'harmonie', 'stabilité'] },
  { id: 68, name: 'Cinq de Bâton', arcana: 'minor', suit: 'wands', keywords: ['conflit', 'compétition', 'tension'] },
  { id: 69, name: 'Six de Bâton', arcana: 'minor', suit: 'wands', keywords: ['victoire', 'reconnaissance', 'succès'] },
  { id: 70, name: 'Sept de Bâton', arcana: 'minor', suit: 'wands', keywords: ['défi', 'persévérance', 'défense'] },
  { id: 71, name: 'Huit de Bâton', arcana: 'minor', suit: 'wands', keywords: ['mouvement', 'rapidité', 'action'] },
  { id: 72, name: 'Neuf de Bâton', arcana: 'minor', suit: 'wands', keywords: ['résilience', 'courage', 'persistance'] },
  { id: 73, name: 'Dix de Bâton', arcana: 'minor', suit: 'wands', keywords: ['fardeau', 'responsabilité', 'stress'] },
  { id: 74, name: 'Valet de Bâton', arcana: 'minor', suit: 'wands', keywords: ['enthousiasme', 'exploration', 'découverte'] },
  { id: 75, name: 'Cavalier de Bâton', arcana: 'minor', suit: 'wands', keywords: ['énergie', 'passion', 'aventure'] },
  { id: 76, name: 'Reine de Bâton', arcana: 'minor', suit: 'wands', keywords: ['confiance', 'détermination', 'charisme'] },
  { id: 77, name: 'Roi de Bâton', arcana: 'minor', suit: 'wands', keywords: ['leadership', 'vision', 'entrepreneur'] },
];
