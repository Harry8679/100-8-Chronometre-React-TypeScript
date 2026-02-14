// Fonctions de formatage du temps

import type { Lap } from "../types";

export const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor((milliseconds % 1000) / 10);

  const pad = (num: number, size: number = 2): string => {
    return num.toString().padStart(size, '0');
  };

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
};

export const formatLapTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const ms = Math.floor((milliseconds % 1000) / 10);

  const pad = (num: number, size: number = 2): string => {
    return num.toString().padStart(size, '0');
  };

  return `${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
};

export const formatDateTime = (date: Date): string => {
  return new Date(date).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const calculateAverageLap = (laps: Lap[]): number => {
  if (laps.length === 0) return 0;
  const totalLapTime = laps.reduce((sum, lap) => sum + lap.lapTime, 0);
  return totalLapTime / laps.length;
};

export const findFastestLap = (laps: Lap[]): Lap | null => {
  if (laps.length === 0) return null;
  return laps.reduce((fastest, current) => 
    current.lapTime < fastest.lapTime ? current : fastest
  );
};

export const findSlowestLap = (laps: Lap[]): Lap | null => {
  if (laps.length === 0) return null;
  return laps.reduce((slowest, current) => 
    current.lapTime > slowest.lapTime ? current : slowest
  );
};