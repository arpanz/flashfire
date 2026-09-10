'use client';

import React from 'react';
import {
  FileSpreadsheet,
  Network,
  ShieldCheck,
  Cloud,
  Code2,
  Globe,
  Target,
  Layers,
} from 'lucide-react';

interface DeckIconProps {
  deckId: string;
  className?: string;
}

export const DeckIcon: React.FC<DeckIconProps> = ({ deckId, className = 'w-5 h-5' }) => {
  if (deckId.startsWith('deck-mistakes') || deckId === 'deck-review') {
    return <Target className={className} />;
  }

  switch (deckId) {
    case 'deck-ms-office':
      return <FileSpreadsheet className={className} />;
    case 'deck-networking':
      return <Network className={className} />;
    case 'deck-security':
      return <ShieldCheck className={className} />;
    case 'deck-cloud':
      return <Cloud className={className} />;
    case 'deck-pseudocode':
      return <Code2 className={className} />;
    case 'deck-web':
      return <Globe className={className} />;
    default:
      return <Layers className={className} />;
  }
};
