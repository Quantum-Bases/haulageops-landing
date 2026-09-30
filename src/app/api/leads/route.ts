import { NextResponse } from "next/server";

// Standardized payload interface for all lead capture forms (Contact, Demo, Pricing)
export interface StandardLeadPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  fleetSize: string;
  enquiryType: string;
  message: string;
  source: string;
  timestamp: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      businessName,
      email,
      phone,
      fleetSize,
      fleet_size,
      enquiryType,
      current_system,
      message,
      notes,
      source,
    } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // Unified standardized payload across Contact Us, Demo Form, and Quick Quote
    const payload: StandardLeadPayload = {
      name: (name || "").trim() || "Not provided",
      company: (company || businessName || "").trim() || "Not provided",
      email: email.trim().toLowerCase(),
      phone: (phone || "").trim() || "Not provided",
      fleetSize: (fleetSize || fleet_size || "").trim() || "Not specified",
      enquiryType: (enquiryType || "").trim() || "General Enquiry",
      message: (message || notes || current_system || "").trim() || "None",
      source: (source || "website").trim(),
      timestamp: new Date().toISOString(),
    };

    console.log("[HaulageOps Lead Captured]:", JSON.stringify(payload));

    // Forward to Google Apps Script webhook
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxsbtWZjWxZeT2ROJT_AM_fhmi-JVNNOp7lHZBY6JKtGwlDF3kumfpMHbuhbnICDaJ9/exec";
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);

        const gsRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
          redirect: "follow",
          signal: controller.signal,
        });
        clearTimeout(timeout);
        const gsText = await gsRes.text();
        console.log("[Google Sheets Webhook Response]:", gsRes.status, gsText);
      } catch (err) {
        console.error("[Google Sheets Webhook Error]:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
      lead: { email: payload.email, timestamp: payload.timestamp },
    });
  } catch (error) {
    console.error("[Lead API Error]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
