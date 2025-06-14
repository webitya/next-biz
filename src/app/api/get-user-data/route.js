import { NextResponse } from "next/server"
import { userDataStore } from "../initiate-payment/route.js"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const transactionId = searchParams.get("txn")

    if (!transactionId) {
      return NextResponse.json(
        {
          success: false,
          message: "Transaction ID is required",
        },
        { status: 400 },
      )
    }

    const userData = userDataStore.get(transactionId)

    if (!userData) {
      return NextResponse.json(
        {
          success: false,
          message: "Transaction data not found or expired",
        },
        { status: 404 },
      )
    }

    // Return sanitized user data (remove sensitive information)
    const sanitizedData = {
      transactionId: userData.transactionId,
      name: userData.name,
      email: userData.email,
      courseName: userData.courseName,
      amount: userData.amount,
      status: userData.status,
      timestamp: userData.timestamp,
    }

    return NextResponse.json({
      success: true,
      data: sanitizedData,
    })
  } catch (error) {
    console.error("Get user data error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
