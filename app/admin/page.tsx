'use client';

import { useDebateTimer } from '../lib/useDebateTimer';
import Controls from '../components/Controls';
import styles from './page.module.css';
import Link from 'next/link';

export default function AdminPage() {
  const {
    participants,
    timerState,
    isLoading,
    useLocalMode,
    startTimer,
    pauseTimer,
    stopTimer,
    switchSpeaker,
    resetParticipantTime,
    resetAllTimers,
    addParticipant,
    removeParticipant,
    updateParticipantTime,
    updateParticipantName,
  } = useDebateTimer();

  if (isLoading) {
    return <div className={styles.loading}>A carregar...</div>;
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Painel de Gestão</h1>
        <p className={styles.subtitle}>Controle do cronómetro de debate</p>
        <Link href="/" className={styles.backLink}>
          ← Voltar à visualização pública
        </Link>
      </header>

      <div className={styles.content}>
        {useLocalMode && (
          <div className={styles.localModeNotice}>
            <p>⚠️ Modo Local Ativo</p>
            <small>
              Configure as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY 
              para sincronização em tempo real
            </small>
          </div>
        )}

        <Controls
          participants={participants}
          timerState={timerState}
          onStartTimer={startTimer}
          onPauseTimer={pauseTimer}
          onStopTimer={stopTimer}
          onSwitchSpeaker={switchSpeaker}
          onResetParticipant={resetParticipantTime}
          onResetAll={resetAllTimers}
          onAddParticipant={addParticipant}
          onRemoveParticipant={removeParticipant}
          onUpdateParticipantTime={updateParticipantTime}
          onUpdateParticipantName={updateParticipantName}
        />
      </div>
    </main>
  );
}
