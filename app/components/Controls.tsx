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
  onUpdateParticipantName: (participantId: string, name: string) => void;
}

const COLORS = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e91e63', '#00bcd4'];

// Helper to parse MM:SS to seconds
const parseTimeInput = (value: string): number => {
  if (value.includes(':')) {
    const parts = value.split(':');
    const mins = parseInt(parts[0]) || 0;
    const secs = parseInt(parts[1]) || 0;
    return mins * 60 + secs;
  }
  return parseInt(value) || 0;
};

// Helper to format seconds to MM:SS for input
const formatTimeForInput = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

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
  onUpdateParticipantName,
}: ControlsProps) {
  const [newName, setNewName] = useState('');
  const [newTimeInput, setNewTimeInput] = useState('2:00');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [editingTime, setEditingTime] = useState<string | null>(null);
  const [editTimeInput, setEditTimeInput] = useState('');
  const [editingName, setEditingName] = useState<string | null>(null);
  const [editNameValue, setEditNameValue] = useState('');

  const handleAddParticipant = () => {
    if (newName.trim()) {
      const timeInSeconds = parseTimeInput(newTimeInput);
      onAddParticipant(newName.trim(), timeInSeconds > 0 ? timeInSeconds : 120, selectedColor);
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
    setEditTimeInput(formatTimeForInput(participant.total_time));
  };

  const handleSaveTime = (participantId: string) => {
    const timeInSeconds = parseTimeInput(editTimeInput);
    if (timeInSeconds > 0) {
      onUpdateParticipantTime(participantId, timeInSeconds);
    }
    setEditingTime(null);
  };

  const handleCancelEdit = () => {
    setEditingTime(null);
    setEditingName(null);
  };

  const handleEditName = (participant: Participant) => {
    setEditingName(participant.id);
    setEditNameValue(participant.name);
  };

  const handleSaveName = (participantId: string) => {
    if (editNameValue.trim()) {
      onUpdateParticipantName(participantId, editNameValue.trim());
    }
    setEditingName(null);
  };

  const isRunning = timerState.status === 'running';
  const isPaused = timerState.status === 'paused';
  const isFinished = timerState.status === 'finished';
  const currentSpeaker = participants.find(p => p.id === timerState.current_speaker_id);

  return (
    <div className={styles.controls}>
      {/* Current Status */}
      <div className={styles.status}>
        <h2>Estado Atual</h2>
        <div className={styles.statusInfo}>
          <span className={`${styles.statusBadge} ${styles[timerState.status]}`}>
            {timerState.status === 'running' ? '▶ A Correr' : 
             timerState.status === 'paused' ? '⏸ Pausado' : 
             timerState.status === 'finished' ? '✓ Terminado' : '⏹ Parado'}
          </span>
          {currentSpeaker && (
            <span className={styles.currentSpeaker}>
              A falar: <strong style={{ color: currentSpeaker.color }}>{currentSpeaker.name}</strong>
              {currentSpeaker.has_spoken && <span className={styles.spokenBadge}> (já falou)</span>}
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
        <h3>Participantes ({participants.filter(p => p.has_spoken).length}/{participants.length} já falaram)</h3>
        {participants.map((participant) => {
          const isActive = timerState.current_speaker_id === participant.id;
          const isEditingThisTime = editingTime === participant.id;
          const isEditingThisName = editingName === participant.id;
          const hasFinished = participant.remaining_time === 0;
          return (
            <div 
              key={participant.id} 
              className={`${styles.participantCard} ${isActive ? styles.active : ''} ${participant.has_spoken ? styles.spoken : ''} ${hasFinished ? styles.finished : ''}`}
              style={{ borderColor: participant.color }}
            >
              <div className={styles.participantInfo}>
                {isEditingThisName ? (
                  <div className={styles.editNameRow}>
                    <input
                      type="text"
                      value={editNameValue}
                      onChange={(e) => setEditNameValue(e.target.value)}
                      className={styles.editNameInput}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveName(participant.id);
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                    />
                    <button 
                      onClick={() => handleSaveName(participant.id)}
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
                    className={styles.participantName}
                    style={{ color: participant.color }}
                    onClick={() => handleEditName(participant)}
                    title="Clique para editar o nome"
                  >
                    {participant.has_spoken && <span className={styles.checkmark}>✓ </span>}
                    {participant.name} ✏️
                  </span>
                )}
                {isEditingThisTime ? (
                  <div className={styles.editTimeRow}>
                    <input
                      type="text"
                      value={editTimeInput}
                      onChange={(e) => setEditTimeInput(e.target.value)}
                      placeholder="M:SS"
                      className={styles.editTimeInput}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveTime(participant.id);
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                    />
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddParticipant();
            }}
          />
          <div className={styles.timeInput}>
            <label>Tempo (M:SS ou segundos):</label>
            <input
              type="text"
              value={newTimeInput}
              onChange={(e) => setNewTimeInput(e.target.value)}
              placeholder="2:00"
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
