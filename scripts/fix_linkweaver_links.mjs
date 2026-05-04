import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("Missing supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

async function fixLinks() {
  console.log("Fetching blogs from Supabase...");
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id, title, content');

  if (error || !blogs) {
    console.error("Supabase Error fetching blogs:", error);
    process.exit(1);
  }

  let totalChanges = 0;

  for (const blog of blogs) {
    let originalContent = blog.content;
    if (!originalContent) continue;

    let newContent = originalContent;

    // The Link Weaver mapped the following:
    // /services/house-cleaning -> /standard-cleaning
    // /services/deep-cleaning -> /deep-cleaning
    // /services/move-in-move-out -> /move-in-move-out

    newContent = newContent.replace(/\(\/services\/house-cleaning\)/g, '(/standard-cleaning)');
    newContent = newContent.replace(/\(\/services\/deep-cleaning\)/g, '(/deep-cleaning)');
    newContent = newContent.replace(/\(\/services\/move-in-move-out\)/g, '(/move-in-move-out)');

    if (newContent !== originalContent) {
      console.log(`Fixing links in blog: ${blog.title}`);
      const { error: updateError } = await supabase
        .from('blogs')
        .update({ content: newContent })
        .eq('id', blog.id);

      if (updateError) {
        console.error(`Error updating ${blog.title}:`, updateError);
      } else {
        totalChanges++;
      }
    }
  }

  console.log(`\nDone. Fixed 404 links in ${totalChanges} blog posts.`);
}

fixLinks();
