import { Leaderboard } from "./models/leaderboard.js";
import { LeaderboardEntry } from "./models/leaderboard_entry.js";
import { displayLeaderboard } from "./utils/ui_displays.js";

// Sample data for demonstration
let leaderboard = new Leaderboard([
    new LeaderboardEntry("Kirbii", 2000),
    new LeaderboardEntry("Hazelry", 1500),
    new LeaderboardEntry("Mako", 1800),
    new LeaderboardEntry("Reto", 1200),]
); 

// Display the leaderboard
displayLeaderboard(leaderboard);
console.log(`Sorted by: ${leaderboard.getSortBy()} (${leaderboard.getSortOrder()})`);