import { formatTime } from '../utils/timeFormatter';
import type { TimeDisplayProps } from '../types';

export const TimeDisplay = ({ time, isRunning }: TimeDisplayProps) => {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-12 mb-8 shadow-2xl">
      <div className="text-center">
        <div className={`font-mono text-8xl font-bold transition-colors duration-300 ${
          isRunning 
            ? 'text-green-400 animate-pulse' 
            : time > 0 
            ? 'text-blue-400' 
            : 'text-gray-400'
        }`}>
          {formatTime(time)}
        </div>
        <div className="mt-4 text-gray-500 text-sm">
          {isRunning ? '⏱️ En cours...' : time > 0 ? '⏸️ Pause' : '⏱️ Prêt'}
        </div>
      </div>
    </div>
  );
};