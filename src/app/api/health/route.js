export async function GET() {
  return Response.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    services: {
      payment: "operational",
      email: "operational",
      storage: "operational",
    },
  })
}
