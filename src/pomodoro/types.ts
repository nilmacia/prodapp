import { XTime } from "../lib/time";

export interface PomodoroState {
    mode: "strict" | "long"; // 25 min focus vs 50 min focus
    turn: number; // 1-4
    stage: "work" | "rest";
    next: XTime;
    activity?: string; // ID for a time-tracked activity
}
