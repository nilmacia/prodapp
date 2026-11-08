import { Duration, AbsoluteDate } from "../lib/time";

export interface Activity {
    title: string;
    weeklyGoal: Duration;
}

export interface ActivityWeekRegistry {
    activity: string; // ID for an Activity
    time: Duration;
    weekStart: AbsoluteDate;
}
