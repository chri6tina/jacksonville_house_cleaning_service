export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn('Telegram Notification silently skipped: Missing BOT_TOKEN or CHAT_ID in environment variables.');
      return false;
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errTxt = await response.text();
      console.error('Telegram API Error:', errTxt);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to dispatch Telegram message:', error);
    return false;
  }
}
