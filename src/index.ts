import { displayLeaderboard, displaySortMenu } from "./utils/ui_displays.js";
import { fetchLeaderboard } from './services/leaderboard_service.js';
import { Leaderboard } from "./models/leaderboard.js";

console.log("Loading leaderboard...");
const data = await fetchLeaderboard();
let leaderboard = new Leaderboard(data);

// Display the leaderboard
displayLeaderboard(leaderboard);
console.log(`Sorted by: ${leaderboard.getSortBy()} (${leaderboard.getSortOrder()})`);

// Display sort menu
let continueLoop = true;
while (continueLoop) {
    continueLoop = await displaySortMenu(leaderboard);
}