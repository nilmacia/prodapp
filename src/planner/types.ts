import { AbsoluteTime, DayTime, WeekDay, Duration, FlexibleMonthDay, FlexibleYearDay } from "../lib/time";

// === Events ===

export interface PlannerEvent {
    title: string;
    time: AbsoluteTime;
    duration: Duration;
}

// === Routines ===

export type PlannerRoutine = DailyRoutine | WeeklyRoutine | MonthlyRoutine | YearlyRoutine;

interface DailyRoutine {
    title: string;
    recurrenceType: "daily";
    time: DayTime;
    duration: Duration; 
}

interface WeeklyRoutine {
    title: string;
    recurrenceType: "weekly";
    weekDays: WeekDay[];
    time: DayTime;
    duration: Duration;
}

interface MonthlyRoutine {
    title: string;
    recurrenceType: "monthly";
    day: FlexibleMonthDay;
    time: DayTime;
    duration: Duration;
}

interface YearlyRoutine {
    title: string;
    recurrenceType: "yearly";
    day: FlexibleYearDay;
    time: DayTime;
    duration: Duration;
}

// === Materialized ===

export interface PlannerEntry {
    title: string;
    time: AbsoluteTime;
    duration: Duration;
    origin: string; // ID for a PlannerEvent | PlannerRoutine
}
