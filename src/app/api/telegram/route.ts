import { NextRequest, NextResponse } from 'next/server';

// Standardized payload interface that the frontend components will compile to
export interface TelegramPayload {
  source: string; // e.g., 'Quick Quote Header', 'Deep Cleaning Calculator', etc.
  name: string;
  phone: string;
  email?: string;
  serviceNeeded?: string;
  squareFootage?: string;
  estimatedPrice?: string;
  message?: string;
  rawDetails?: Record<string, any>; // Catch-all for checkboxes or unique form data
}

export async function POST(request: NextRequest) {
  try {
    const payload: TelegramPayload = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('CRITICAL: Telegram credentials missing from .env.local');
      return NextResponse.json(
        { error: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    // Format the alert with bolding (Telegram HTML/Markdown logic)
    // We use HTML since it's more stable for variable injection in Telegram
    let messageText = `🚨 <b>NEW LEAD: ${payload.source.toUpperCase()}</b>\n\n`;
    messageText += `<b>Name:</b> ${payload.name}\n`;
    messageText += `<b>Phone:</b> ${payload.phone}\n`;
    
    if (payload.email) messageText += `<b>Email:</b> ${payload.email}\n`;
    if (payload.serviceNeeded) messageText += `<b>Service:</b> ${payload.serviceNeeded}\n`;
    if (payload.squareFootage) messageText += `<b>Size:</b> ${payload.squareFootage}\n`;
    if (payload.estimatedPrice) messageText += `<b>Est. Quote Given:</b> ${payload.estimatedPrice}\n`;
    if (payload.message) messageText += `\n<b>Notes:</b>\n<i>${payload.message}</i>\n`;

    // Process any additional unique details (like checkmarks from the calculator)
    if (payload.rawDetails && Object.keys(payload.rawDetails).length > 0) {
      messageText += `\n<b>Extra Details:</b>\n`;
      for (const [key, value] of Object.entries(payload.rawDetails)) {
        // Only include truthful boolean checkboxes or string values
        if (value) {
            messageText += `- ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: ${value}\n`;
        }
      }
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API rejected the payload:', errorText);
      throw new Error(`Telegram API Error: ${telegramResponse.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead forwarded successfully',
      id: `LEAD-${Date.now()}`
    });

  } catch (error) {
    console.error('Error forwarding lead to Telegram:', error);
    
    // Returning 500 allows frontend tracking components to catch and display the "Call us directly" fallback
    return NextResponse.json(
      { error: 'Failed to process lead submission' },
      { status: 500 }
    );
  }
}
