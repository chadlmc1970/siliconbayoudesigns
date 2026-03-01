export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid request" };
  }

  const { name, email, projectType, budget, message } = data;

  if (!name || !email || !message) {
    return { statusCode: 400, body: "Missing required fields" };
  }

  // Forward to Formspree for business notification
  try {
    const formspreeRes = await fetch("https://formspree.io/f/xeelwpvw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!formspreeRes.ok) {
      console.error("Formspree error:", formspreeRes.status);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Form submission failed" }),
      };
    }
  } catch (err) {
    console.error("Formspree fetch error:", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Form submission failed" }),
    };
  }

  // Send auto-reply via Resend
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Silicon Bayou Designs <hello@siliconbayoudesigns.com>",
          to: email,
          subject:
            "We received your message — Silicon Bayou Designs",
          html: autoReplyHtml(name, projectType, budget),
        }),
      });
      if (!res.ok) {
        const errBody = await res.text();
        console.error("Resend error:", res.status, errBody);
      }
    } catch (err) {
      console.error("Resend fetch error:", err);
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping auto-reply");
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
}

function autoReplyHtml(name, projectType, budget) {
  const projectLabel = projectType || "Not specified";
  const budgetLabel = budget || "Not specified";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding:32px 40px; text-align:center;">
              <h1 style="margin:0; font-size:24px; font-weight:700; color:#c9a84c; letter-spacing:1px;">
                Silicon Bayou Designs
              </h1>
              <p style="margin:8px 0 0; font-size:13px; color:#8892b0; letter-spacing:2px; text-transform:uppercase;">
                Digital Craftsmanship &bull; Louisiana Made
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px; font-size:20px; color:#1a1a2e;">
                Thank you, ${name}!
              </h2>
              <p style="margin:0 0 20px; font-size:15px; line-height:1.6; color:#444;">
                We've received your message and appreciate you reaching out.
                A member of our team will get back to you <strong>within 24 hours</strong>.
              </p>

              <!-- Summary Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa; border-radius:6px; border-left:4px solid #c9a84c; margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px; font-size:12px; color:#888; text-transform:uppercase; letter-spacing:1px;">Your inquiry</p>
                    <p style="margin:0 0 8px; font-size:14px; color:#333;">
                      <strong>Project type:</strong> ${projectLabel}
                    </p>
                    <p style="margin:0; font-size:14px; color:#333;">
                      <strong>Budget range:</strong> ${budgetLabel}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0; font-size:15px; line-height:1.6; color:#444;">
                In the meantime, feel free to reply to this email if you have
                any additional details to share.
              </p>

              <p style="margin:24px 0 0; font-size:15px; color:#444;">
                Best regards,<br>
                <strong style="color:#1a1a2e;">The Silicon Bayou Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1a2e; padding:24px 40px; text-align:center;">
              <p style="margin:0 0 8px; font-size:13px; color:#8892b0;">
                Silicon Bayou Designs &bull; Baton Rouge, Louisiana
              </p>
              <p style="margin:0; font-size:12px;">
                <a href="https://siliconbayoudesigns.com" style="color:#c9a84c; text-decoration:none;">siliconbayoudesigns.com</a>
                &nbsp;&bull;&nbsp;
                <a href="mailto:hello@siliconbayoudesigns.com" style="color:#c9a84c; text-decoration:none;">hello@siliconbayoudesigns.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
