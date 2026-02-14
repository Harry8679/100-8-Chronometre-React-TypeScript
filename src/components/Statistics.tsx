import { formatLapTime, calculateAverageLap, findFastestLap, findSlowestLap } from '../utils/timeFormatter';
import type { StatisticsProps } from '../types';

export const Statistics = ({ laps, totalTime }: StatisticsProps) => {
  if (laps.length === 0) {
    return null;
  }

  const averageLap = calculateAverageLap(laps);
  const fastestLap = findFastestLap(laps);
  const slowestLap = findSlowestLap(laps);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-lg font-bold mb-4">📊 Statistiques</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total */}
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold font-mono">
            {laps.length}
          </div>
          <div className="text-xs opacity-90 mt-1">Tours</div>
        </div>

        {/* Average */}
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold font-mono">
            {formatLapTime(averageLap)}
          </div>
          <div className="text-xs opacity-90 mt-1">Moyenne</div>
        </div>

        {/* Fastest */}
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold font-mono">
            {fastestLap ? formatLapTime(fastestLap.lapTime) : '--'}
          </div>
          <div className="text-xs opacity-90 mt-1">⚡ Plus rapide</div>
        </div>

        {/* Slowest */}
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold font-mono">
            {slowestLap ? formatLapTime(slowestLap.lapTime) : '--'}
          </div>
          <div className="text-xs opacity-90 mt-1">🐌 Plus lent</div>
        </div>
      </div>
    </div>
  );
};