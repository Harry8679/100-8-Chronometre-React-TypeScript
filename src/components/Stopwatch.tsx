import { useStopwatch } from '../hooks/useStopwatch';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { TimeDisplay } from './TimeDisplay';
import { Controls } from './Controls';
import { LapsList } from './LapsList';
import { Statistics } from './Statistics';
import { SessionHistory } from './SessionHistory';

export const Stopwatch = () => {
  const {
    time,
    isRunning,
    laps,
    sessions,
    start,
    stop,
    reset,
    recordLap,
    clearLaps,
    clearHistory,
  } = useStopwatch();

  useKeyboardShortcuts({
    onStart: start,
    onStop: stop,
    onReset: reset,
    onLap: recordLap,
    isRunning,
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Chronomètre
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Projet 8/100 • useEffect & setInterval
        </p>
      </div>

      {/* Grid principale */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Colonne gauche - Chronomètre */}
        <div className="lg:col-span-2">
          <TimeDisplay time={time} isRunning={isRunning} />
          <Controls
            isRunning={isRunning}
            onStart={start}
            onStop={stop}
            onReset={reset}
            onLap={recordLap}
            hasLaps={laps.length > 0}
          />
          {laps.length > 0 && (
            <div className="mb-6">
              <Statistics laps={laps} totalTime={time} />
            </div>
          )}
        </div>

        {/* Colonne droite - Tours */}
        <div>
          <LapsList laps={laps} onClearLaps={clearLaps} />
        </div>
      </div>

      {/* Historique */}
      {sessions.length > 0 && (
        <div className="mt-6">
          <SessionHistory sessions={sessions} onClearHistory={clearHistory} />
        </div>
      )}
    </div>
  );
};