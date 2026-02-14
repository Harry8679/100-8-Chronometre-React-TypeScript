import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
  isRunning: boolean;
}

export const useKeyboardShortcuts = ({
  onStart,
  onStop,
  onReset,
  onLap,
  isRunning,
}: KeyboardShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case ' ':
          e.preventDefault();
          if (isRunning) {
            onStop();
          } else {
            onStart();
          }
          break;
        case 'r':
          e.preventDefault();
          onReset();
          break;
        case 'l':
          e.preventDefault();
          if (isRunning) {
            onLap();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart, onStop, onReset, onLap, isRunning]);
};