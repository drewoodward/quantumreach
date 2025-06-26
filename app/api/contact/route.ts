// File: app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure transporter using .env.local variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const { email, message } = await request.json();

  // Compose email body including both fields
  const emailBody = `You have a new inquiry from: ${email}

Message:
${message}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'New Contact Inquiry',
      text: emailBody,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
