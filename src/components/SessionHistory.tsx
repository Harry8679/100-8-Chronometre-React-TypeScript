import { formatTime, formatDateTime } from '../utils/timeFormatter';
import type { SessionHistoryProps } from '../types';

export const SessionHistory = ({ sessions, onClearHistory }: SessionHistoryProps) => {
  if (sessions.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          📜 Historique des sessions
        </h3>
        <button
          onClick={onClearHistory}
          className="text-xs text-red-600 hover:text-red-700 hover:underline"
        >
          Effacer
        </button>
      </div>

      <div className="space-y-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-mono font-bold text-lg text-gray-800 dark:text-white">
                  {formatTime(session.totalTime)}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {formatDateTime(session.startTime)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {session.laps.length} tour{session.laps.length > 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};