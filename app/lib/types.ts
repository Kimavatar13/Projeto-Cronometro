// Participant type
export interface Participant {
  id: string;
  name: string;
  total_time: number; // in seconds
  remaining_time: number; // in seconds
  color?: string;
  has_spoken?: boolean; // Track if participant has already spoken
}

// Timer state type
export interface TimerState {
  id: string;
  current_speaker_id: string | null;
  status: 'running' | 'paused' | 'stopped' | 'finished';
  started_at: string | null; // ISO timestamp
  updated_at: string;
}

// Combined state for the app
export interface DebateState {
  participants: Participant[];
  timerState: TimerState | null;
}

// Database row types (matching Supabase tables)
export interface ParticipantRow {
  id: string;
  name: string;
  total_time: number;
  remaining_time: number;
  color: string | null;
  created_at: string;
}

export interface TimerStateRow {
  id: string;
  current_speaker_id: string | null;
  status: string;
  started_at: string | null;
  updated_at: string;
}
