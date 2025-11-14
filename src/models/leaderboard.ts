import { LeaderboardEntry } from "./leaderboard_entry.js";
import { mergeSort } from "../utils/sorting_algorithms.js";

export enum SortBy {
    USERNAME,
    SCORE
}
export enum SortOrder {
    ASCENDING,
    DESCENDING
}

export class Leaderboard {
    private entries: LeaderboardEntry[];
    private currentSort!: { by: SortBy; order: SortOrder; };

    constructor(entries: LeaderboardEntry[] = [], 
                sortBy: SortBy = SortBy.SCORE, 
                sortOrder: SortOrder = SortOrder.DESCENDING) {
        const currentSort = { by: sortBy, order: sortOrder };
        this.entries = entries;
        this.sort(currentSort.by, currentSort.order);
    }

    get Entries(): LeaderboardEntry[] {
        return this.entries;
    }
    get CurrentSort(): { by: SortBy; order: SortOrder; } {
        return this.currentSort;
    }

    getSortBy(): string {
        switch (this.currentSort.by) {
            case SortBy.USERNAME:
                return "USERNAME";
            case SortBy.SCORE:
                return "SCORE";
        }
    }
    getSortOrder(): string {
        switch (this.currentSort.order) {
            case SortOrder.ASCENDING:
                return "ASCENDING";
            case SortOrder.DESCENDING:
                return "DESCENDING";
        }
    }

    sort(by: SortBy, order: SortOrder): void {
        const compareFunc = (a: LeaderboardEntry, b: LeaderboardEntry): number => {
            let comparison = 0;
            if (by === SortBy.USERNAME) {
                comparison = a.username.localeCompare(b.username);
            } else {
                comparison = a.score - b.score;
            }
            return order === SortOrder.ASCENDING ? comparison : -comparison;
        };
        
        this.entries = mergeSort(this.entries, compareFunc);
        this.currentSort = { by, order };   
    }
}