import { NextRequest, NextResponse } from 'next/server';

interface ProjectSubmission {
  projectType: string;
  squareFootage: number;
  constructionPhase: string;
  debrisAmount: string;
  specialRequirements: string[];
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
    address: string;
    city: string;
    zipCode: string;
  };
  projectDetails: {
    description: string;
    startDate: string;
    completionDate: string;
  };
  pricing: {
    totalPrice: number;
    estimatedHours: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ProjectSubmission = await request.json();
    
    // Validate required fields
    if (!body.contactInfo.name || !body.contactInfo.email || !body.contactInfo.phone) {
      return NextResponse.json(
        { error: 'Missing required contact information' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to your database
    // 2. Send email notifications
    // 3. Integrate with CRM systems
    // 4. Log the submission
    
    // For now, we'll just log and return success
    console.log('New Project Submission:', {
      timestamp: new Date().toISOString(),
      ...body
    });

    // You could integrate with services like:
    // - SendGrid for email notifications
    // - HubSpot/Salesforce for CRM
    // - Google Sheets for tracking
    // - Slack/Discord for team notifications

    // Example email notification (you'd need to set up email service)
    // await sendProjectSubmissionEmail(body);
    
    // Example CRM integration (you'd need to set up CRM API)
    // await createCRMLead(body);

    return NextResponse.json({
      success: true,
      message: 'Project submission received successfully',
      submissionId: `PROJ-${Date.now()}`,
      estimatedResponseTime: '24 hours'
    });

  } catch (error) {
    console.error('Error processing project submission:', error);
    
    return NextResponse.json(
      { error: 'Failed to process project submission' },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve submissions (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    // This would typically require authentication
    // For now, we'll return a simple message
    
    return NextResponse.json({
      message: 'Project submissions API endpoint',
      note: 'Use POST method to submit new projects'
    });
    
  } catch (error) {
    console.error('Error in GET request:', error);
    
    return NextResponse.json(
      { error: 'Failed to retrieve data' },
      { status: 500 }
    );
  }
}

