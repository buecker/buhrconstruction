// Functions routing based on path:
// /functions/api/contact.js -> handles requests to /api/contact

// Helper function to verify the Turnstile token
async function verifyTurnstile(token, secretKey, remoteIp) {
  const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const body = `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}&remoteip=${encodeURIComponent(remoteIp)}`;

  try {
    const response = await fetch(verifyEndpoint, {
      method: 'POST',
      body: body,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();
    console.log("Turnstile verification response:", data);
    return data.success;
  } catch (error) {
    console.error("Error verifying Turnstile token:", error);
    return false;
  }
}


export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const data = Object.fromEntries(formData);

    // --- Honeypot check ---
    if (data.honeypot) {
      console.log("Honeypot triggered.");
      return new Response(JSON.stringify({ message: "Message received." }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // --- Turnstile Verification ---
    const token = formData.get('cf-turnstile-response');
    const ip = context.request.headers.get('CF-Connecting-IP');
    const secretKey = context.env.TURNSTILE_SECRET_KEY;

    if (!token) {
       return new Response(JSON.stringify({ message: 'Missing CAPTCHA response.' }), {
         status: 400,
         headers: { 'Content-Type': 'application/json' },
       });
    }
     if (!secretKey) {
       console.error("TURNSTILE_SECRET_KEY secret not set.");
       return new Response(JSON.stringify({ message: 'Server configuration error.' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
       });
    }

    const turnstileVerified = await verifyTurnstile(token, secretKey, ip);
    if (!turnstileVerified) {
      console.log("Turnstile verification failed.");
      return new Response(JSON.stringify({ message: 'CAPTCHA verification failed.' }), {
        status: 403, // Forbidden
        headers: { 'Content-Type': 'application/json' },
      });
    }
    console.log("Turnstile verification successful.");

    // --- Basic validation ---
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
       });
    }

    // --- Access Resend secrets ---
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const TO_EMAIL = context.env.TO_EMAIL;
    const FROM_EMAIL = context.env.FROM_EMAIL;

    if (!RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
       console.error("Missing required Resend environment variables (secrets)");
       return new Response(JSON.stringify({ message: "Server configuration error." }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
       });
    }

    // --- Construct email payload for Resend ---
    const emailPayload = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "New Form Submission from Website", // Updated subject line
      html: `
        <p>You received a new message from your website contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
      reply_to: data.email
    };

    // --- Send email via Resend API ---
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    // --- Handle Resend response ---
    if (resendResponse.ok) {
      console.log("Email sent successfully via Resend.");
      return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const errorData = await resendResponse.json();
      console.error("Failed to send email via Resend:", resendResponse.status, errorData);
      return new Response(JSON.stringify({ message: "Failed to send message." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(JSON.stringify({ message: "Server error processing form." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Handle non-POST requests
export async function onRequestGet(context) {
   return new Response('API endpoint for contact form.', { status: 200 });
}

export async function onRequest(context) {
  if (context.request.method === 'POST') {
    return await onRequestPost(context);
  } else if (context.request.method === 'GET') {
    return await onRequestGet(context);
  }
  return new Response('Method Not Allowed', { status: 405 });
}
