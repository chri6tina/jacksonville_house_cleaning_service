import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  source: string;
  timestamp: string;
  page: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Log the submission (for now, you can replace this with actual email sending)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log('Name:', body.name);
    console.log('Phone:', body.phone);
    console.log('Service:', body.service);
    console.log('Source:', body.source);
    console.log('Page:', body.page);
    console.log('Timestamp:', body.timestamp);
    console.log('===================================');

    // TODO: Replace this with actual email sending logic
    // You can use services like:
    // - SendGrid (recommended for business)
    // - Nodemailer with Gmail
    // - AWS SES
    // - Resend.com
    
    // For now, we'll just return success
    // In production, you'd send an email here like:
    /*
    const emailContent = `
      New Quote Request from ${body.name}
      
      Contact: ${body.phone}
      Service: ${body.service}
      Source: ${body.source}
      Page: ${body.page}
      Time: ${body.timestamp}
      
      Please contact them within 1 hour!
    `;
    
    // Send email using your preferred service
    await sendEmail({
      to: 'your-email@domain.com',
      subject: `New Quote Request: ${body.service}`,
      text: emailContent
    });
    */

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: `FORM-${Date.now()}`
    });

  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact form API endpoint',
    note: 'Use POST method to submit contact forms'
  });
}





