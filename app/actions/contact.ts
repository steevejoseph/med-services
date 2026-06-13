"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const phone   = (formData.get("phone")   as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !phone || !message) {
    return { error: "All fields are required." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"GESS Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2 style="color:#6B21A8">New Contact Form Submission</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Name</td><td>${name}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold">Phone</td><td>${phone}</td></tr>
        </table>
        <h3 style="color:#6B21A8;margin-top:20px">Message</h3>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${message}</p>
      `,
    });
    return { success: true };
  } catch (err) {
    console.error("Contact form email error:", err);
    return { error: "Oops! Something went wrong while submitting the form. Please try again or call us directly." };
  }
}
