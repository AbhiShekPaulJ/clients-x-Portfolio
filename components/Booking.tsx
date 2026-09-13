"use client";

import { useState } from "react";
import { Check, CalendarCheck, Loader2, ShieldCheck } from "lucide-react";
import { booking, contact, site } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { loadRazorpayScript } from "@/lib/loadRazorpayScript";

type Status = "idle" | "loading" | "success" | "error";

export function Booking() {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmedTierName, setConfirmedTierName] = useState<string | null>(null);

  async function handleBook(tierId: string) {
    setActiveTier(tierId);
    setStatus("loading");
    setErrorMessage("");

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error(
          "Couldn't load the payment window. Check your connection and try again."
        );
      }

      const orderRes = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId }),
      });
      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(orderData.error || "Could not start checkout.");
      }

      const razorpay = new (window as any).Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: site.name,
        description: `${orderData.tierName} — advice session`,
        order_id: orderData.orderId,
        prefill: contact.email.startsWith("[") ? {} : { email: contact.email },
        theme: { color: "#456854" },
        handler: async (response: any) => {
          try {
            const verifyRes = await fetch("/api/verify-razorpay-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.verified) {
              setConfirmedTierName(orderData.tierName);
              setStatus("success");
            } else {
              throw new Error("Payment could not be verified.");
            }
          } catch (err) {
            setErrorMessage(
              err instanceof Error ? err.message : "Payment could not be verified."
            );
            setStatus("error");
          }
        },
        modal: {
          ondismiss: () => {
            setStatus((s) => (s === "loading" ? "idle" : s));
          },
        },
      });

      razorpay.on("payment.failed", () => {
        setErrorMessage("The payment failed or was declined. No amount was charged.");
        setStatus("error");
      });

      razorpay.open();
      // Checkout modal is now visible — stop showing our own loading state.
      setStatus("idle");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="booking" className="section-pad bg-paper">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-sage-200 bg-sage-50 p-10 text-center">
              <CalendarCheck className="h-10 w-10 text-sage-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-medium text-ink">
                Payment received — {confirmedTierName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Thank you for booking. A confirmation with scheduling details
                will be sent to your email shortly. If you don&apos;t hear
                back within a day, please reach out at {contact.email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setConfirmedTierName(null);
                }}
                className="mt-6 text-sm font-medium text-sage-700 underline underline-offset-4"
              >
                Book another session
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-pad bg-sage-50/60">
      <div className="container-page">
        <SectionHeading
          title={booking.heading}
          description={booking.description}
        />

        {status === "error" && (
          <Reveal>
            <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {booking.tiers.map((tier, i) => {
            const isBusy = status === "loading" && activeTier === tier.id;
            return (
              <Reveal key={tier.id} delay={i * 0.1} distance={24}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-7 transition-shadow hover:shadow-lift",
                    tier.highlighted
                      ? "border-sage-400 bg-white shadow-lift ring-1 ring-sage-300"
                      : "border-sage-100 bg-white shadow-card"
                  )}
                >
                  {tier.highlighted && (
                    <span className="mb-4 w-fit rounded-full bg-sage-600 px-3 py-1 text-xs font-medium text-white">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-lg font-medium text-ink">{tier.name}</h3>
                  <p className="mt-1 text-sm text-ink-faint">{tier.duration}</p>

                  <p className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-medium text-ink">
                      ₹{tier.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-ink-faint">/ session</span>
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {tier.description}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-ink-soft"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 flex-none text-sage-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleBook(tier.id)}
                    disabled={status === "loading"}
                    className={cn(
                      "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70",
                      tier.highlighted
                        ? "bg-sage-700 text-white hover:bg-sage-800"
                        : "border border-sage-300 text-sage-800 hover:bg-sage-50"
                    )}
                  >
                    {isBusy ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Starting checkout…
                      </>
                    ) : (
                      "Book & pay securely"
                    )}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 flex max-w-2xl items-start gap-2.5 rounded-2xl border border-peach-200 bg-peach-50 px-6 py-4 text-sm leading-relaxed text-ink-soft">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-sage-600" aria-hidden="true" />
            {booking.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
