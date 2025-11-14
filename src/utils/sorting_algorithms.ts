import { LeaderboardEntry } from "../models/leaderboard_entry.js";

export function mergeSort(
    entries: LeaderboardEntry[], 
    compareFunc: (a: LeaderboardEntry, b: LeaderboardEntry) => number
): LeaderboardEntry[] {
    // Base case
    if (entries.length <= 1) return entries;
    
    // Divide
    const mid = Math.floor(entries.length / 2);
    const left = mergeSort(entries.slice(0, mid), compareFunc);
    const right = mergeSort(entries.slice(mid), compareFunc);
    
    // Conquer (merge)
    return merge(left, right, compareFunc);
}

function merge(
    left: LeaderboardEntry[], 
    right: LeaderboardEntry[], 
    compareFunc: (a: LeaderboardEntry, b: LeaderboardEntry) => number
): LeaderboardEntry[] {
    const result: LeaderboardEntry[] = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (compareFunc(left[i]!, right[j]!) <= 0) {
            result.push(left[i++]!);
        } else {
            result.push(right[j++]!);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}