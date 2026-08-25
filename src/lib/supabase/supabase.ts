import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL is not defined. Please set it in your environment configuration.',
  );
}

if (!supabaseKey) {
  throw new Error(
    'VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY is not defined. Please set it in your environment configuration.',
  );
}

const supabase = createClient(supabaseUrl as string, supabaseKey as string);
export default supabase;