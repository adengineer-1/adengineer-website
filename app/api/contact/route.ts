import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, product, industry, message, _hp } = body;

    // Honeypot spam trap: bots automatically populate hidden fields
    if (_hp) {
      // Silently return success without sending email to trap bots
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@adengineers.co.in";
    const resendApiKey = process.env.RESEND_API_KEY || process.env.RESEND_API;
    const subject = `New Inquiry: ${product || "Process Equipment"} - ${company || name}`;

    const textContent = `
NEW INQUIRY RECEIVED FROM ADEN WEBSITE

Inquirer Details:
- Name: ${name}
- Company: ${company || "Not provided"}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Process & Equipment:
- Product of Interest: ${product || "Not specified"}
- Industry: ${industry || "Not specified"}

Requirement Details:
${message}
--------------------------------------------------
Sent via ADEN Contact Form (adengineers.co.in)
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1c1f24; margin: 0; padding: 20px; background-color: #f4f5f6; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e4e8; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #1c1f24; color: #ffffff; padding: 24px 28px; }
    .header h2 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; color: #ffffff; }
    .header p { margin: 0; color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
    .content { padding: 28px; }
    .table-details { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table-details td { padding: 10px 12px; border-bottom: 1px solid #edf0f2; font-size: 14.5px; }
    .table-details td.label { font-weight: 600; color: #4b5563; width: 34%; }
    .table-details td.value { color: #111827; }
    .badge-product { display: inline-block; background: #eff6ff; color: #1d4ed8; padding: 3px 10px; border-radius: 4px; font-weight: 600; font-size: 13.5px; }
    .message-box { background: #f8fafc; border-left: 4px solid #1c1f24; padding: 16px; border-radius: 4px; margin-top: 12px; font-size: 14.5px; white-space: pre-wrap; color: #1f2937; line-height: 1.6; }
    .action-btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background-color: #1c1f24; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; }
    .footer { padding: 18px 28px; background: #fafafa; border-top: 1px solid #edf0f2; font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <p>ADEN Website Notification</p>
      <h2>New Process Equipment Inquiry</h2>
    </div>
    <div class="content">
      <table class="table-details">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="label">Company</td>
          <td class="value">${company || "—"}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone || "—"}</a></td>
        </tr>
        <tr>
          <td class="label">Product of Interest</td>
          <td class="value"><span class="badge-product">${product || "—"}</span></td>
        </tr>
        <tr>
          <td class="label">Industry</td>
          <td class="value">${industry || "—"}</td>
        </tr>
      </table>

      <h3 style="font-size: 15px; margin: 20px 0 8px 0; color: #1c1f24;">Requirement Details / Notes</h3>
      <div class="message-box">${message}</div>

      <div style="text-align: center;">
        <a href="mailto:${email}?subject=${encodeURIComponent(`Re: Your Inquiry on ADEN Process Equipment`)}" class="action-btn">Reply Directly to Customer (${email})</a>
      </div>
    </div>
    <div class="footer">
      This inquiry was submitted from the contact form on adengineers.co.in.
    </div>
  </div>
</body>
</html>
    `.trim();

    // 1. Primary: Direct authenticated SMTP (Google Workspace / Gmail / cPanel)
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = (process.env.SMTP_PASS || "").trim();
    const isSmtpConfigured = Boolean(
      host && user && pass && pass !== "your_email_or_app_password_here"
    );

    if (isSmtpConfigured) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        const fromAddress =
          process.env.CONTACT_FROM_EMAIL || `"ADEN Inquiries" <${user}>`;

        await transporter.sendMail({
          from: fromAddress,
          to: toEmail,
          replyTo: `"${name}" <${email}>`,
          subject,
          text: textContent,
          html: htmlContent,
        });

        return NextResponse.json({
          success: true,
          message: "Your inquiry has been sent successfully via secure SMTP.",
        });
      } catch (smtpErr) {
        console.error("[SMTP Send Error]:", smtpErr);
        // If SMTP fails and Resend is available, fall through to Resend as backup
        if (!resendApiKey) {
          throw smtpErr;
        }
        console.warn("[Contact API] Falling back to Resend API...");
      }
    }

    // 2. Secondary fallback: Resend API
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const customFrom = process.env.RESEND_FROM_EMAIL;
      const sendFrom = customFrom || "ADEN Inquiries <onboarding@resend.dev>";

      const sendResult = await resend.emails.send({
        from: sendFrom,
        to: toEmail,
        replyTo: `"${name}" <${email}>`,
        subject,
        text: textContent,
        html: htmlContent,
      });

      if (sendResult.error) {
        if (customFrom && sendResult.error.message?.includes("not verified")) {
          const fallbackResult = await resend.emails.send({
            from: "ADEN Inquiries <onboarding@resend.dev>",
            to: toEmail,
            replyTo: `"${name}" <${email}>`,
            subject,
            text: textContent,
            html: htmlContent,
          });

          if (fallbackResult.error) {
            throw new Error(fallbackResult.error.message);
          }

          return NextResponse.json({
            success: true,
            message: "Your inquiry has been sent successfully.",
          });
        }

        throw new Error(sendResult.error.message);
      }

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent successfully.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "Email delivery service not configured. Please set SMTP credentials or RESEND_API in .env.local",
      },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email inquiry.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
