export interface Reminder {
    type: "notification" | "alarm";
    time: XTime;
}

// There should be some relation between the planner and reminders and automation
