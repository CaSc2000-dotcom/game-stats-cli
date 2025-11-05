import { LeaderboardEntry } from "./leaderboard_entry.js";

enum _sortBy {
    USERNAME,
    SCORE
}
enum _sortOrder {
    ASCENDING,
    DESCENDING
}

export class Leaderboard {
    private entries: LeaderboardEntry[];
    private currentSort!: { by: _sortBy; order: _sortOrder; };

    constructor(entries: LeaderboardEntry[] = [], 
                sortBy: _sortBy = _sortBy.SCORE, 
                sortOrder: _sortOrder = _sortOrder.DESCENDING) {
        const currentSort = { by: sortBy, order: sortOrder };
        this.entries = entries;
        this.sort(currentSort.by, currentSort.order);
    }

    get Entries(): LeaderboardEntry[] {
        return this.entries;
    }
    get CurrentSort(): { by: _sortBy; order: _sortOrder; } {
        return this.currentSort;
    }

    getSortBy(): string {
        switch (this.currentSort.by) {
            case _sortBy.USERNAME:
                return "USERNAME";
            case _sortBy.SCORE:
                return "SCORE";
        }
    }
    getSortOrder(): string {
        switch (this.currentSort.order) {
            case _sortOrder.ASCENDING:
                return "ASCENDING";
            case _sortOrder.DESCENDING:
                return "DESCENDING";
        }
    }

    sort(by: _sortBy, order: _sortOrder): void {
        this.entries.sort((a, b) => {
            let comparison = 0;
            if (by === _sortBy.USERNAME) {
                comparison = a.username.localeCompare(b.username);
            } else if (by === _sortBy.SCORE) {
                comparison = a.score - b.score;
            }
            return order === _sortOrder.ASCENDING ? comparison : -comparison;
        });
        this.currentSort = { by, order };
    }
}