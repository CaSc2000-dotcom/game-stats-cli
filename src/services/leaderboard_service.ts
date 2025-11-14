import { supabase } from './supabase.js';
import { LeaderboardEntry } from '../models/leaderboard_entry.js';

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
    const { data, error } = await supabase
        .from('leaderboard')
        .select('username, score');
    
    if (error) {
        throw new Error(`Failed to fetch leaderboard: ${error.message}`);
    }
    
    return data.map(row => new LeaderboardEntry(row.username, row.score));
}