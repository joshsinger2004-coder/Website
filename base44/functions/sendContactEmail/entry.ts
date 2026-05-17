import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const { name, email, subject, message } = await req.json();

    const sgApiKey = Deno.env.get("SENDGRID_API_KEY");
    const fromEmail = Deno.env.get("SENDGRID_FROM_EMAIL");

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sgApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "josh@joshsinger.co.uk" }] }],
        from: { email: fromEmail },
        reply_to: { email: email, name: name },
        subject: `Website Contact: ${subject || "New Message"}`,
        content: [
          {
            type: "text/plain",
            value: `From: ${name} (${email})\n\n${message}`,
          },
          {
            type: "text/html",
            value: `<p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p><p>${message.replace(/\n/g, "<br>")}</p>`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return Response.json({ error: err }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});