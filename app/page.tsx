'use client';

import { useDebateTimer } from './lib/useDebateTimer';
import Timer from './components/Timer';
import styles from './page.module.css';
import Link from 'next/link';
import { useState, useRef, useCallback, useEffect } from 'react';

// Web Audio API beep sound generator
const playBeepSound = () => {
  if (typeof window === 'undefined') return;
  
  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    
    const playBeep = (startTime: number, frequency: number, duration: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.5, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };
    
    const now = audioContext.currentTime;
    playBeep(now, 880, 0.2);
    playBeep(now + 0.3, 880, 0.2);
    playBeep(now + 0.6, 1100, 0.4);
  } catch (err) {
    console.log('Audio not supported:', err);
  }
};

export default function PublicPage() {
  const {
    participants,
    timerState,
    isLoading,
    calculateRemainingTime,
  } = useDebateTimer();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'active' | 'all'>('all');
  const timerRef = useRef<HTMLDivElement>(null);
  const hasPlayedSound = useRef<Set<string>>(new Set());

  // Check for finished timers and play sound
  useEffect(() => {
    if (timerState.status !== 'running' || !timerState.current_speaker_id) return;

    const currentSpeaker = participants.find(p => p.id === timerState.current_speaker_id);
    if (!currentSpeaker) return;

    const checkInterval = setInterval(() => {
      const remaining = calculateRemainingTime(currentSpeaker, timerState);
      if (remaining === 0 && !hasPlayedSound.current.has(currentSpeaker.id)) {
        hasPlayedSound.current.add(currentSpeaker.id);
        playBeepSound();
      }
    }, 500);

    return () => clearInterval(checkInterval);
  }, [timerState, participants, calculateRemainingTime]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      timerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen changes (e.g., user presses Escape)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>A carregar...</div>;
  }

  const activeSpeaker = participants.find(p => p.id === timerState.current_speaker_id);
  const isRunning = timerState.status === 'running';
  const spokenCount = participants.filter(p => p.has_spoken).length;

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cronómetro de Debate</h1>
        <p className={styles.subtitle}>
          {timerState.status === 'running' ? '🔴 Em curso' : 
           timerState.status === 'paused' ? '⏸ Pausado' : 
           timerState.status === 'finished' ? '✓ Terminado' : '⏹ A aguardar início'}
          {' • '}
          {spokenCount}/{participants.length} participantes já falaram
        </p>
        
        {/* View Mode Toggle */}
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleBtn} ${viewMode === 'all' ? styles.active : ''}`}
            onClick={() => setViewMode('all')}
          >
            Ver Todos
          </button>
          <button 
            className={`${styles.toggleBtn} ${viewMode === 'active' ? styles.active : ''}`}
            onClick={() => setViewMode('active')}
          >
            Ver Ativo
          </button>
        </div>
      </header>

      <div 
        ref={timerRef}
        className={`${styles.timersSection} ${isFullscreen ? styles.fullscreen : ''}`}
      >
        {viewMode === 'all' ? (
          // Show all timers in a grid
          <div className={styles.timersGrid}>
            {participants.map((participant) => {
              const isActive = participant.id === timerState.current_speaker_id;
              const remaining = calculateRemainingTime(participant, timerState);
              const hasFinished = remaining === 0;
              
              return (
                <div 
                  key={participant.id} 
                  className={`${styles.timerCard} ${isActive ? styles.activeCard : ''} ${participant.has_spoken ? styles.spokenCard : ''} ${hasFinished ? styles.finishedCard : ''}`}
                >
                  <Timer
                    remainingTime={remaining}
                    totalTime={participant.total_time}
                    isActive={isActive}
                    isRunning={isActive && isRunning}
                    participantName={participant.name}
                    participantColor={participant.color}
                    size={isActive ? 'large' : 'small'}
                    showName={true}
                  />
                  {participant.has_spoken && !isActive && (
                    <div className={styles.spokenBadge}>✓ Já falou</div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          // Show only active timer
          <div className={styles.activeTimerSection}>
            {activeSpeaker ? (
              <div className={styles.timerContainer}>
                <Timer
                  remainingTime={calculateRemainingTime(activeSpeaker, timerState)}
                  totalTime={activeSpeaker.total_time}
                  isActive={true}
                  isRunning={isRunning}
                  participantName={activeSpeaker.name}
                  participantColor={activeSpeaker.color}
                  size="large"
                />
              </div>
            ) : (
              <div className={styles.noSpeaker}>
                <h2>Nenhum orador selecionado</h2>
                <p>Aguarde que o moderador inicie o debate</p>
              </div>
            )}
          </div>
        )}
        
        <button 
          onClick={toggleFullscreen} 
          className={styles.fullscreenBtn}
          title={isFullscreen ? 'Sair do ecrã inteiro' : 'Ver em ecrã inteiro'}
        >
          {isFullscreen ? '⛶ Sair' : '⛶ Ecrã Inteiro'}
        </button>
      </div>

      <footer className={styles.footer}>
        <Link href="/admin" className={styles.adminLink}>
          Área de Gestão (Moderador)
        </Link>
      </footer>
    </main>
  );
}
