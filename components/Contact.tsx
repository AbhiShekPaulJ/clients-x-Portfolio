"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, CheckCircle2 } from "lucide-react";
import { contact, site } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) {
      next.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Enter a subject.";
    if (!values.message.trim()) next.message = "Enter a message.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // NOTE: no email service is configured yet. Wire this handler up to
      // your provider of choice (e.g. Formspree, Resend, an API route) and
      // replace this block with the real submission call.
      setSubmitted(true);
    }
  }

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none",
      hasError
        ? "border-red-300 focus:border-red-400"
        : "border-sage-200 focus:border-sage-500"
    );

  return (
    <section id="contact" className="section-pad bg-paper">
      <div className="container-page">
        <SectionHeading
          title="Get in touch"
          description="Available for hospital, clinic, and wellness-team opportunities across India."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.05}>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 rounded-2xl border border-sage-100 bg-white p-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage-50 text-sage-700">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-ink-soft">{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-sage-100 bg-white p-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage-50 text-sage-700">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-ink-soft">{contact.email}</span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-sage-100 bg-white p-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage-50 text-sage-700">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm text-ink-soft">{site.location}</span>
              </li>
              {contact.linkedin && (
                <li className="flex items-center gap-3 rounded-2xl border border-sage-100 bg-white p-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage-50 text-sage-700">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="truncate text-sm text-ink-soft">
                    {contact.linkedin}
                  </span>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-sage-200 bg-sage-50 p-10 text-center"
              >
                <CheckCircle2 className="h-10 w-10 text-sage-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-medium text-ink">
                  Message received
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                  Thank you for reaching out. This form isn&apos;t yet connected to
                  an email service, so please follow up directly at{" "}
                  {contact.email} until that&apos;s configured.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setValues({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 text-sm font-medium text-sage-700 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-sage-100 bg-white p-6 shadow-card sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-ink-soft">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                      className={inputClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm text-ink-soft">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      className={inputClass(!!errors.email)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-ink-soft">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={values.subject}
                    onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                    className={inputClass(!!errors.subject)}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-ink-soft">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    className={inputClass(!!errors.message)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-sage-700 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-sage-800 sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
