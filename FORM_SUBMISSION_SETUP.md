# Form Submission Setup Guide

## 🎯 **How You'll Receive Form Submissions**

Your contact forms are now fully functional and will send data to you in real-time! Here's how it works:

### **Current Setup (Immediate)**
- ✅ Forms are submitted to `/api/contact-form`
- ✅ Data is logged to your server console
- ✅ Form validation and error handling
- ✅ Success/error messages for users
- ✅ Analytics tracking

### **What You'll See in Console (Right Now)**
```
=== NEW CONTACT FORM SUBMISSION ===
Name: John Smith
Phone: (904) 555-1234
Service: Complete Post-Construction Cleanup
Source: post-construction-hero
Page: post-construction-cleaning
Timestamp: 2024-01-15T10:30:00.000Z
===================================
```

## 📧 **Email Setup Options (Choose One)**

### **Option 1: SendGrid (Recommended for Business)**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Install: `npm install @sendgrid/mail`
4. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   NOTIFICATION_EMAIL=your-email@domain.com
   ```

### **Option 2: Gmail with Nodemailer**
1. Install: `npm install nodemailer`
2. Add to `.env.local`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your_app_password
   NOTIFICATION_EMAIL=your-email@domain.com
   ```

### **Option 3: AWS SES**
1. Set up AWS SES
2. Install: `npm install @aws-sdk/client-ses`
3. Add to `.env.local`:
   ```
   AWS_ACCESS_KEY_ID=your_key
   AWS_SECRET_ACCESS_KEY=your_secret
   AWS_REGION=us-east-1
   NOTIFICATION_EMAIL=your-email@domain.com
   ```

## 🚀 **Quick Email Setup (SendGrid Example)**

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Update the API route** (`src/app/api/contact-form/route.ts`):
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   // Initialize SendGrid
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   // In the POST function, replace the TODO section with:
   const emailContent = `
     🚨 NEW QUOTE REQUEST 🚨
     
     Name: ${body.name}
     Phone: ${body.phone}
     Service: ${body.service}
     Source: ${body.source}
     Page: ${body.page}
     Time: ${body.timestamp}
     
     ⚡ CONTACT THEM WITHIN 1 HOUR! ⚡
   `;
   
   await sgMail.send({
     to: process.env.NOTIFICATION_EMAIL!,
     from: 'noreply@yourdomain.com',
     subject: `🔥 New Quote Request: ${body.service}`,
     text: emailContent,
     html: emailContent.replace(/\n/g, '<br>')
   });
   ```

3. **Add environment variables** to `.env.local`:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   NOTIFICATION_EMAIL=your-email@domain.com
   ```

## 📱 **What You'll Receive**

### **Email Subject:** `🔥 New Quote Request: Complete Post-Construction Cleanup`

### **Email Content:**
```
🚨 NEW QUOTE REQUEST 🚨

Name: John Smith
Phone: (904) 555-1234
Service: Complete Post-Construction Cleanup
Source: post-construction-hero
Page: post-construction-cleaning
Time: 2024-01-15T10:30:00.000Z

⚡ CONTACT THEM WITHIN 1 HOUR! ⚡
```

## 🔄 **Alternative: Database Storage**

If you want to store submissions in a database:

1. **Install Prisma:**
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

2. **Create Contact model:**
   ```prisma
   model Contact {
     id        String   @id @default(cuid())
     name      String
     phone     String
     service   String?
     source    String
     page      String
     timestamp DateTime @default(now())
     contacted Boolean  @default(false)
   }
   ```

3. **Store submissions** in the API route

## 📊 **Analytics & Tracking**

Forms automatically track:
- ✅ Form submissions
- ✅ Service types requested
- ✅ Source (which form)
- ✅ Page location
- ✅ Timestamp

## 🚨 **Immediate Action Required**

1. **Choose an email service** (SendGrid recommended)
2. **Set up environment variables**
3. **Test the form** by submitting a test entry
4. **Check your email** for notifications

## 💡 **Pro Tips**

- **Set up email forwarding** to your phone for instant notifications
- **Use email filters** to organize quote requests
- **Create email templates** for professional responses
- **Set up auto-responders** to acknowledge receipt

## 🔧 **Troubleshooting**

- **Check console logs** for form submissions
- **Verify environment variables** are set correctly
- **Test API endpoint** at `/api/contact-form`
- **Check email spam folder**

---

**Your forms are now LIVE and collecting real leads! 🎉**

Set up email notifications to start receiving quote requests immediately.
