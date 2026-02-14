import { formatLapTime } from '../utils/timeFormatter';
import { findFastestLap, findSlowestLap } from '../utils/timeFormatter';
import type { LapsListProps } from '../types';

export const LapsList = ({ laps, onClearLaps }: LapsListProps) => {
  if (laps.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          🏁 Tours enregistrés
        </h3>
        <div className="text-center py-8 text-gray-400">
          <div className="text-4xl mb-2">⏱️</div>
          <p className="text-sm">Aucun tour enregistré</p>
        </div>
      </div>
    );
  }

  const fastestLap = findFastestLap(laps);
  const slowestLap = findSlowestLap(laps);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          🏁 Tours enregistrés ({laps.length})
        </h3>
        <button
          onClick={onClearLaps}
          className="text-xs text-red-600 hover:text-red-700 hover:underline"
        >
          Effacer
        </button>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {[...laps].reverse().map((lap) => {
          const isFastest = fastestLap?.id === lap.id && laps.length > 1;
          const isSlowest = slowestLap?.id === lap.id && laps.length > 1;

          return (
            <div
              key={lap.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                isFastest
                  ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                  : isSlowest
                  ? 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  isFastest
                    ? 'bg-green-500 text-white'
                    : isSlowest
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}>
                  {lap.lapNumber}
                </div>
                <div>
                  <div className={`font-mono font-bold ${
                    isFastest
                      ? 'text-green-700 dark:text-green-400'
                      : isSlowest
                      ? 'text-red-700 dark:text-red-400'
                      : 'text-gray-800 dark:text-white'
                  }`}>
                    {formatLapTime(lap.lapTime)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Total: {formatLapTime(lap.totalTime)}
                  </div>
                </div>
              </div>
              {isFastest && (
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  ⚡ Plus rapide
                </span>
              )}
              {isSlowest && (
                <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                  🐌 Plus lent
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};