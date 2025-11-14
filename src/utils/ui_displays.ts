import { Leaderboard, SortBy, SortOrder } from "../models/leaderboard.js";
import * as readline from "readline";

export function displayLeaderboard(leaderboard: Leaderboard): void {
    console.log("===========================================");
    console.log("    GAME LEADERBOARD - All Players        ");
    console.log("===========================================\n");
    console.log("Rank | Player Name      | Score");
    console.log("-----|------------------|----------");
    
    leaderboard.Entries.forEach((entry, index) => {
        const rank = String(index + 1).padStart(4);
        const username = entry.username.padEnd(16);
        const score = entry.score.toLocaleString().padStart(8);
        console.log(`${rank} | ${username} | ${score}`);
    });
    
    console.log("===========================================");
}

export function displaySortMenu(leaderboard: Leaderboard): Promise<boolean> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log("\n=== SORT MENU ===");
        console.log("1. Sort by USERNAME (Ascending)");
        console.log("2. Sort by USERNAME (Descending)");
        console.log("3. Sort by SCORE (Ascending)");
        console.log("4. Sort by SCORE (Descending)");
        console.log("5. Exit");
        console.log("================\n");

        rl.question("Select an option (1-5): ", (answer: string) => {
            const choice = answer.trim();

            switch (choice) {
                case "1":
                    leaderboard.sort(SortBy.USERNAME, SortOrder.ASCENDING);
                    console.log("\nSorted by USERNAME (Ascending)\n");
                    displayLeaderboard(leaderboard);
                    rl.close();
                    resolve(true);
                    break;
                case "2":
                    leaderboard.sort(SortBy.USERNAME, SortOrder.DESCENDING);
                    console.log("\nSorted by USERNAME (Descending)\n");
                    displayLeaderboard(leaderboard);
                    rl.close();
                    resolve(true);
                    break;
                case "3":
                    leaderboard.sort(SortBy.SCORE, SortOrder.ASCENDING);
                    console.log("\nSorted by SCORE (Ascending)\n");
                    displayLeaderboard(leaderboard);
                    rl.close();
                    resolve(true);
                    break;
                case "4":
                    leaderboard.sort(SortBy.SCORE, SortOrder.DESCENDING);
                    console.log("\nSorted by SCORE (Descending)\n");
                    displayLeaderboard(leaderboard);
                    rl.close();
                    resolve(true);
                    break;
                case "5":
                    console.log("Exiting...\n");
                    rl.close();
                    resolve(false); // Exit loop
                    break;
                default:
                    console.log("Invalid option. Please select 1-5.\n");
                    rl.close();
                    resolve(true);
                    break;
            }
        });
    });
}