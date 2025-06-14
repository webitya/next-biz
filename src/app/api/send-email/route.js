import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { to, subject, html } = await request.json()

    // Simple email sending using a webhook or email service
    // For production, you can use services like:
    // - Resend
    // - SendGrid
    // - Mailgun
    // - AWS SES

    // Example using a simple webhook approach
    const emailData = {
      to,
      subject,
      html,
      from: process.env.EMAIL_FROM || "noreply@nextbiz.in",
    }

    // Log the email for now (in production, integrate with your email service)
    console.log("Email to be sent:", emailData)

    // Simulate successful email sending
    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
