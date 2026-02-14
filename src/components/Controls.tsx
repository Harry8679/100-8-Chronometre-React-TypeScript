import type { ControlsProps } from '../types';

export const Controls = ({
  isRunning,
  onStart,
  onStop,
  onReset,
  onLap,
//   hasLaps,
}: ControlsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Start/Stop */}
      {!isRunning ? (
        <button
          onClick={onStart}
          className="col-span-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          ▶️ Démarrer
        </button>
      ) : (
        <button
          onClick={onStop}
          className="col-span-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          ⏸️ Pause
        </button>
      )}

      {/* Lap */}
      <button
        onClick={onLap}
        disabled={!isRunning}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        🏁 Tour
      </button>

      {/* Reset */}
      <button
        onClick={onReset}
        disabled={isRunning}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        🔄 Reset
      </button>

      {/* Keyboard shortcuts info */}
      <div className="col-span-2 mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm text-blue-700 dark:text-blue-300 font-semibold mb-2">
          ⌨️ Raccourcis clavier
        </p>
        <div className="grid grid-cols-3 gap-2 text-xs text-blue-600 dark:text-blue-400">
          <div>• Espace : Start/Stop</div>
          <div>• L : Tour</div>
          <div>• R : Reset</div>
        </div>
      </div>
    </div>
  );
};