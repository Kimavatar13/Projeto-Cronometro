'use client';

import { useState } from 'react';
import { Participant, TimerState } from '../lib/types';
import styles from './Controls.module.css';

interface ControlsProps {
  participants: Participant[];
  timerState: TimerState;
  onStartTimer: (participantId: string) => void;
  onPauseTimer: () => void;
  onStopTimer: () => void;
  onSwitchSpeaker: (participantId: string) => void;
  onResetParticipant: (participantId: string) => void;
  onResetAll: () => void;
  onAddParticipant: (name: string, totalTime: number, color?: string) => void;
  onRemoveParticipant: (participantId: string) => void;
  onUpdateParticipantTime: (participantId: string, totalTime: number) => void;
}

const COLORS = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e91e63', '#00bcd4'];

export default function Controls({
  participants,
  timerState,
  onStartTimer,
  onPauseTimer,
  onStopTimer,
  onSwitchSpeaker,
  onResetParticipant,
  onResetAll,
  onAddParticipant,
  onRemoveParticipant,
  onUpdateParticipantTime,
}: ControlsProps) {
  const [newName, setNewName] = useState('');
  const [newTime, setNewTime] = useState(120);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [editingTime, setEditingTime] = useState<string | null>(null);
  const [editTimeValue, setEditTimeValue] = useState(0);

  const handleAddParticipant = () => {
    if (newName.trim()) {
      onAddParticipant(newName.trim(), newTime, selectedColor);
      setNewName('');
      setSelectedColor(COLORS[(COLORS.indexOf(selectedColor) + 1) % COLORS.length]);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEditTime = (participant: Participant) => {
    setEditingTime(participant.id);
    setEditTimeValue(participant.total_time);
  };

  const handleSaveTime = (participantId: string) => {
    onUpdateParticipantTime(participantId, editTimeValue);
    setEditingTime(null);
  };

  const handleCancelEdit = () => {
    setEditingTime(null);
  };

  const isRunning = timerState.status === 'running';
  const isPaused = timerState.status === 'paused';
  const currentSpeaker = participants.find(p => p.id === timerState.current_speaker_id);

  return (
    <div className={styles.controls}>
      {/* Current Status */}
      <div className={styles.status}>
        <h2>Estado Atual</h2>
        <div className={styles.statusInfo}>
          <span className={`${styles.statusBadge} ${styles[timerState.status]}`}>
            {timerState.status === 'running' ? '▶ A Correr' : 
             timerState.status === 'paused' ? '⏸ Pausado' : '⏹ Parado'}
          </span>
          {currentSpeaker && (
            <span className={styles.currentSpeaker}>
              A falar: <strong style={{ color: currentSpeaker.color }}>{currentSpeaker.name}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Global Controls */}
      <div className={styles.globalControls}>
        <h3>Controles Globais</h3>
        <div className={styles.buttonGroup}>
          {isRunning ? (
            <button onClick={onPauseTimer} className={`${styles.btn} ${styles.warning}`}>
              ⏸ Pausar
            </button>
          ) : (
            currentSpeaker && (
              <button onClick={() => onStartTimer(currentSpeaker.id)} className={`${styles.btn} ${styles.success}`}>
                ▶ Continuar
              </button>
            )
          )}
          <button onClick={onStopTimer} className={`${styles.btn} ${styles.danger}`}>
            ⏹ Parar
          </button>
          <button onClick={onResetAll} className={`${styles.btn} ${styles.secondary}`}>
            🔄 Reset Todos
          </button>
        </div>
      </div>

      {/* Participants List */}
      <div className={styles.participantsList}>
        <h3>Participantes</h3>
        {participants.map((participant) => {
          const isActive = timerState.current_speaker_id === participant.id;
          const isEditing = editingTime === participant.id;
          return (
            <div 
              key={participant.id} 
              className={`${styles.participantCard} ${isActive ? styles.active : ''}`}
              style={{ borderColor: participant.color }}
            >
              <div className={styles.participantInfo}>
                <span 
                  className={styles.participantName}
                  style={{ color: participant.color }}
                >
                  {participant.name}
                </span>
                {isEditing ? (
                  <div className={styles.editTimeRow}>
                    <input
                      type="number"
                      value={editTimeValue}
                      onChange={(e) => setEditTimeValue(Number(e.target.value))}
                      min={10}
                      max={3600}
                      className={styles.editTimeInput}
                    />
                    <span className={styles.editTimeLabel}>seg</span>
                    <button 
                      onClick={() => handleSaveTime(participant.id)}
                      className={`${styles.btn} ${styles.success} ${styles.small}`}
                    >
                      ✓
                    </button>
                    <button 
                      onClick={handleCancelEdit}
                      className={`${styles.btn} ${styles.secondary} ${styles.small}`}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <span 
                    className={styles.participantTime}
                    onClick={() => handleEditTime(participant)}
                    title="Clique para editar o tempo total"
                  >
                    {formatTime(participant.remaining_time)} / {formatTime(participant.total_time)} ✏️
                  </span>
                )}
              </div>
              <div className={styles.participantActions}>
                {!isActive ? (
                  <button 
                    onClick={() => onSwitchSpeaker(participant.id)} 
                    className={`${styles.btn} ${styles.primary} ${styles.small}`}
                  >
                    ▶ Iniciar
                  </button>
                ) : (
                  <span className={styles.activeLabel}>A FALAR</span>
                )}
                <button 
                  onClick={() => onResetParticipant(participant.id)} 
                  className={`${styles.btn} ${styles.secondary} ${styles.small}`}
                  title="Reset tempo"
                >
                  🔄
                </button>
                <button 
                  onClick={() => onRemoveParticipant(participant.id)} 
                  className={`${styles.btn} ${styles.danger} ${styles.small}`}
                  title="Remover"
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Participant */}
      <div className={styles.addParticipant}>
        <h3>Adicionar Participante</h3>
        <div className={styles.addForm}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nome do grupo..."
            className={styles.input}
          />
          <div className={styles.timeInput}>
            <label>Tempo (segundos):</label>
            <input
              type="number"
              value={newTime}
              onChange={(e) => setNewTime(Number(e.target.value))}
              min={10}
              max={3600}
              className={styles.input}
            />
          </div>
          <div className={styles.colorPicker}>
            <label>Cor:</label>
            <div className={styles.colors}>
              {COLORS.map((color) => (
                <button
                  key={color}
                  className={`${styles.colorBtn} ${selectedColor === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <button 
            onClick={handleAddParticipant} 
            className={`${styles.btn} ${styles.success}`}
            disabled={!newName.trim()}
          >
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
