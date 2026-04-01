import { NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/lib/telegram';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { pathname, referrer, time } = body;

    // Build the Notification Payload
    const message = `👀 <b>New Visitor on Website!</b>\n\n<b>Time:</b> ${time}\n<b>Page:</b> ${pathname}\n<b>Referrer:</b> ${referrer || 'Direct Traffic'}\n\n<i>This notification was triggered once for this unique session to prevent spam.</i>`;

    // Fire & Forget to Telegram
    await sendTelegramMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to relay visitor to Telegram:', error);
    // Silent fail so we don't break the client app
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
