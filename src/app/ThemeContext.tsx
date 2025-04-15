'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeVersion = 'standard' | 'tropical' | 'boho' | 'cyber' | 'mystical';

interface ThemeContextType {
  version: ThemeVersion;
  setVersion: (version: ThemeVersion) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState<ThemeVersion>('standard');

  return (
    <ThemeContext.Provider value={{ version, setVersion }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 