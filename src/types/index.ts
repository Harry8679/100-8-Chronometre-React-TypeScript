// Types pour le chronomètre

export interface Lap {
  id: string;
  lapNumber: number;
  lapTime: number;
  totalTime: number;
  timestamp: Date;
}

export interface Session {
  id: string;
  startTime: Date;
  endTime: Date;
  totalTime: number;
  laps: Lap[];
}

export interface StopwatchState {
  time: number;
  isRunning: boolean;
  laps: Lap[];
}

export interface TimeDisplayProps {
  time: number;
  isRunning: boolean;
}

export interface ControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
  hasLaps: boolean;
}

export interface LapsListProps {
  laps: Lap[];
  onClearLaps: () => void;
}

export interface StatisticsProps {
  laps: Lap[];
  totalTime: number;
}

export interface SessionHistoryProps {
  sessions: Session[];
  onClearHistory: () => void;
}