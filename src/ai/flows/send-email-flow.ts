'use server';
/**
 * @fileOverview An email sending agent.
 *
 * - sendEmail - A function that handles sending emails.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';
import { PERSONAL_INFO } from '@/lib/data';

const SendEmailInputSchema = z.object({
  name: z.string().describe("The name of the person sending the message or subscribing."),
  email: z.string().email().describe("The email address of the person."),
  phone: z.string().optional().describe("The phone number of the person."),
  message: z.string().optional().describe("The message content."),
  type: z.enum(['contact', 'newsletter']).describe("The type of form submission."),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<{ success: boolean; message: string }> {
  return sendEmailFlow(input);
}

const createOwnerEmailTemplate = (input: SendEmailInput) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Outfit', sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #0D0D0D; border: 1px solid #2C2C2C; border-radius: 0.5rem; overflow: hidden; }
        .header { background-color: #C9F31D; padding: 20px; text-align: center; }
        .header h1 { color: #0D0D0D; margin: 0; font-size: 24px; }
        .content { padding: 30px; color: #EAEAEA; }
        .content h2 { color: #C9F31D; }
        .footer { background-color: #1A1A1A; color: #888; padding: 20px; text-align: center; font-size: 12px; }
        .details { margin-top: 20px; padding: 15px; background-color: #1A1A1A; border-radius: 8px; }
        .details p { margin: 5px 0; }
        .details strong { color: #C9F31D; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Form Submission</h1>
        </div>
        <div class="content">
            <h2>You've received a new message!</h2>
            <p>A new submission has been received from your portfolio website.</p>
            <div class="details">
                <p><strong>Name:</strong> ${input.name}</p>
                <p><strong>Email:</strong> ${input.email}</p>
                ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
                ${input.message ? `<p><strong>Message:</strong></p><p>${input.message.replace(/\n/g, '<br>')}</p>` : ''}
            </div>
        </div>
        <div class="footer">
            <p>This is an automated notification from your portfolio contact form.</p>
        </div>
    </div>
</body>
</html>
`;

const createUserEmailTemplate = (input: SendEmailInput) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Outfit', sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #0D0D0D; border: 1px solid #2C2C2C; border-radius: 0.5rem; overflow: hidden; }
        .header { background-color: #C9F31D; padding: 40px 20px; text-align: center; }
        .header h1 { color: #0D0D0D; margin: 0; font-size: 28px; }
        .content { padding: 30px; color: #EAEAEA; line-height: 1.6; }
        .content p { margin-bottom: 20px; }
        .content a.button { background-color: #C9F31D; color: #0D0D0D; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
        .footer { background-color: #1A1A1A; color: #888; padding: 20px; text-align: center; font-size: 12px; }
        .footer a { color: #C9F31D; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
            <p>Hello ${input.name},</p>
            <p>Thank you for getting in touch. I have successfully received your message and will get back to you as soon as possible.</p>
            <p>In the meantime, feel free to connect with me directly via WhatsApp for a faster response.</p>
            <a href="https://wa.me/${PERSONAL_INFO.whatsapp}" class="button">Chat on WhatsApp</a>
            <p style="margin-top: 30px;">Best regards,<br/><strong>${PERSONAL_INFO.name}</strong><br/>${PERSONAL_INFO.title.split('|')[0]}</p>
        </div>
        <div class="footer">
            <p>${PERSONAL_INFO.name} | ${PERSONAL_INFO.email}</p>
            <p><a href="https://wa.me/${PERSONAL_INFO.whatsapp}">WhatsApp</a> | <a href="${(PERSONAL_INFO.socials.find(s => s.name === 'LinkedIn') || {url:'#'}).url}">LinkedIn</a></p>
        </div>
    </div>
</body>
</html>
`;


const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async (input) => {
    const { email, name, type } = input;

    const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_HOST, RECIPIENT_EMAIL } = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD || !SMTP_HOST || !RECIPIENT_EMAIL) {
      console.error('Missing SMTP environment variables');
      return {
        success: false,
        message: 'Server is not configured to send emails. Missing SMTP credentials.',
      };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // 1. Send notification email to owner
    const ownerSubject = type === 'contact' 
      ? `New Contact Form Message from ${name}` 
      : `New Newsletter Subscription: ${email}`;
      
    const ownerMailOptions = {
      from: `"${PERSONAL_INFO.name} - Portfolio" <${SMTP_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: ownerSubject,
      html: createOwnerEmailTemplate(input),
      replyTo: email,
    };
    
    // 2. Send confirmation email to user
    const userSubject = `Thank you for contacting ${PERSONAL_INFO.name}`;
    const userMailOptions = {
        from: `"${PERSONAL_INFO.name}" <${SMTP_EMAIL}>`,
        to: email,
        subject: userSubject,
        html: createUserEmailTemplate(input),
    };

    try {
      // Use Promise.all to send both emails concurrently
      await Promise.all([
        transporter.sendMail(ownerMailOptions),
        transporter.sendMail(userMailOptions),
      ]);
      return { success: true, message: 'Emails sent successfully!' };
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return {
        success: false,
        message: `Failed to send email. ${errorMessage}`,
      };
    }
  }
);
