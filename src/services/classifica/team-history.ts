export interface TeamHistory {
    teamName?: string,
    entries?: TeamHistoryEntry[]
}

export interface TeamHistoryEntry{
    eventName?: string,
    points?: number
}