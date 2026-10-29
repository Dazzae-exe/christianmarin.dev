import { PostgrestClient } from '@supabase/postgrest-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL is not defined. Please set it in your environment configuration.',
  );
}

if (!supabaseKey) {
  throw new Error(
    'VITE_SUPABASE_PUBLISHABLE_KEY is not defined. Please set it in your environment configuration.',
  );
}

const supabase = new PostgrestClient(new URL('rest/v1', supabaseUrl).href, {
  headers: { apikey: supabaseKey },
});
export default supabase;
