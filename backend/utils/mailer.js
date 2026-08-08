import nodemailer from "nodemailer";

// Uses Gmail SMTP with an App Password (not your normal Gmail password).
// If EMAIL_USER / EMAIL_PASS aren't set, we log the reset link instead of
// emailing it, so local development never breaks just because email isn't
// configured yet.

const transporter =
  process.env.EMAIL_USER && process.env.EMAIL_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })
    : null;

export async function sendResetPasswordEmail(toEmail, resetLink) {
  if (!transporter) {
    console.log("⚠️  EMAIL_USER/EMAIL_PASS not set — reset link (dev only):", resetLink);
    return;
  }

  await transporter.sendMail({
    from: `"GuestVoice" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Reset your GuestVoice password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto;">
        <h2 style="color:#be123c;">Reset your password</h2>
        <p>We received a request to reset your GuestVoice password. This link is valid for 1 hour.</p>
        <p>
          <a href="${resetLink}" style="background:#be123c;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;">
            Reset Password
          </a>
        </p>
        <p style="color:#888;font-size:13px;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });
}
