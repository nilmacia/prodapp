export interface Note {
    name: string;
    path: string;
    neighbors: string[]; // Related notes IDs
    plannerItems: string[]; // Related Planner items IDs
    activities: string[]; // Related Activities IDs
}
