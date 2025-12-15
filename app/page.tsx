'use client';

import { useDebateTimer } from './lib/useDebateTimer';
import Timer from './components/Timer';
import ParticipantList from './components/ParticipantList';
import styles from './page.module.css';
import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';

export default function PublicPage() {
  const {
    participants,
    timerState,
    isLoading,
    calculateRemainingTime,
  } = useDebateTimer();

  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef<HTMLDivElement>(null);

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
  if (typeof window !== 'undefined') {
    document.onfullscreenchange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
  }

  if (isLoading) {
    return <div className={styles.loading}>A carregar...</div>;
  }

  const activeSpeaker = participants.find(p => p.id === timerState.current_speaker_id);
  const isRunning = timerState.status === 'running';

  return (
    <main className={activeSpeaker ? styles.mainWithSidebar : styles.main}>
      <div className={styles.centerSection}>
        <header className={styles.header}>
          <h1 className={styles.title}>Cronómetro de Debate</h1>
          <p className={styles.subtitle}>
            {timerState.status === 'running' ? 'Em curso' : 
             timerState.status === 'paused' ? 'Pausado' : 'A aguardar início'}
          </p>
        </header>

        <div className={styles.activeTimerSection}>
          {activeSpeaker ? (
            <div 
              ref={timerRef} 
              className={`${styles.timerContainer} ${isFullscreen ? styles.fullscreenTimer : ''}`}
            >
              <Timer
                remainingTime={calculateRemainingTime(activeSpeaker, timerState)}
                totalTime={activeSpeaker.total_time}
                isActive={true}
                isRunning={isRunning}
                participantName={activeSpeaker.name}
                participantColor={activeSpeaker.color}
                size="large"
              />
              <button 
                onClick={toggleFullscreen} 
                className={styles.fullscreenBtn}
                title={isFullscreen ? 'Sair do ecrã inteiro' : 'Ver em ecrã inteiro'}
              >
                {isFullscreen ? '⛶ Sair' : '⛶ Ecrã Inteiro'}
              </button>
            </div>
          ) : (
            <div className={styles.noSpeaker}>
              <h2>Nenhum orador selecionado</h2>
              <p>Aguarde que o moderador inicie o debate</p>
              
              {/* Show all participants when no one is speaking */}
              <div className={styles.allParticipants}>
                {participants.map((participant) => (
                  <div key={participant.id} className={styles.participantCard}>
                    <Timer
                      remainingTime={participant.remaining_time}
                      totalTime={participant.total_time}
                      isActive={false}
                      isRunning={false}
                      participantName={participant.name}
                      participantColor={participant.color}
                      size="small"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <footer className={styles.footer}>
          <Link href="/admin" className={styles.adminLink}>
            Área de Gestão (Moderador)
          </Link>
        </footer>
      </div>

      {activeSpeaker && (
        <aside className={styles.sidebar}>
          <ParticipantList
            participants={participants}
            timerState={timerState}
            calculateRemainingTime={calculateRemainingTime}
          />
        </aside>
      )}
    </main>
  );
}
