# Contact Form Email Setup

The contact form uses **Nodemailer + Gmail SMTP** to send form submissions to the business email. Follow these steps to activate it.

---

## 1. Enable 2-Step Verification on Gmail

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Sign in as `iglobalproworks@gmail.com`
3. Under **"How you sign in to Google"**, click **2-Step Verification** and follow the prompts to enable it

> Gmail App Passwords are only available when 2-Step Verification is active.

---

## 2. Generate a Gmail App Password

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Sign in as `iglobalproworks@gmail.com` if prompted
3. In the **"App name"** field, type something like `GESS Website`
4. Click **Create**
5. Copy the 16-character password that appears — you will not be able to see it again

---

## 3. Add Credentials to `.env.local` (local development)

Open `.env.local` at the root of the project and fill in the App Password:

```env
GMAIL_USER=iglobalproworks@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_EMAIL=iglobalproworks@gmail.com
```

- **`GMAIL_USER`** — the Gmail account used to send the email (already set)
- **`GMAIL_APP_PASSWORD`** — the 16-character password from Step 2 (spaces are fine)
- **`CONTACT_EMAIL`** — where form submissions are delivered; defaults to `GMAIL_USER` if left blank

---

## 4. Add Environment Variables on Vercel (production)

1. Go to [vercel.com](https://vercel.com) and open the **med-services** project
2. Navigate to **Settings → Environment Variables**
3. Add each of the three variables from Step 3 with their values
4. Set the environment to **Production** (and Preview if desired)
5. Redeploy the project — Vercel picks up new env vars on the next deploy

---

## How It Works

When a visitor submits the contact form:

1. The form data is sent to the `submitContactForm` server action (`app/actions/contact.ts`)
2. Nodemailer opens a connection to Gmail SMTP (`smtp.gmail.com`, port 587)
3. An HTML email is sent **from** `iglobalproworks@gmail.com` **to** `CONTACT_EMAIL`
4. The `Reply-To` header is set to the visitor's email — so hitting Reply in Gmail goes directly to them
5. The form displays a success message; on failure, an inline error is shown with instructions to call directly

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| `Invalid login` error | App Password not set or wrong | Re-generate the App Password and update `.env.local` |
| `Username and Password not accepted` | 2-Step Verification not enabled | Complete Step 1 above |
| Emails not arriving | Correct env vars not added to Vercel | Check Settings → Environment Variables and redeploy |
| Form submits but no email | `GMAIL_APP_PASSWORD` is empty | Fill in the value in `.env.local` and/or Vercel |
