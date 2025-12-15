module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabase",
    ()=>getSupabase,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
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
        supabaseInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
    }
    return supabaseInstance;
};
const supabase = isSupabaseConfigured() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
}),
"[project]/app/lib/useDebateTimer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebateTimer",
    ()=>useDebateTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/supabase.ts [app-ssr] (ecmascript)");
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
    const [participants, setParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultParticipants);
    const [timerState, setTimerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTimerState);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [useLocalMode, setUseLocalMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate current remaining time based on started_at timestamp
    const calculateRemainingTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((participant, state)=>{
        if (state.status !== 'running' || state.current_speaker_id !== participant.id || !state.started_at) {
            return participant.remaining_time;
        }
        const elapsed = Math.floor((Date.now() - new Date(state.started_at).getTime()) / 1000);
        return Math.max(0, participant.remaining_time - elapsed);
    }, []);
    // Fetch initial data from Supabase
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() || !supabase) {
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
                setParticipants(participantsData.map((p)=>({
                        id: p.id,
                        name: p.name,
                        total_time: p.total_time,
                        remaining_time: p.remaining_time,
                        color: p.color || undefined
                    })));
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
    }, []);
    // Subscribe to realtime updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])() || !supabase) return;
        const channel = supabase.channel('debate-timer').on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'participants'
        }, (payload)=>{
            if (payload.eventType === 'UPDATE') {
                const updated = payload.new;
                setParticipants((prev)=>prev.map((p)=>p.id === updated.id ? {
                            ...p,
                            remaining_time: updated.remaining_time,
                            name: updated.name
                        } : p));
            }
        }).on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'timer_state'
        }, (payload)=>{
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
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, [
        fetchData
    ]);
    // Start timer for a participant
    const startTimer = async (participantId)=>{
        const now = new Date().toISOString();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
}),
"[project]/app/components/Controls.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Controls-module__ElUXYq__active",
  "activeLabel": "Controls-module__ElUXYq__activeLabel",
  "addForm": "Controls-module__ElUXYq__addForm",
  "addParticipant": "Controls-module__ElUXYq__addParticipant",
  "btn": "Controls-module__ElUXYq__btn",
  "buttonGroup": "Controls-module__ElUXYq__buttonGroup",
  "colorBtn": "Controls-module__ElUXYq__colorBtn",
  "colorPicker": "Controls-module__ElUXYq__colorPicker",
  "colors": "Controls-module__ElUXYq__colors",
  "controls": "Controls-module__ElUXYq__controls",
  "currentSpeaker": "Controls-module__ElUXYq__currentSpeaker",
  "danger": "Controls-module__ElUXYq__danger",
  "editTimeInput": "Controls-module__ElUXYq__editTimeInput",
  "editTimeLabel": "Controls-module__ElUXYq__editTimeLabel",
  "editTimeRow": "Controls-module__ElUXYq__editTimeRow",
  "globalControls": "Controls-module__ElUXYq__globalControls",
  "input": "Controls-module__ElUXYq__input",
  "participantActions": "Controls-module__ElUXYq__participantActions",
  "participantCard": "Controls-module__ElUXYq__participantCard",
  "participantInfo": "Controls-module__ElUXYq__participantInfo",
  "participantName": "Controls-module__ElUXYq__participantName",
  "participantTime": "Controls-module__ElUXYq__participantTime",
  "participantsList": "Controls-module__ElUXYq__participantsList",
  "paused": "Controls-module__ElUXYq__paused",
  "primary": "Controls-module__ElUXYq__primary",
  "pulse": "Controls-module__ElUXYq__pulse",
  "running": "Controls-module__ElUXYq__running",
  "secondary": "Controls-module__ElUXYq__secondary",
  "selected": "Controls-module__ElUXYq__selected",
  "small": "Controls-module__ElUXYq__small",
  "status": "Controls-module__ElUXYq__status",
  "statusBadge": "Controls-module__ElUXYq__statusBadge",
  "statusInfo": "Controls-module__ElUXYq__statusInfo",
  "stopped": "Controls-module__ElUXYq__stopped",
  "success": "Controls-module__ElUXYq__success",
  "timeInput": "Controls-module__ElUXYq__timeInput",
  "warning": "Controls-module__ElUXYq__warning",
});
}),
"[project]/app/components/Controls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Controls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Controls.module.css [app-ssr] (css module)");
'use client';
;
;
;
const COLORS = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#e91e63',
    '#00bcd4'
];
function Controls({ participants, timerState, onStartTimer, onPauseTimer, onStopTimer, onSwitchSpeaker, onResetParticipant, onResetAll, onAddParticipant, onRemoveParticipant, onUpdateParticipantTime }) {
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newTime, setNewTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(120);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(COLORS[0]);
    const [editingTime, setEditingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editTimeValue, setEditTimeValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleAddParticipant = ()=>{
        if (newName.trim()) {
            onAddParticipant(newName.trim(), newTime, selectedColor);
            setNewName('');
            setSelectedColor(COLORS[(COLORS.indexOf(selectedColor) + 1) % COLORS.length]);
        }
    };
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    const handleEditTime = (participant)=>{
        setEditingTime(participant.id);
        setEditTimeValue(participant.total_time);
    };
    const handleSaveTime = (participantId)=>{
        onUpdateParticipantTime(participantId, editTimeValue);
        setEditingTime(null);
    };
    const handleCancelEdit = ()=>{
        setEditingTime(null);
    };
    const isRunning = timerState.status === 'running';
    const isPaused = timerState.status === 'paused';
    const currentSpeaker = participants.find((p)=>p.id === timerState.current_speaker_id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Estado Atual"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][timerState.status]}`,
                                children: timerState.status === 'running' ? '▶ A Correr' : timerState.status === 'paused' ? '⏸ Pausado' : '⏹ Parado'
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            currentSpeaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentSpeaker,
                                children: [
                                    "A falar: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: currentSpeaker.color
                                        },
                                        children: currentSpeaker.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Controls.tsx",
                                        lineNumber: 86,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Controls.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].globalControls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Controles Globais"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonGroup,
                        children: [
                            isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPauseTimer,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warning}`,
                                children: "⏸ Pausar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this) : currentSpeaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStartTimer(currentSpeaker.id),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success}`,
                                children: "▶ Continuar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStopTimer,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].danger}`,
                                children: "⏹ Parar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onResetAll,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondary}`,
                                children: "🔄 Reset Todos"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Controls.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantsList,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Participantes"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    participants.map((participant)=>{
                        const isActive = timerState.current_speaker_id === participant.id;
                        const isEditing = editingTime === participant.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantCard} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            style: {
                                borderColor: participant.color
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantName,
                                            style: {
                                                color: participant.color
                                            },
                                            children: participant.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editTimeRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: editTimeValue,
                                                    onChange: (e)=>setEditTimeValue(Number(e.target.value)),
                                                    min: 10,
                                                    max: 3600,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editTimeInput
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Controls.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editTimeLabel,
                                                    children: "seg"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Controls.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSaveTime(participant.id),
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].small}`,
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Controls.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCancelEdit,
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].small}`,
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Controls.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantTime,
                                            onClick: ()=>handleEditTime(participant),
                                            title: "Clique para editar o tempo total",
                                            children: [
                                                formatTime(participant.remaining_time),
                                                " / ",
                                                formatTime(participant.total_time),
                                                " ✏️"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Controls.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].participantActions,
                                    children: [
                                        !isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSwitchSpeaker(participant.id),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].small}`,
                                            children: "▶ Iniciar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeLabel,
                                            children: "A FALAR"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onResetParticipant(participant.id),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].small}`,
                                            title: "Reset tempo",
                                            children: "🔄"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onRemoveParticipant(participant.id),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].danger} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].small}`,
                                            title: "Remover",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Controls.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Controls.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, participant.id, true, {
                            fileName: "[project]/app/components/Controls.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Controls.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addParticipant,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Adicionar Participante"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addForm,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: newName,
                                onChange: (e)=>setNewName(e.target.value),
                                placeholder: "Nome do grupo...",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeInput,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Tempo (segundos):"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Controls.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: newTime,
                                        onChange: (e)=>setNewTime(Number(e.target.value)),
                                        min: 10,
                                        max: 3600,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Controls.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorPicker,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Cor:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Controls.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colors,
                                        children: COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colorBtn} ${selectedColor === color ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : ''}`,
                                                style: {
                                                    backgroundColor: color
                                                },
                                                onClick: ()=>setSelectedColor(color)
                                            }, color, false, {
                                                fileName: "[project]/app/components/Controls.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Controls.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddParticipant,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].success}`,
                                disabled: !newName.trim(),
                                children: "+ Adicionar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Controls.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Controls.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Controls.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Controls.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backLink": "page-module__Z-3nqa__backLink",
  "content": "page-module__Z-3nqa__content",
  "header": "page-module__Z-3nqa__header",
  "loading": "page-module__Z-3nqa__loading",
  "localModeNotice": "page-module__Z-3nqa__localModeNotice",
  "main": "page-module__Z-3nqa__main",
  "subtitle": "page-module__Z-3nqa__subtitle",
  "title": "page-module__Z-3nqa__title",
});
}),
"[project]/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useDebateTimer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/useDebateTimer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Controls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/admin/page.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AdminPage() {
    const { participants, timerState, isLoading, useLocalMode, startTimer, pauseTimer, stopTimer, switchSpeaker, resetParticipantTime, resetAllTimers, addParticipant, removeParticipant, updateParticipantTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$useDebateTimer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebateTimer"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
            children: "A carregar..."
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Painel de Gestão"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Controle do cronómetro de debate"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backLink,
                        children: "← Voltar à visualização pública"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    useLocalMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].localModeNotice,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "⚠️ Modo Local Ativo"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Configure as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY para sincronização em tempo real"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Controls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        participants: participants,
                        timerState: timerState,
                        onStartTimer: startTimer,
                        onPauseTimer: pauseTimer,
                        onStopTimer: stopTimer,
                        onSwitchSpeaker: switchSpeaker,
                        onResetParticipant: resetParticipantTime,
                        onResetAll: resetAllTimers,
                        onAddParticipant: addParticipant,
                        onRemoveParticipant: removeParticipant,
                        onUpdateParticipantTime: updateParticipantTime
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8adcd343._.js.map