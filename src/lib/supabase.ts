
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
// Lovable automatically provides these when connected to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verify credentials availability and provide helpful error message
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Make sure your Lovable project is properly connected to Supabase.');
  // Throw an error with more helpful message to prevent silent failures
  throw new Error(
    'Supabase connection failed: Missing credentials. Please ensure your Lovable project is connected to Supabase through the Supabase integration button in the top right corner.'
  );
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Log successful connection (helpful for debugging)
console.log('Supabase client initialized successfully');
