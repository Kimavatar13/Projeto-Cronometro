(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabase",
    ()=>getSupabase,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://vlrvczcpscvxvjqumctv.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscnZjemNwc2N2eHZqcXVtY3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3ODIxOTksImV4cCI6MjA4MTM1ODE5OX0.cXEy8Y_Oed7cBjLURF7k2BIJqvQm2TD0elsHr76CJ5M") || '';
const isSupabaseConfigured = ()=>{
    return supabaseUrl !== '' && supabaseAnonKey !== '';
};
// Create Supabase client only if configured
let supabaseInstance = null;
const getSupabase = ()=>{
    if (!isSupabaseConfigured()) //TURBOPACK unreachable
    ;
    if (!supabaseInstance) {
        supabaseInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
    }
    return supabaseInstance;
};
const supabase = isSupabaseConfigured() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/useDebateTimer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebateTimer",
    ()=>useDebateTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Default participants for demo mode
const defaultParticipants = [
    {
        id: '1',
        name: 'Grupo A',
        total_time: 120,
        remaining_time: 120,
        color: '#3498db'
    },
    {
        id: '2',
        name: 'Grupo B',
        total_time: 120,
        remaining_time: 120,
        color: '#e74c3c'
    },
    {
        id: '3',
        name: 'Grupo C',
        total_time: 120,
        remaining_time: 120,
        color: '#2ecc71'
    },
    {
        id: '4',
        name: 'Grupo D',
        total_time: 120,
        remaining_time: 120,
        color: '#f39c12'
    }
];
const defaultTimerState = {
    id: '1',
    current_speaker_id: null,
    status: 'stopped',
    started_at: null,
    updated_at: new Date().toISOString()
};
function useDebateTimer() {
    _s();
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultParticipants);
    const [timerState, setTimerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTimerState);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [useLocalMode, setUseLocalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate current remaining time based on started_at timestamp
    const calculateRemainingTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDebateTimer.useCallback[calculateRemainingTime]": (participant, state)=>{
            if (state.status !== 'running' || state.current_speaker_id !== participant.id || !state.started_at) {
                return participant.remaining_time;
            }
            const elapsed = Math.floor((Date.now() - new Date(state.started_at).getTime()) / 1000);
            return Math.max(0, participant.remaining_time - elapsed);
        }
    }["useDebateTimer.useCallback[calculateRemainingTime]"], []);
    // Fetch initial data from Supabase
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDebateTimer.useCallback[fetchData]": async ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() || !supabase) {
                setUseLocalMode(true);
                setIsLoading(false);
                return;
            }
            try {
                // Fetch participants
                const { data: participantsData, error: participantsError } = await supabase.from('participants').select('*').order('created_at', {
                    ascending: true
                });
                if (participantsError) throw participantsError;
                // Fetch timer state
                const { data: timerData, error: timerError } = await supabase.from('timer_state').select('*').single();
                if (timerError && timerError.code !== 'PGRST116') throw timerError;
                if (participantsData && participantsData.length > 0) {
                    setParticipants(participantsData.map({
                        "useDebateTimer.useCallback[fetchData]": (p)=>({
                                id: p.id,
                                name: p.name,
                                total_time: p.total_time,
                                remaining_time: p.remaining_time,
                                color: p.color || undefined
                            })
                    }["useDebateTimer.useCallback[fetchData]"]));
                }
                if (timerData) {
                    setTimerState({
                        id: timerData.id,
                        current_speaker_id: timerData.current_speaker_id,
                        status: timerData.status,
                        started_at: timerData.started_at,
                        updated_at: timerData.updated_at
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setUseLocalMode(true);
            } finally{
                setIsLoading(false);
            }
        }
    }["useDebateTimer.useCallback[fetchData]"], []);
    // Subscribe to realtime updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebateTimer.useEffect": ()=>{
            fetchData();
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() || !supabase) return;
            const channel = supabase.channel('debate-timer').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'participants'
            }, {
                "useDebateTimer.useEffect.channel": (payload)=>{
                    if (payload.eventType === 'UPDATE') {
                        const updated = payload.new;
                        setParticipants({
                            "useDebateTimer.useEffect.channel": (prev)=>prev.map({
                                    "useDebateTimer.useEffect.channel": (p)=>p.id === updated.id ? {
                                            ...p,
                                            remaining_time: updated.remaining_time,
                                            name: updated.name
                                        } : p
                                }["useDebateTimer.useEffect.channel"])
                        }["useDebateTimer.useEffect.channel"]);
                    }
                }
            }["useDebateTimer.useEffect.channel"]).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'timer_state'
            }, {
                "useDebateTimer.useEffect.channel": (payload)=>{
                    if (payload.eventType === 'UPDATE' || payload.eventType === 'INSERT') {
                        const updated = payload.new;
                        setTimerState({
                            id: updated.id,
                            current_speaker_id: updated.current_speaker_id,
                            status: updated.status,
                            started_at: updated.started_at,
                            updated_at: updated.updated_at
                        });
                    }
                }
            }["useDebateTimer.useEffect.channel"]).subscribe();
            return ({
                "useDebateTimer.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["useDebateTimer.useEffect"];
        }
    }["useDebateTimer.useEffect"], [
        fetchData
    ]);
    // Start timer for a participant
    const startTimer = async (participantId)=>{
        const now = new Date().toISOString();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setTimerState((prev)=>({
                    ...prev,
                    current_speaker_id: participantId,
                    status: 'running',
                    started_at: now,
                    updated_at: now
                }));
            return;
        }
        try {
            await supabase.from('timer_state').upsert({
                id: timerState.id,
                current_speaker_id: participantId,
                status: 'running',
                started_at: now,
                updated_at: now
            });
        } catch (error) {
            console.error('Error starting timer:', error);
        }
    };
    // Pause timer and save remaining time
    const pauseTimer = async ()=>{
        const currentSpeaker = participants.find((p)=>p.id === timerState.current_speaker_id);
        if (!currentSpeaker || !timerState.started_at) return;
        const remaining = calculateRemainingTime(currentSpeaker, timerState);
        const now = new Date().toISOString();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>prev.map((p)=>p.id === currentSpeaker.id ? {
                        ...p,
                        remaining_time: remaining
                    } : p));
            setTimerState((prev)=>({
                    ...prev,
                    status: 'paused',
                    started_at: null,
                    updated_at: now
                }));
            return;
        }
        try {
            // Update participant's remaining time
            await supabase.from('participants').update({
                remaining_time: remaining
            }).eq('id', currentSpeaker.id);
            // Update timer state
            await supabase.from('timer_state').update({
                status: 'paused',
                started_at: null,
                updated_at: now
            }).eq('id', timerState.id);
        } catch (error) {
            console.error('Error pausing timer:', error);
        }
    };
    // Stop timer completely
    const stopTimer = async ()=>{
        const currentSpeaker = participants.find((p)=>p.id === timerState.current_speaker_id);
        const now = new Date().toISOString();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (currentSpeaker && timerState.started_at && timerState.status === 'running') {
            const remaining = calculateRemainingTime(currentSpeaker, timerState);
            if (useLocalMode || !supabase) {
                setParticipants((prev)=>prev.map((p)=>p.id === currentSpeaker.id ? {
                            ...p,
                            remaining_time: remaining
                        } : p));
            } else {
                await supabase.from('participants').update({
                    remaining_time: remaining
                }).eq('id', currentSpeaker.id);
            }
        }
        if (useLocalMode || !supabase) {
            setTimerState((prev)=>({
                    ...prev,
                    current_speaker_id: null,
                    status: 'stopped',
                    started_at: null,
                    updated_at: now
                }));
            return;
        }
        try {
            await supabase.from('timer_state').update({
                current_speaker_id: null,
                status: 'stopped',
                started_at: null,
                updated_at: now
            }).eq('id', timerState.id);
        } catch (error) {
            console.error('Error stopping timer:', error);
        }
    };
    // Switch speaker
    const switchSpeaker = async (newSpeakerId)=>{
        // First pause current speaker
        await pauseTimer();
        // Then start new speaker
        await startTimer(newSpeakerId);
    };
    // Reset a participant's time
    const resetParticipantTime = async (participantId)=>{
        const participant = participants.find((p)=>p.id === participantId);
        if (!participant) return;
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>prev.map((p)=>p.id === participantId ? {
                        ...p,
                        remaining_time: p.total_time
                    } : p));
            return;
        }
        try {
            await supabase.from('participants').update({
                remaining_time: participant.total_time
            }).eq('id', participantId);
        } catch (error) {
            console.error('Error resetting participant time:', error);
        }
    };
    // Reset all timers
    const resetAllTimers = async ()=>{
        await stopTimer();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>prev.map((p)=>({
                        ...p,
                        remaining_time: p.total_time
                    })));
            return;
        }
        try {
            for (const p of participants){
                await supabase.from('participants').update({
                    remaining_time: p.total_time
                }).eq('id', p.id);
            }
        } catch (error) {
            console.error('Error resetting all timers:', error);
        }
    };
    // Add participant
    const addParticipant = async (name, totalTime, color)=>{
        const newId = String(Date.now());
        const newParticipant = {
            id: newId,
            name,
            total_time: totalTime,
            remaining_time: totalTime,
            color
        };
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>[
                    ...prev,
                    newParticipant
                ]);
            return;
        }
        try {
            await supabase.from('participants').insert({
                id: newId,
                name,
                total_time: totalTime,
                remaining_time: totalTime,
                color
            });
        } catch (error) {
            console.error('Error adding participant:', error);
        }
    };
    // Remove participant
    const removeParticipant = async (participantId)=>{
        if (timerState.current_speaker_id === participantId) {
            await stopTimer();
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>prev.filter((p)=>p.id !== participantId));
            return;
        }
        try {
            await supabase.from('participants').delete().eq('id', participantId);
        } catch (error) {
            console.error('Error removing participant:', error);
        }
    };
    // Update participant's total time
    const updateParticipantTime = async (participantId, totalTime)=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (useLocalMode || !supabase) {
            setParticipants((prev)=>prev.map((p)=>p.id === participantId ? {
                        ...p,
                        total_time: totalTime,
                        remaining_time: totalTime
                    } : p));
            return;
        }
        try {
            await supabase.from('participants').update({
                total_time: totalTime,
                remaining_time: totalTime
            }).eq('id', participantId);
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
        updateParticipantTime
    };
}
_s(useDebateTimer, "JbPDN1/I7etVvugnaZRMriwQInY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Timer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Timer-module__hiLHka__active",
  "blink": "Timer-module__hiLHka__blink",
  "large": "Timer-module__hiLHka__large",
  "name": "Timer-module__hiLHka__name",
  "progressBar": "Timer-module__hiLHka__progressBar",
  "progressFill": "Timer-module__hiLHka__progressFill",
  "pulse": "Timer-module__hiLHka__pulse",
  "small": "Timer-module__hiLHka__small",
  "time": "Timer-module__hiLHka__time",
  "timeUp": "Timer-module__hiLHka__timeUp",
  "timer": "Timer-module__hiLHka__timer",
});
}),
"[project]/app/components/Timer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Timer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Timer({ remainingTime, totalTime, isActive, isRunning, participantName, participantColor = '#3498db', size = 'small', showName = true }) {
    _s();
    const [displayTime, setDisplayTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(remainingTime);
    // Update display time when remainingTime changes or when running
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timer.useEffect": ()=>{
            setDisplayTime(remainingTime);
            if (!isActive || !isRunning) return;
            const interval = setInterval({
                "Timer.useEffect.interval": ()=>{
                    setDisplayTime({
                        "Timer.useEffect.interval": (prev)=>Math.max(0, prev - 1)
                    }["Timer.useEffect.interval"]);
                }
            }["Timer.useEffect.interval"], 1000);
            return ({
                "Timer.useEffect": ()=>clearInterval(interval)
            })["Timer.useEffect"];
        }
    }["Timer.useEffect"], [
        remainingTime,
        isActive,
        isRunning
    ]);
    // Format time as MM:SS
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    // Calculate percentage for color
    const percentage = totalTime > 0 ? displayTime / totalTime * 100 : 0;
    // Determine timer color based on remaining percentage
    const getTimerColor = ()=>{
        if (percentage > 50) return '#2ecc71'; // Green
        if (percentage > 10) return '#f39c12'; // Yellow/Orange
        return '#e74c3c'; // Red
    };
    // Check if should blink (last 10 seconds)
    const shouldBlink = displayTime <= 10 && displayTime > 0 && isRunning;
    const timerClasses = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timer,
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
        isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : '',
        shouldBlink ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blink : ''
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: timerClasses,
        style: {
            '--timer-color': getTimerColor(),
            '--participant-color': participantColor
        },
        children: [
            showName && participantName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                style: {
                    color: participantColor
                },
                children: participantName
            }, void 0, false, {
                fileName: "[project]/app/components/Timer.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                children: formatTime(displayTime)
            }, void 0, false, {
                fileName: "[project]/app/components/Timer.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            size === 'large' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressFill,
                    style: {
                        width: `${percentage}%`,
                        backgroundColor: getTimerColor()
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/Timer.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Timer.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            displayTime === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeUp,
                children: "TEMPO ESGOTADO!"
            }, void 0, false, {
                fileName: "[project]/app/components/Timer.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Timer.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Timer, "isRzA7nqFPkWjujIIHWyAQwuecY=");
_c = Timer;
var _c;
__turbopack_context__.k.register(_c, "Timer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ParticipantList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "empty": "ParticipantList-module__22A59q__empty",
  "list": "ParticipantList-module__22A59q__list",
  "participantCard": "ParticipantList-module__22A59q__participantCard",
  "participants": "ParticipantList-module__22A59q__participants",
  "title": "ParticipantList-module__22A59q__title",
});
}),
"[project]/app/components/ParticipantList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticipantList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Timer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/ParticipantList.module.css [app-client] (css module)");
'use client';
;
;
;
function ParticipantList({ participants, timerState, calculateRemainingTime }) {
    // Filter out the active speaker for the sidebar list
    const inactiveParticipants = participants.filter((p)=>p.id !== timerState.current_speaker_id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Participantes"
            }, void 0, false, {
                fileName: "[project]/app/components/ParticipantList.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].participants,
                children: [
                    inactiveParticipants.map((participant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].participantCard,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                remainingTime: calculateRemainingTime(participant, timerState),
                                totalTime: participant.total_time,
                                isActive: false,
                                isRunning: false,
                                participantName: participant.name,
                                participantColor: participant.color,
                                size: "small"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ParticipantList.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, participant.id, false, {
                            fileName: "[project]/app/components/ParticipantList.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)),
                    inactiveParticipants.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                        children: "Nenhum participante em espera"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ParticipantList.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ParticipantList.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ParticipantList.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ParticipantList;
var _c;
__turbopack_context__.k.register(_c, "ParticipantList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeTimerSection": "page-module__E0kJGG__activeTimerSection",
  "adminLink": "page-module__E0kJGG__adminLink",
  "allParticipants": "page-module__E0kJGG__allParticipants",
  "centerSection": "page-module__E0kJGG__centerSection",
  "footer": "page-module__E0kJGG__footer",
  "fullscreenBtn": "page-module__E0kJGG__fullscreenBtn",
  "fullscreenTimer": "page-module__E0kJGG__fullscreenTimer",
  "header": "page-module__E0kJGG__header",
  "loading": "page-module__E0kJGG__loading",
  "main": "page-module__E0kJGG__main",
  "mainWithSidebar": "page-module__E0kJGG__mainWithSidebar",
  "noSpeaker": "page-module__E0kJGG__noSpeaker",
  "participantCard": "page-module__E0kJGG__participantCard",
  "sidebar": "page-module__E0kJGG__sidebar",
  "subtitle": "page-module__E0kJGG__subtitle",
  "timerContainer": "page-module__E0kJGG__timerContainer",
  "title": "page-module__E0kJGG__title",
});
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useDebateTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/useDebateTimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Timer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ParticipantList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function PublicPage() {
    _s();
    const { participants, timerState, isLoading, calculateRemainingTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useDebateTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebateTimer"])();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicPage.useCallback[toggleFullscreen]": ()=>{
            if (!document.fullscreenElement) {
                timerRef.current?.requestFullscreen();
                setIsFullscreen(true);
            } else {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    }["PublicPage.useCallback[toggleFullscreen]"], []);
    // Listen for fullscreen changes (e.g., user presses Escape)
    if ("TURBOPACK compile-time truthy", 1) {
        document.onfullscreenchange = ()=>{
            setIsFullscreen(!!document.fullscreenElement);
        };
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
            children: "A carregar..."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    }
    const activeSpeaker = participants.find((p)=>p.id === timerState.current_speaker_id);
    const isRunning = timerState.status === 'running';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: activeSpeaker ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainWithSidebar : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Cronómetro de Debate"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: timerState.status === 'running' ? 'Em curso' : timerState.status === 'paused' ? 'Pausado' : 'A aguardar início'
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTimerSection,
                        children: activeSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: timerRef,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timerContainer} ${isFullscreen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullscreenTimer : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    remainingTime: calculateRemainingTime(activeSpeaker, timerState),
                                    totalTime: activeSpeaker.total_time,
                                    isActive: true,
                                    isRunning: isRunning,
                                    participantName: activeSpeaker.name,
                                    participantColor: activeSpeaker.color,
                                    size: "large"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleFullscreen,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullscreenBtn,
                                    title: isFullscreen ? 'Sair do ecrã inteiro' : 'Ver em ecrã inteiro',
                                    children: isFullscreen ? '⛶ Sair' : '⛶ Ecrã Inteiro'
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noSpeaker,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Nenhum orador selecionado"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Aguarde que o moderador inicie o debate"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].allParticipants,
                                    children: participants.map((participant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].participantCard,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                remainingTime: participant.remaining_time,
                                                totalTime: participant.total_time,
                                                isActive: false,
                                                isRunning: false,
                                                participantName: participant.name,
                                                participantColor: participant.color,
                                                size: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        }, participant.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminLink,
                            children: "Área de Gestão (Moderador)"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            activeSpeaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ParticipantList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    participants: participants,
                    timerState: timerState,
                    calculateRemainingTime: calculateRemainingTime
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(PublicPage, "aqkE4JlAA2S5BUu57LigNLGJLR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useDebateTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebateTimer"]
    ];
});
_c = PublicPage;
var _c;
__turbopack_context__.k.register(_c, "PublicPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_948e6768._.js.map