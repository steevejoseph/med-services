"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initial: ContactFormState = {};

const inputClass =
  "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initial);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <p className="text-green-800 font-semibold mb-1">Message received!</p>
        <p className="text-green-700 text-sm">
          Thank you — your contact form has been submitted successfully. We will
          be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Name <span className="text-brand">*</span>
        </label>
        <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email <span className="text-brand">*</span>
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Phone Number <span className="text-brand">*</span>
        </label>
        <input id="phone" name="phone" type="tel" required placeholder="(000) 000-0000" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your delivery needs..."
          className={inputClass}
        />
      </div>

      {state.error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand hover:bg-brand-hover disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
