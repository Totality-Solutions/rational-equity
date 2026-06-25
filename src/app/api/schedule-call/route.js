import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body) {
      return Response.json({ error: "No body data received" }, { status: 400 });
    }

    // Capture fields aligned with the updated TSX payload structure
    const { name, emailOrPhone, preferredDates, category, message } = body;

    // Validation matching your single input field architecture
    if (!name || !emailOrPhone) {
      return Response.json({ error: "Missing required fields: name, emailOrPhone" }, { status: 400 });
    }

    if (!preferredDates || !Array.isArray(preferredDates) || preferredDates.length === 0) {
      return Response.json({ error: "Please select at least one preferred date" }, { status: 400 });
    }

    // Match backend display labels with frontend select configuration options
    const FUND_LABELS = {
      "india-long-only": "India Long-Only Fund",
      "gold-silver-miners": "Gold & Silver Miners Fund",
      "absolute-return": "Absolute Return Fund",
    };

    const displayCategory = category
      ? (FUND_LABELS[category] ?? category)
      : "Not specified";

    // Format the list of dynamic date options into a structured string or layout array
    const dateListHTML = preferredDates
      .map((date, index) => `<div style="margin-bottom: 4px;">Option ${index + 1}: <strong>${date}</strong></div>`)
      .join("");

    const resendResponse = await resend.emails.send({
      from: "Investment Portal <onboarding@resend.dev>",
      to: "jaba@repllp.com",
      subject: `New Call Scheduled by ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#9B0000;margin-bottom:20px;">New Consultation Request</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:600px;border:1px solid #e5e7eb;">
          <tr>
            <td style="padding:12px 16px;background:#f8f9fa;font-weight:600;width:180px;border-bottom:1px solid #e5e7eb;">Name</td>
            <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8f9fa;font-weight:600;border-bottom:1px solid #e5e7eb;">Contact Information</td>
            <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">${emailOrPhone}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8f9fa;font-weight:600;vertical-align:top;border-bottom:1px solid #e5e7eb;">Preferred Date(s)</td>
            <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;line-height:1.5;">${dateListHTML}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8f9fa;font-weight:600;border-bottom:1px solid #e5e7eb;">Investment Interest</td>
            <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">${displayCategory}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;background:#f8f9fa;font-weight:600;vertical-align:top;">Message / Goals</td>
            <td style="padding:12px 16px;line-height:1.5;">${message || "—"}</td>
          </tr>
        </table>
      `,
    });

    console.log("RESEND API CALL LOG:", resendResponse);
    return Response.json({ success: true });

  } catch (error) {
    console.error("Scheduling Engine Error:", error);
    return Response.json(
      { error: "Internal processing crash", message: error.message }, 
      { status: 500 }
    );
  }
}