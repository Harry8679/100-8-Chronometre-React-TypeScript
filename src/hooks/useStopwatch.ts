import { useState, useRef, useCallback, useEffect } from 'react';
import type { Lap, Session } from '../types';

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const sessionStartRef = useRef<Date | null>(null);

  // Démarrer le chronomètre
  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - time;
      
      if (!sessionStartRef.current) {
        sessionStartRef.current = new Date();
      }
      
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10); // Update every 10ms for smooth display
    }
  }, [isRunning, time]);

  // Arrêter le chronomètre
  const stop = useCallback(() => {
    if (isRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [isRunning]);

  // Réinitialiser
  const reset = useCallback(() => {
    stop();
    
    // Save session if there was activity
    if (sessionStartRef.current && (time > 0 || laps.length > 0)) {
      const session: Session = {
        id: Date.now().toString(),
        startTime: sessionStartRef.current,
        endTime: new Date(),
        totalTime: time,
        laps: [...laps],
      };
      setSessions(prev => [session, ...prev].slice(0, 10)); // Keep last 10 sessions
    }
    
    setTime(0);
    setLaps([]);
    sessionStartRef.current = null;
  }, [stop, time, laps]);

  // Enregistrer un tour
  const recordLap = useCallback(() => {
    if (time > 0) {
      const previousLapTime = laps.length > 0 
        ? laps[laps.length - 1].totalTime 
        : 0;
      
      const newLap: Lap = {
        id: Date.now().toString(),
        lapNumber: laps.length + 1,
        lapTime: time - previousLapTime,
        totalTime: time,
        timestamp: new Date(),
      };
      
      setLaps(prev => [...prev, newLap]);
    }
  }, [time, laps]);

  // Clear laps
  const clearLaps = useCallback(() => {
    setLaps([]);
  }, []);

  // Clear history
  const clearHistory = useCallback(() => {
    setSessions([]);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
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
  };
};