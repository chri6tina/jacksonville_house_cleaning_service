import fs from 'fs';
import path from 'path';

async function fetchChatId() {
  try {
    const token = '8717546092:AAHR0SxUsroorjvxYf0v1laUXuwaKEVz7hA';
    const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    const data = await response.json();

    if (!data.ok || data.result.length === 0) {
      console.log('No messages found');
      return;
    }

    // Get the Chat ID from the most recent message
    const chatId = data.result[data.result.length - 1].message.chat.id;
    console.log(`Extracted Chat ID: ${chatId}`);

    const envPath = path.resolve(process.cwd(), '.env.local');
    const appendStr = `\n# Telegram Notification Hub\nTELEGRAM_BOT_TOKEN=${token}\nTELEGRAM_CHAT_ID=${chatId}\n`;
    
    fs.appendFileSync(envPath, appendStr);
    console.log('Successfully appended Telegram keys to .env.local');
  } catch (err) {
    console.error('Failed to fetch Telegram Updates:', err);
  }
}

fetchChatId();
