import { NextResponse } from "next/server"
import crypto from "crypto"
import nodemailer from "nodemailer"

const PHONEPE_CONFIG = {
  merchantId: "PGTESTPAYUAT",
  saltKey: "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",
  saltIndex: 1,
  statusEndpoint: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status",
}

// Email configuration
const emailTransporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
})

export async function POST(request) {
  try {
    const body = await request.json()
    const { transactionId, providerReferenceId } = body

    // Verify payment status with PhonePe
    const statusUrl = `${PHONEPE_CONFIG.statusEndpoint}/${PHONEPE_CONFIG.merchantId}/${transactionId}`
    const checksumString = `/pg/v1/status/${PHONEPE_CONFIG.merchantId}/${transactionId}` + PHONEPE_CONFIG.saltKey
    const checksum = crypto.createHash("sha256").update(checksumString).digest("hex") + "###" + PHONEPE_CONFIG.saltIndex

    const statusResponse = await fetch(statusUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": PHONEPE_CONFIG.merchantId,
      },
    })

    const statusResult = await statusResponse.json()

    if (statusResult.success && statusResult.data.state === "COMPLETED") {
      // Payment successful - retrieve user data and send emails
      // In production, retrieve from database using transactionId

      const userData = {
        name: "Student Name", // Retrieved from database
        email: "student@example.com", // Retrieved from database
        phone: "9876543210", // Retrieved from database
        courseName: "Complete Digital Marketing Course",
        amount: 7999,
        transactionId,
      }

      // Send confirmation email to user
      await sendUserConfirmationEmail(userData)

      // Send notification email to admin
      await sendAdminNotificationEmail(userData)

      // Redirect to success page
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment-success?txn=${transactionId}`,
      )
    } else {
      // Payment failed
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment-failed`)
    }
  } catch (error) {
    console.error("Payment callback error:", error)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment-failed`)
  }
}

async function sendUserConfirmationEmail(userData) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "noreply@nextbiz.in",
    to: userData.email,
    subject: "Welcome to Complete Digital Marketing Course - Payment Confirmed!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Welcome to NextBiz.in!</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333;">Hi ${userData.name},</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Congratulations! Your payment has been successfully processed and you're now enrolled in our 
            <strong>Complete Digital Marketing Course</strong>.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Course Details:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li>Course: ${userData.courseName}</li>
              <li>Amount Paid: ₹${userData.amount}</li>
              <li>Transaction ID: ${userData.transactionId}</li>
              <li>Access: Lifetime</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            You will receive course access details within 24 hours. Our team will contact you soon 
            to guide you through the next steps.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://nextbiz.in" style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Visit Dashboard
            </a>
          </div>
          
          <p style="font-size: 14px; color: #777;">
            If you have any questions, feel free to contact us at info@nextbiz.in or call +91 9876543210.
          </p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0;">&copy; 2024 NextBiz.in. All rights reserved.</p>
        </div>
      </div>
    `,
  }

  await emailTransporter.sendMail(mailOptions)
}

async function sendAdminNotificationEmail(userData) {
  const mailOptions = {
    from: process.env.EMAIL_USER || "noreply@nextbiz.in",
    to: process.env.ADMIN_EMAIL || "admin@nextbiz.in",
    subject: "New Course Enrollment - Digital Marketing Course",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #28a745; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Course Enrollment</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333;">New Student Enrolled</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Student Details:</h3>
            <ul style="color: #555; line-height: 1.8;">
              <li><strong>Name:</strong> ${userData.name}</li>
              <li><strong>Email:</strong> ${userData.email}</li>
              <li><strong>Phone:</strong> ${userData.phone}</li>
              <li><strong>Course:</strong> ${userData.courseName}</li>
              <li><strong>Amount:</strong> ₹${userData.amount}</li>
              <li><strong>Transaction ID:</strong> ${userData.transactionId}</li>
              <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Please provide course access to the student and send welcome materials.
          </p>
        </div>
      </div>
    `,
  }

  await emailTransporter.sendMail(mailOptions)
}
