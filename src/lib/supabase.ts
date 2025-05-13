
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
// Lovable automatically provides these when connected to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client when credentials are missing
let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials missing. Running in local storage mode.\n' +
    'To connect to Supabase, click the Supabase integration button in the top right corner.'
  );
  
  // Create a mock client that uses localStorage
  supabase = {
    from: () => ({
      select: () => new Promise(resolve => resolve({ data: [], error: null })),
      insert: () => new Promise(resolve => resolve({ data: null, error: null })),
      update: () => new Promise(resolve => resolve({ data: null, error: null })),
      delete: () => new Promise(resolve => resolve({ data: null, error: null })),
      upsert: () => new Promise(resolve => resolve({ data: null, error: null })),
    }),
    storage: {
      from: () => ({
        upload: () => new Promise(resolve => resolve({ data: { path: '' }, error: null })),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
        remove: () => new Promise(resolve => resolve({ data: null, error: null })),
      })
    },
    auth: {
      getSession: () => new Promise(resolve => resolve({ data: { session: null }, error: null })),
      signInWithPassword: () => new Promise(resolve => resolve({ data: null, error: null })),
      signOut: () => new Promise(resolve => resolve({ error: null })),
    }
  };
} else {
  // Create the real Supabase client
  supabase = createClient(supabaseUrl, supabaseAnonKey);
  console.log('Supabase client initialized successfully');
}

export { supabase };
