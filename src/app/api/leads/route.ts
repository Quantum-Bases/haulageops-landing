import { NextResponse } from "next/server";

const GOOGLE_SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx76nY80uqd1qGWXVszp5G5ZoroELEMm-gZMjeQZIrcNsdT2U0SfsgToTO7m3XTnFIg/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, fleetSize, name, company, source, notes } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const payload = {
      type: "lead_capture",
      email: email.trim().toLowerCase(),
      fleetSize: fleetSize || "Not specified",
      name: name || "Anonymous Visitor",
      company: company || "Not specified",
      source: source || "website",
      notes: notes || "",
      timestamp: new Date().toISOString(),
    };

    // Forward to existing Google Apps Script webhook
    try {
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Failed to forward lead to Google Sheets webhook:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
    });
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
