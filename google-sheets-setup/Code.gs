/**
 * Google Apps Script for Setu Enquiry Form to Google Sheets Integration
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet (e.g. "Setu Website Leads")
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Save the project (give it a name like "Setu Enquiry Handler")
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 * 7. Set "Execute as": Me
 * 8. Set "Who has access": Anyone
 * 9. Click Deploy
 * 10. Copy the Web app URL and paste it as VITE_LEAD_ENDPOINT in the project's .env
 */

// Email address that receives new-lead notifications
var NOTIFY_EMAIL = "arshhasan2016@gmail.com";

// Main function to handle POST requests from the website
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Phone',
        'Country',
        'Products / Technologies',
        'Capacity (TPD)',
        'Message',
        'Source'
      ]);

      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f3f3f3');
      headerRange.setHorizontalAlignment('center');
    }

    // Add the new lead data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.country || '',
      data.products || '',
      data.capacity || '',
      data.message || '',
      data.source || 'Setu Website Enquiry Form'
    ]);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 10);

    // Send email notification when new lead arrives
    sendEmailNotification(data);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Lead saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to send email notifications
function sendEmailNotification(data) {
  try {
    var phoneDigits = (data.phone || '').replace(/\D/g, '');

    var subject = "🚀 New Enquiry from Setu Website: " + (data.name || 'Unknown');

    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a3a5c; border-bottom: 3px solid #f0a500; padding-bottom: 10px;">
          New Enquiry Received!
        </h2>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name || '-'}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email || '-'}</a></p>
          <p><strong>Company:</strong> ${data.company || '-'}</p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone || '-'}</a></p>
          ${phoneDigits ? `<p><strong>WhatsApp:</strong> <a href="https://wa.me/${phoneDigits}" style="color: #25D366;">Send WhatsApp Message</a></p>` : ''}
          <p><strong>Country:</strong> ${data.country || '-'}</p>
        </div>

        <div style="background-color: #eef4fa; padding: 15px; border-left: 4px solid #1a3a5c; margin: 20px 0;">
          <h3 style="margin-top: 0;">Requirement:</h3>
          <p><strong>Products / Technologies:</strong> ${data.products || '-'}</p>
          <p><strong>Capacity Required (TPD):</strong> ${data.capacity || '-'}</p>
        </div>

        ${data.message ? `
        <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #f0a500; margin: 20px 0;">
          <h3 style="margin-top: 0;">Message:</h3>
          <p>${data.message}</p>
        </div>
        ` : ''}

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p><strong>Source:</strong> ${data.source || '-'}</p>
          <p><strong>Timestamp:</strong> ${data.timestamp || '-'}</p>
        </div>

        <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e9; border-radius: 5px;">
          <p style="margin: 0;"><strong>Quick Actions:</strong></p>
          <p style="margin: 10px 0 0 0;">
            ${phoneDigits ? `
            <a href="https://wa.me/${phoneDigits}"
               style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">
              💬 WhatsApp Now
            </a>
            <a href="tel:${data.phone}"
               style="display: inline-block; padding: 10px 20px; background-color: #4285f4; color: white; text-decoration: none; border-radius: 5px; margin-right: 10px;">
              📞 Call Now
            </a>
            ` : ''}
            <a href="mailto:${data.email}"
               style="display: inline-block; padding: 10px 20px; background-color: #1a3a5c; color: white; text-decoration: none; border-radius: 5px;">
              ✉️ Reply by Email
            </a>
          </p>
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });

  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
  }
}

// Test function to verify the setup
function testSetup() {
  var testData = {
    timestamp: new Date().toISOString(),
    name: "Test User",
    email: "test@example.com",
    company: "Test Company Pvt Ltd",
    phone: "+91 99999 99999",
    country: "India",
    products: "Solvent Extraction Plant",
    capacity: "500 TPD",
    message: "This is a test submission",
    source: "Manual Test"
  };

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Email',
      'Company',
      'Phone',
      'Country',
      'Products / Technologies',
      'Capacity (TPD)',
      'Message',
      'Source'
    ]);
  }

  sheet.appendRow([
    testData.timestamp,
    testData.name,
    testData.email,
    testData.company,
    testData.phone,
    testData.country,
    testData.products,
    testData.capacity,
    testData.message,
    testData.source
  ]);

  sendEmailNotification(testData);
  Logger.log('Test data added successfully!');
}
