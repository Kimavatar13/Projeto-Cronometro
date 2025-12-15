'use client';

import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

interface TimerProps {
  remainingTime: number;
  totalTime: number;
  isActive: boolean;
  isRunning: boolean;
  participantName?: string;
  participantColor?: string;
  size?: 'small' | 'large';
  showName?: boolean;
}

export default function Timer({
  remainingTime,
  totalTime,
  isActive,
  isRunning,
  participantName,
  participantColor = '#3498db',
  size = 'small',
  showName = true,
}: TimerProps) {
  const [displayTime, setDisplayTime] = useState(remainingTime);

  // Update display time when remainingTime changes or when running
  useEffect(() => {
    setDisplayTime(remainingTime);

    if (!isActive || !isRunning) return;

    const interval = setInterval(() => {
      setDisplayTime(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, isActive, isRunning]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate percentage for color
  const percentage = totalTime > 0 ? (displayTime / totalTime) * 100 : 0;

  // Determine timer color based on remaining percentage
  const getTimerColor = (): string => {
    if (percentage > 50) return '#2ecc71'; // Green
    if (percentage > 10) return '#f39c12'; // Yellow/Orange
    return '#e74c3c'; // Red
  };

  // Check if should blink (last 10 seconds)
  const shouldBlink = displayTime <= 10 && displayTime > 0 && isRunning;

  const timerClasses = [
    styles.timer,
    styles[size],
    isActive ? styles.active : '',
    shouldBlink ? styles.blink : '',
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={timerClasses}
      style={{ 
        '--timer-color': getTimerColor(),
        '--participant-color': participantColor,
      } as React.CSSProperties}
    >
      {showName && participantName && (
        <div className={styles.name} style={{ color: participantColor }}>
          {participantName}
        </div>
      )}
      <div className={styles.time}>
        {formatTime(displayTime)}
      </div>
      {size === 'large' && (
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ 
              width: `${percentage}%`,
              backgroundColor: getTimerColor(),
            }} 
          />
        </div>
      )}
      {displayTime === 0 && (
        <div className={styles.timeUp}>TEMPO ESGOTADO!</div>
      )}
    </div>
  );
}
