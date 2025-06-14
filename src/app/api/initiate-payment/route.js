import { NextResponse } from "next/server"
import crypto from "crypto"

const PHONEPE_CONFIG = {
  merchantId: "PGTESTPAYUAT",
  saltKey: "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",
  saltIndex: 1,
  apiEndpoint: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, amount, courseName } = body

    // Generate unique transaction ID
    const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Store user data temporarily (in production, use a database)
    const userData = {
      transactionId,
      name,
      email,
      phone,
      address,
      amount,
      courseName,
      timestamp: new Date().toISOString(),
    }

    // Create PhonePe payment request
    const paymentData = {
      merchantId: PHONEPE_CONFIG.merchantId,
      merchantTransactionId: transactionId,
      merchantUserId: `USER_${Date.now()}`,
      amount: amount * 100, // Convert to paise
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/payment-callback`,
      redirectMode: "POST",
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/payment-callback`,
      mobileNumber: phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    }

    // Encode payload
    const payload = Buffer.from(JSON.stringify(paymentData)).toString("base64")

    // Generate checksum
    const checksumString = payload + "/pg/v1/pay" + PHONEPE_CONFIG.saltKey
    const checksum = crypto.createHash("sha256").update(checksumString).digest("hex") + "###" + PHONEPE_CONFIG.saltIndex

    // Make request to PhonePe
    const response = await fetch(PHONEPE_CONFIG.apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({
        request: payload,
      }),
    })

    const result = await response.json()

    if (result.success) {
      // Store user data with transaction ID (in production, use database)
      // For now, we'll use a simple in-memory store or file system

      return NextResponse.json({
        success: true,
        paymentUrl: result.data.instrumentResponse.redirectInfo.url,
        transactionId,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Payment initiation failed",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Payment initiation error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
