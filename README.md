Portfolio

A premium, responsive portfolio site for Sowmya Jillella, Clinical Dietitian &
Nutritionist, built for hospital HR teams, clinical nutrition departments, and
healthcare recruiters in India.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer
Motion + lucide-react**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. It
hot-reloads as you edit files.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/                Next.js App Router pages (layout, home page, loading/error/404)
components/         All page sections (Hero, About, ClinicalExperience, ...)
components/ui/      Small shared pieces (Reveal animation wrapper, SectionHeading)
data/content.ts     ALL editable site content lives here
lib/utils.ts        Small shared helpers
public/             Static assets — profile image, resume PDF, favicon, etc.
```

## Editing content

Almost everything on the site — name, tagline, hospital internships,
education, research project, skills, certifications, and contact details —
is defined in **`data/content.ts`**. Edit the values there; no component code
needs to change for text updates.

## Before you publish — replace these placeholders

1. **Profile photo** — replace `public/images/profile-placeholder.svg` with a
   real professional portrait (e.g. `public/images/profile.jpg`), then update
   `profileImage` in `data/content.ts` to point at the new file.
2. **Resume PDF** — replace `public/resume.pdf` with the final resume. The
   "Download Resume" buttons already link to `/resume.pdf`, so no code change
   is needed if you keep the same filename.
3. **Contact details** — in `data/content.ts`, update the `contact` object:
   - `phone` — replace `[PHONE_NUMBER]`
   - `email` — replace `[EMAIL_ADDRESS]`
   - `linkedin` — replace `[LINKEDIN_URL]`, or set it to an empty string
     (`""`) to hide the LinkedIn row entirely if there isn't one yet.
4. **Site URL** — in `app/layout.tsx`, update the `siteUrl` constant to the
   real deployed domain once you have one (used for SEO metadata).
5. **Contact form** — the form in `components/Contact.tsx` validates input
   and shows a success state, but it is **not connected to an email
   service**. Before relying on it, wire the `handleSubmit` function to a
   provider such as Formspree, Resend, or a custom API route, and remove the
   note in the success message that tells visitors to email directly.

## Setting up paid advice-session bookings (Razorpay)

The **Book a Session** section (`components/Booking.tsx`) lets visitors pay
online for a consultation via [Razorpay](https://razorpay.com), India's most
common payment gateway (cards, UPI, netbanking, wallets).

**This is fully wired up in code, but won't accept real payments until you
add your own Razorpay keys.**

1. Create a Razorpay account at [dashboard.razorpay.com](https://dashboard.razorpay.com)
   and complete their KYC/activation for live payments (you can build and
   test everything before that's done, using Test Mode).
2. Go to **Settings → API Keys** and generate a key pair.
3. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
4. Fill in the two values:
   ```
   RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx
   ```
   Use the **Test Mode** keys while developing — Razorpay gives you test
   card/UPI numbers so you can run through a full checkout without moving
   real money. Switch to **Live Mode** keys only once the account is
   activated and you're ready to accept real payments.
5. Restart `npm run dev` after adding the `.env.local` file so Next.js picks
   up the new environment variables.
6. **Never commit `.env.local`** or paste your key secret into any file that
   isn't an environment variable — it's already excluded via `.gitignore`.

**How it works, if you want to change anything:**

- Session names, durations, prices, and features are all in the `booking`
  object in `data/content.ts` — edit the `tiers` array to add, remove, or
  reprice sessions.
- `app/api/create-razorpay-order/route.ts` creates the order server-side.
  The price is looked up from `tierId` on the server (not trusted from the
  browser), so someone can't tamper with the amount from dev tools.
- `app/api/verify-razorpay-payment/route.ts` re-checks Razorpay's payment
  signature server-side before treating a payment as genuine — this is a
  required security step, not optional.
- After a payment is verified, there's a `TODO` in that same file marking
  where you'd want to actually record the booking — e.g. save it to a
  database, email a confirmation to the client and to Sowmya, or create a
  calendar invite. None of that is connected yet; right now a successful
  payment just shows an on-screen confirmation.
- The disclaimer text under the pricing cards makes clear these are general
  nutrition/lifestyle advice sessions, not a substitute for clinical
  treatment — keep that in place if you're not a registered medical
  provider for the services being sold.

## Design notes

- **Palette**: hospital white base, sage/clinical green as the primary
  accent, muted blue as a secondary accent, and a light peach used sparingly
  for warmth — no neon colors or dark/heavy sections.
- **Typography**: Fraunces (serif) for headings, Plus Jakarta Sans (sans) for
  body text.
- **Scroll animation**: a thin progress bar tracks scroll position at the top
  of the page; the hero portrait and text drift at slightly different speeds
  as you scroll past it (parallax); timeline and education cards alternate
  sliding in from left/right; the research card scales in. All of it is
  driven by the shared `Reveal` component in `components/ui/Reveal.tsx` — pass
  it a `direction` ("up" | "left" | "right" | "none") and/or `scale` prop to
  reuse the same effect elsewhere.
- **Accessibility**: semantic landmarks, a "skip to main content" link,
  visible keyboard focus rings, sufficient color contrast, and full support
  for `prefers-reduced-motion` (all reveal/float animations are disabled for
  users who request reduced motion).
- **Content accuracy**: the site only presents information supplied in the
  brief — internships are described as supervised clinical exposure, and no
  degrees, licenses, job titles, or patient outcomes are invented.

## Deployment

The site is a standard Next.js app and deploys cleanly to Vercel, Netlify, or
any Node.js host:

```bash
npm run build
npm run start
```

On Vercel, just import the repository — no extra configuration is required.
