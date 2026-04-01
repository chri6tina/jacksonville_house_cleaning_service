import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load variables from .env.local directly
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Supabase URL or Service Role Key missing from .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log('Starting migration from blogs.json to Supabase...');
  try {
    const dbPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
    const fileData = fs.readFileSync(dbPath, 'utf8');
    const blogs = JSON.parse(fileData);

    if (!blogs || blogs.length === 0) {
      console.log('No blogs found to migrate.');
      return;
    }

    // Insert blogs payload
    const { data, error } = await supabase
      .from('blogs')
      .upsert(blogs, { onConflict: 'slug' })
      .select();

    if (error) {
      console.error('Migration failed:', error);
    } else {
      console.log(`Successfully migrated ${data.length} blogs to Supabase!`);
    }
  } catch (err) {
    console.error('Error executing migration:', err);
  }
}

migrate();
