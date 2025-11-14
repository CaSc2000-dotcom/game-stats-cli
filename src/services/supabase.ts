import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ixgfzxmweunyfyfdtwvi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Z2Z6eG13ZXVueWZ5ZmR0d3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MTUxMTMsImV4cCI6MjA3NzE5MTExM30.5M3zeVhFsMUwDb1SuW4GKuAQY8ihoYqShIvNGbcTSgg';

export const supabase = createClient(supabaseUrl, supabaseKey);