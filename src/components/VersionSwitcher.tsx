'use client';

import { useTheme } from '../app/ThemeContext';

export function VersionSwitcher() {
  const { version, setVersion } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
      <h2 className="text-sm font-medium text-gray-700 mb-2">Select Theme:</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setVersion('standard')}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            version === 'standard'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setVersion('tropical')}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            version === 'tropical'
              ? 'bg-orange-500 text-white'
              : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
          }`}
        >
          Tropical
        </button>
        <button
          onClick={() => setVersion('boho')}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            version === 'boho'
              ? 'bg-amber-700 text-white'
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          }`}
        >
          Boho
        </button>
        <button
          onClick={() => setVersion('cyber')}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            version === 'cyber'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
          }`}
        >
          Cyber
        </button>
        <button
          onClick={() => setVersion('mystical')}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            version === 'mystical'
              ? 'bg-purple-600 text-white'
              : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
          }`}
        >
          Mystical
        </button>
      </div>
    </div>
  );
} 