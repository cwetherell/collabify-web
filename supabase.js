// Supabase client setup for browser
const SUPABASE_URL = "https://gqiitujvxbkigrujqkbe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaWl0dWp2eGJraWdydWpxa2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzgzODIsImV4cCI6MjA3NzE1NDM4Mn0.9iK_lROquUPquDe3uYpDKIrIJvJE_FgrFr6KVfKZU5U";

// Load Supabase client from CDN
// Add this to your HTML: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js"></script>

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other scripts
window.supabase = supabase;
