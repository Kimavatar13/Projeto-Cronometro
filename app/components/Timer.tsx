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
      setDisplayTime(prev => prev - 1); // Allow negative time
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, isActive, isRunning]);

  // Format time as MM:SS (supports negative)
  const formatTime = (seconds: number): string => {
    const isNegative = seconds < 0;
    const absSeconds = Math.abs(seconds);
    const mins = Math.floor(absSeconds / 60);
    const secs = absSeconds % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return isNegative ? `-${timeStr}` : timeStr;
  };

  // Calculate percentage for color (clamp to 0 for negative times)
  const percentage = totalTime > 0 ? Math.max(0, (displayTime / totalTime) * 100) : 0;
  const isNegative = displayTime < 0;

  // Determine timer color based on remaining percentage
  const getTimerColor = (): string => {
    if (isNegative) return '#e74c3c'; // Red for negative
    if (percentage > 50) return '#2ecc71'; // Green
    if (percentage > 10) return '#f39c12'; // Yellow/Orange
    return '#e74c3c'; // Red
  };

  // Check if should blink (last 10 seconds or negative)
  const shouldBlink = (displayTime <= 10 && displayTime > 0 && isRunning) || (isNegative && isRunning);

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
      {displayTime <= 0 && (
        <div className={styles.timeUp}>
          {displayTime < 0 ? 'TEMPO EXCEDIDO!' : 'TEMPO ESGOTADO!'}
        </div>
      )}
    </div>
  );
}
