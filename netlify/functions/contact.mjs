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
            "We received your message - Silicon Bayou Designs",
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
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0; padding:0; background-color:#0e0620; font-family:'DM Sans', Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0e0620; padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#110828; border-radius:16px; overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.4);">

          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #6B2FA0 0%, #9B5FD0 50%, #6B2FA0 100%); padding:40px 40px 32px; text-align:center;">
              <h1 style="margin:0; font-family:'DM Serif Display', Georgia, serif; font-size:28px; font-weight:400; color:#ffffff; letter-spacing:0.5px;">
                Silicon Bayou
              </h1>
              <p style="margin:4px 0 0; font-family:'DM Sans', Arial, sans-serif; font-size:12px; color:rgba(255,255,255,0.7); letter-spacing:3px; text-transform:uppercase;">
                Digital Craftsmanship, Louisiana Made
              </p>
              <div style="margin:20px auto 0; width:60px; height:3px; background: linear-gradient(90deg, #C8942A, #E8B44A); border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px; font-family:'DM Serif Display', Georgia, serif; font-size:24px; font-weight:400; color:#E8B44A;">
                Hey ${firstName}! We got your message.
              </h2>
              <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.7);">
                Thanks for reaching out to Silicon Bayou Designs. We're excited you're thinking about working with us - that means a lot coming from folks who know quality when they see it.
              </p>
              <p style="margin:0 0 28px; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.7);">
                A real human (not a bot, we promise) will personally review your inquiry and <strong style="color:#ffffff;">get back to you within 24 hours</strong>. Usually sooner - we run on Louisiana coffee and tight deadlines.
              </p>

              <!-- Summary Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(107,47,160,0.15) 0%, rgba(155,95,208,0.1) 100%); border-radius:12px; border:1px solid rgba(155,95,208,0.2); margin:0 0 28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 12px; font-size:11px; color:#9B5FD0; text-transform:uppercase; letter-spacing:2px; font-weight:700;">What you told us</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0; border-bottom:1px solid rgba(155,95,208,0.15);">
                          <span style="font-size:12px; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:1px;">Project</span><br>
                          <span style="font-size:15px; color:#ffffff; font-weight:500;">${projectLabel}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="font-size:12px; color:rgba(255,255,255,0.4); text-transform:uppercase; letter-spacing:1px;">Budget</span><br>
                          <span style="font-size:15px; color:#ffffff; font-weight:500;">${budgetLabel}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA-style block -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background: linear-gradient(135deg, #C8942A, #E8B44A); border-radius:8px; padding:14px 32px; text-align:center;">
                          <a href="https://siliconbayoudesigns.com" style="font-family:'DM Sans', Arial, sans-serif; font-size:14px; font-weight:700; color:#0e0620; text-decoration:none; letter-spacing:0.5px;">Explore Our Work</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.7);">
                Got more details to share? Just hit reply - this inbox is monitored by actual humans who drink way too much Community Coffee.
              </p>

              <!-- Sign-off -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid rgba(155,95,208,0.2); padding-top:24px;">
                    <p style="margin:0 0 4px; font-size:15px; color:rgba(255,255,255,0.7);">Talk soon,</p>
                    <p style="margin:0; font-family:'DM Serif Display', Georgia, serif; font-size:18px; color:#E8B44A;">The Silicon Bayou Team</p>
                    <p style="margin:6px 0 0; font-size:13px; color:rgba(255,255,255,0.35); font-style:italic;">Where Southern grit meets Silicon precision.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#090415; padding:28px 40px; text-align:center; border-top:1px solid rgba(155,95,208,0.15);">
              <p style="margin:0 0 12px; font-size:13px; color:rgba(255,255,255,0.4);">
                Silicon Bayou Designs &bull; Baton Rouge, Louisiana
              </p>
              <p style="margin:0 0 16px; font-size:12px;">
                <a href="https://siliconbayoudesigns.com" style="color:#9B5FD0; text-decoration:none;">siliconbayoudesigns.com</a>
                &nbsp;&bull;&nbsp;
                <a href="mailto:hello@siliconbayoudesigns.com" style="color:#9B5FD0; text-decoration:none;">hello@siliconbayoudesigns.com</a>
              </p>
              <p style="margin:0; font-size:11px; color:rgba(255,255,255,0.2);">
                &copy; ${new Date().getFullYear()} Silicon Bayou Designs LLC. All rights reserved.
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
