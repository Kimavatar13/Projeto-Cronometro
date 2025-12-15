# Debate Timer Project - Copilot Instructions

## Project Overview
A debate-style timer application built with Next.js and Supabase for real-time synchronization.

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Database & Realtime**: Supabase
- **Styling**: CSS Modules with custom animations

## Project Structure
```
app/
├── page.tsx              # Public display page
├── admin/
│   └── page.tsx          # Moderator control page
├── components/
│   ├── Timer.tsx         # Timer display component
│   ├── Controls.tsx      # Timer control buttons
│   └── ParticipantList.tsx
├── lib/
│   ├── supabase.ts       # Supabase client
│   └── types.ts          # TypeScript types
└── styles/
    └── globals.css       # Global styles
```

## Key Architecture Decisions
- **Source of truth**: Timestamps in database, NOT setInterval
- **Time calculation**: `remaining = duration - (now - started_at)`
- **Realtime**: Supabase Realtime for sync, not ticks
- **Two pages**: Admin (control) and Public (display)

## Database Schema
- `participants`: id, name, total_time, remaining_time
- `timer_state`: current_speaker_id, status, started_at

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
