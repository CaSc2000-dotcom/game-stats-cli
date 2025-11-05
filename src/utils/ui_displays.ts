import { Leaderboard } from "../models/leaderboard.js";

export function displayLeaderboard(leaderboard: Leaderboard): void {
    console.log("===========================================");
    console.log("    GAME LEADERBOARD - Top 10 Players      ");
    console.log("===========================================");
    console.log();
    console.log("Rank | Player Name      | Score    | Games Played");
    console.log("-----|------------------|----------|-------------");
    // Display each leaderboard entry
    // AD HOC
    leaderboard.Entries.forEach((entry, index) => {
        console.log(`${entry.username} | ${entry.score}`);
    });
    console.log("===========================================");
}