'use client';

import { useState, useEffect, useCallback } from 'react';
import { Participant, TimerState, ParticipantRow, TimerStateRow } from './types';
import { getSupabase, isSupabaseConfigured } from './supabase';

// Default participants for demo mode
const defaultParticipants: Participant[] = [
  { id: '1', name: 'Grupo A', total_time: 120, remaining_time: 120, color: '#3498db' },
  { id: '2', name: 'Grupo B', total_time: 120, remaining_time: 120, color: '#e74c3c' },
  { id: '3', name: 'Grupo C', total_time: 120, remaining_time: 120, color: '#2ecc71' },
  { id: '4', name: 'Grupo D', total_time: 120, remaining_time: 120, color: '#f39c12' },
];

const defaultTimerState: TimerState = {
  id: '1',
  current_speaker_id: null,
  status: 'stopped',
  started_at: null,
  updated_at: new Date().toISOString(),
};

export function useDebateTimer() {
  const [participants, setParticipants] = useState<Participant[]>(defaultParticipants);
  const [timerState, setTimerState] = useState<TimerState>(defaultTimerState);
  const [isLoading, setIsLoading] = useState(true);
  const [useLocalMode, setUseLocalMode] = useState(false);

  // Calculate current remaining time based on started_at timestamp
  const calculateRemainingTime = useCallback((participant: Participant, state: TimerState): number => {
    if (state.status !== 'running' || state.current_speaker_id !== participant.id || !state.started_at) {
      return participant.remaining_time;
    }
    
    const elapsed = Math.floor((Date.now() - new Date(state.started_at).getTime()) / 1000);
    return Math.max(0, participant.remaining_time - elapsed);
  }, []);

  // Fetch initial data from Supabase
  const fetchData = useCallback(async () => {
    const supabase = getSupabase();
    
    if (!isSupabaseConfigured() || !supabase) {
      setUseLocalMode(true);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch participants
      const { data: participantsData, error: participantsError } = await supabase
        .from('participants')
        .select('*')
        .order('created_at', { ascending: true });

      if (participantsError) throw participantsError;

      // Fetch timer state
      const { data: timerData, error: timerError } = await supabase
        .from('timer_state')
        .select('*')
        .single();

      if (timerError && timerError.code !== 'PGRST116') throw timerError;

      if (participantsData && participantsData.length > 0) {
        setParticipants(participantsData.map((p: ParticipantRow) => ({
          id: p.id,
          name: p.name,
          total_time: p.total_time,
          remaining_time: p.remaining_time,
          color: p.color || undefined,
        })));
      }

      if (timerData) {
        setTimerState({
          id: timerData.id,
          current_speaker_id: timerData.current_speaker_id,
          status: timerData.status as 'running' | 'paused' | 'stopped',
          started_at: timerData.started_at,
          updated_at: timerData.updated_at,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUseLocalMode(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Subscribe to realtime updates
  useEffect(() => {
    fetchData();

    const supabase = getSupabase();
    if (!isSupabaseConfigured() || !supabase) return;

    const channel = supabase
      .channel('debate-timer')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'participants' },
        (payload) => {
          if (payload.eventType === 'UPDATE') {
            const updated = payload.new as ParticipantRow;
            setParticipants(prev => prev.map(p => 
              p.id === updated.id 
                ? { ...p, remaining_time: updated.remaining_time, name: updated.name }
                : p
            ));
          }
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'timer_state' },
        (payload) => {
          if (payload.eventType === 'UPDATE' || payload.eventType === 'INSERT') {
            const updated = payload.new as TimerStateRow;
            setTimerState({
              id: updated.id,
              current_speaker_id: updated.current_speaker_id,
              status: updated.status as 'running' | 'paused' | 'stopped',
              started_at: updated.started_at,
              updated_at: updated.updated_at,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchData]);

  // Start timer for a participant
  const startTimer = async (participantId: string) => {
    const now = new Date().toISOString();
    const supabase = getSupabase();
    
    if (useLocalMode || !supabase) {
      setTimerState(prev => ({
        ...prev,
        current_speaker_id: participantId,
        status: 'running',
        started_at: now,
        updated_at: now,
      }));
      return;
    }

    try {
      await supabase
        .from('timer_state')
        .upsert({
          id: timerState.id,
          current_speaker_id: participantId,
          status: 'running',
          started_at: now,
          updated_at: now,
        });
    } catch (error) {
      console.error('Error starting timer:', error);
    }
  };

  // Pause timer and save remaining time
  const pauseTimer = async () => {
    const currentSpeaker = participants.find(p => p.id === timerState.current_speaker_id);
    if (!currentSpeaker || !timerState.started_at) return;

    const remaining = calculateRemainingTime(currentSpeaker, timerState);
    const now = new Date().toISOString();
    const supabase = getSupabase();

    if (useLocalMode || !supabase) {
      setParticipants(prev => prev.map(p => 
        p.id === currentSpeaker.id ? { ...p, remaining_time: remaining } : p
      ));
      setTimerState(prev => ({
        ...prev,
        status: 'paused',
        started_at: null,
        updated_at: now,
      }));
      return;
    }

    try {
      // Update participant's remaining time
      await supabase
        .from('participants')
        .update({ remaining_time: remaining })
        .eq('id', currentSpeaker.id);

      // Update timer state
      await supabase
        .from('timer_state')
        .update({
          status: 'paused',
          started_at: null,
          updated_at: now,
        })
        .eq('id', timerState.id);
    } catch (error) {
      console.error('Error pausing timer:', error);
    }
  };

  // Stop timer completely
  const stopTimer = async () => {
    const currentSpeaker = participants.find(p => p.id === timerState.current_speaker_id);
    const now = new Date().toISOString();
    const supabase = getSupabase();

    if (currentSpeaker && timerState.started_at && timerState.status === 'running') {
      const remaining = calculateRemainingTime(currentSpeaker, timerState);
      
      if (useLocalMode || !supabase) {
        setParticipants(prev => prev.map(p => 
          p.id === currentSpeaker.id ? { ...p, remaining_time: remaining } : p
        ));
      } else {
        await supabase
          .from('participants')
          .update({ remaining_time: remaining })
          .eq('id', currentSpeaker.id);
      }
    }

    if (useLocalMode || !supabase) {
      setTimerState(prev => ({
        ...prev,
        current_speaker_id: null,
        status: 'stopped',
        started_at: null,
        updated_at: now,
      }));
      return;
    }

    try {
      await supabase
        .from('timer_state')
        .update({
          current_speaker_id: null,
          status: 'stopped',
          started_at: null,
          updated_at: now,
        })
        .eq('id', timerState.id);
    } catch (error) {
      console.error('Error stopping timer:', error);
    }
  };

  // Switch speaker
  const switchSpeaker = async (newSpeakerId: string) => {
    // First pause current speaker
    await pauseTimer();
    // Then start new speaker
    await startTimer(newSpeakerId);
  };

  // Reset a participant's time
  const resetParticipantTime = async (participantId: string) => {
    const participant = participants.find(p => p.id === participantId);
    if (!participant) return;
    const supabase = getSupabase();

    if (useLocalMode || !supabase) {
      setParticipants(prev => prev.map(p => 
        p.id === participantId ? { ...p, remaining_time: p.total_time } : p
      ));
      return;
    }

    try {
      await supabase
        .from('participants')
        .update({ remaining_time: participant.total_time })
        .eq('id', participantId);
    } catch (error) {
      console.error('Error resetting participant time:', error);
    }
  };

  // Reset all timers
  const resetAllTimers = async () => {
    await stopTimer();
    const supabase = getSupabase();
    
    if (useLocalMode || !supabase) {
      setParticipants(prev => prev.map(p => ({ ...p, remaining_time: p.total_time })));
      return;
    }

    try {
      for (const p of participants) {
        await supabase
          .from('participants')
          .update({ remaining_time: p.total_time })
          .eq('id', p.id);
      }
    } catch (error) {
      console.error('Error resetting all timers:', error);
    }
  };

  // Add participant
  const addParticipant = async (name: string, totalTime: number, color?: string) => {
    const newId = String(Date.now());
    const newParticipant: Participant = {
      id: newId,
      name,
      total_time: totalTime,
      remaining_time: totalTime,
      color,
    };
    const supabase = getSupabase();

    if (useLocalMode || !supabase) {
      setParticipants(prev => [...prev, newParticipant]);
      return;
    }

    try {
      await supabase
        .from('participants')
        .insert({
          id: newId,
          name,
          total_time: totalTime,
          remaining_time: totalTime,
          color,
        });
    } catch (error) {
      console.error('Error adding participant:', error);
    }
  };

  // Remove participant
  const removeParticipant = async (participantId: string) => {
    if (timerState.current_speaker_id === participantId) {
      await stopTimer();
    }
    const supabase = getSupabase();

    if (useLocalMode || !supabase) {
      setParticipants(prev => prev.filter(p => p.id !== participantId));
      return;
    }

    try {
      await supabase
        .from('participants')
        .delete()
        .eq('id', participantId);
    } catch (error) {
      console.error('Error removing participant:', error);
    }
  };

  // Update participant's total time
  const updateParticipantTime = async (participantId: string, totalTime: number) => {
    const supabase = getSupabase();

    if (useLocalMode || !supabase) {
      setParticipants(prev => prev.map(p => 
        p.id === participantId 
          ? { ...p, total_time: totalTime, remaining_time: totalTime } 
          : p
      ));
      return;
    }

    try {
      await supabase
        .from('participants')
        .update({ total_time: totalTime, remaining_time: totalTime })
        .eq('id', participantId);
    } catch (error) {
      console.error('Error updating participant time:', error);
    }
  };

  return {
    participants,
    timerState,
    isLoading,
    useLocalMode,
    calculateRemainingTime,
    startTimer,
    pauseTimer,
    stopTimer,
    switchSpeaker,
    resetParticipantTime,
    resetAllTimers,
    addParticipant,
    removeParticipant,
    updateParticipantTime,
  };
}
