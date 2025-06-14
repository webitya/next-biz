import { NextResponse } from "next/server"
import { userDataStore } from "../initiate-payment/route.js"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const transactionId = searchParams.get("txn")

    if (!transactionId) {
      return NextResponse.json({ success: false, message: "Transaction ID required" }, { status: 400 })
    }

    const userData = userDataStore.get(transactionId)

    if (!userData) {
      return NextResponse.json({ success: false, message: "User data not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: userData })
  } catch (error) {
    console.error("Get user data error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
