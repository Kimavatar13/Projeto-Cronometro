'use client';

import { Participant, TimerState } from '../lib/types';
import Timer from './Timer';
import styles from './ParticipantList.module.css';

interface ParticipantListProps {
  participants: Participant[];
  timerState: TimerState;
  calculateRemainingTime: (participant: Participant, state: TimerState) => number;
}

export default function ParticipantList({
  participants,
  timerState,
  calculateRemainingTime,
}: ParticipantListProps) {
  // Filter out the active speaker for the sidebar list
  const inactiveParticipants = participants.filter(
    p => p.id !== timerState.current_speaker_id
  );

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Participantes</h2>
      <div className={styles.participants}>
        {inactiveParticipants.map((participant) => (
          <div key={participant.id} className={styles.participantCard}>
            <Timer
              remainingTime={calculateRemainingTime(participant, timerState)}
              totalTime={participant.total_time}
              isActive={false}
              isRunning={false}
              participantName={participant.name}
              participantColor={participant.color}
              size="small"
            />
          </div>
        ))}
        {inactiveParticipants.length === 0 && (
          <p className={styles.empty}>Nenhum participante em espera</p>
        )}
      </div>
    </div>
  );
}
