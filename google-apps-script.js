/**
 * =========================================================================
 * HaulageOps - Unified Lead Capture & Contact Form Webhook
 * =========================================================================
 * 
 * Instructions:
 * 1. Open Google Sheets (create a new blank spreadsheet, e.g. "HaulageOps Leads 2026").
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Delete everything in the script editor and paste this entire code.
 * 4. Click the "Save" icon (Floppy disk).
 * 5. Click the blue "Deploy" button (top right) -> "New deployment".
 * 6. Select type: "Web app" (click gear icon next to 'Select type' if needed).
 * 7. Set:
 *    - Description: "HaulageOps Lead Ingestion API"
 *    - Execute as: "Me (<your-email>)"
 *    - Who has access: "Anyone"   <--- IMPORTANT! Must be "Anyone" so the landing page can post data!
 * 8. Click "Deploy".
 * 9. Copy the "Web app URL" (starts with https://script.google.com/macros/s/.../exec).
 * 10. Paste that URL here so we can hook it into GOOGLE_SHEETS_WEBHOOK_URL.
 */

// If you created this script from script.google.com (standalone), paste your Google Sheet URL or ID below:
// (If you opened it directly from Extensions > Apps Script inside the sheet, getActiveSpreadsheet() will work automatically)
var SPREADSHEET_URL_OR_ID = ""; // e.g. "https://docs.google.com/spreadsheets/d/1abc...xyz/edit" or just the ID

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent write locks to prevent data collisions
  lock.tryLock(10000);

  try {
    var ss = null;
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (_) {}

    if (!ss && SPREADSHEET_URL_OR_ID) {
      if (SPREADSHEET_URL_OR_ID.indexOf("http") === 0) {
        ss = SpreadsheetApp.openByUrl(SPREADSHEET_URL_OR_ID);
      } else {
        ss = SpreadsheetApp.openById(SPREADSHEET_URL_OR_ID);
      }
    }

    if (!ss) {
      throw new Error("Could not find Google Sheet. Please paste your Google Sheet URL into SPREADSHEET_URL_OR_ID at the top of the script, or open Apps Script via Extensions > Apps Script inside your sheet.");
    }

    var sheet = ss.getSheetByName("website-leads");
    if (!sheet) {
      sheet = ss.insertSheet("website-leads");
    }
    
    // Parse incoming JSON payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Auto-create beautiful headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (UTC)",
        "Full Name",
        "Company Name",
        "Email",
        "Phone / WhatsApp",
        "Fleet Size",
        "Enquiry Type",
        "Message / Operation Notes",
        "Lead Source"
      ];
      sheet.appendRow(headers);
      
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#18181B"); // Dark background
      headerRange.setFontColor("#FFFFFF"); // White text
      sheet.setFrozenRows(1);
      
      // Auto-resize columns
      for (var col = 1; col <= headers.length; col++) {
        sheet.setColumnWidth(col, 160);
      }
      sheet.setColumnWidth(8, 300); // Message column wider
    }

    // Extract fields matching unified payload
    var timestamp = data.timestamp || new Date().toISOString();
    var name = data.name || "N/A";
    var company = data.company || "N/A";
    var email = data.email || "N/A";
    var phone = data.phone || "N/A";
    var fleetSize = data.fleetSize || "N/A";
    var enquiryType = data.enquiryType || "N/A";
    var message = data.message || "N/A";
    var source = data.source || "website";

    // Append lead row
    sheet.appendRow([
      timestamp,
      name,
      company,
      email,
      phone,
      fleetSize,
      enquiryType,
      message,
      source
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded successfully",
      spreadsheetName: ss.getName(),
      sheetTab: sheet.getName(),
      totalRows: sheet.getLastRow(),
      spreadsheetUrl: ss.getUrl(),
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Diagnostic check in browser
function doGet(e) {
  try {
    var ss = null;
    try { ss = SpreadsheetApp.getActiveSpreadsheet(); } catch (_) {}
    if (!ss && SPREADSHEET_URL_OR_ID) {
      ss = SPREADSHEET_URL_OR_ID.indexOf("http") === 0 ? SpreadsheetApp.openByUrl(SPREADSHEET_URL_OR_ID) : SpreadsheetApp.openById(SPREADSHEET_URL_OR_ID);
    }
    return ContentService.createTextOutput(JSON.stringify({
      status: "online",
      spreadsheetName: ss ? ss.getName() : "None",
      spreadsheetUrl: ss ? ss.getUrl() : "None",
      tabs: ss ? ss.getSheets().map(function(s) { return s.getName(); }) : []
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}
