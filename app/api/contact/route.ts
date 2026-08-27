import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, company, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <h2 style="font-size:24px;margin-bottom:24px">New enquiry — VYNX website</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${company}</td></tr>` : ""}
        ${service ? `<tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${service}</td></tr>` : ""}
      </table>
      <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
      <p style="color:#666;margin-bottom:8px">Message</p>
      <p style="white-space:pre-wrap">${message}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"VYNX Website" <${process.env.GMAIL_USER}>`,
      to: "vynxsolutions@gmail.com",
      replyTo: email,
      subject: `Enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
