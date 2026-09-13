import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { booking } from "@/data/content";

// Server-side only — never expose the key secret to the browser.
const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request: Request) {
  if (!keyId || !keySecret) {
    return NextResponse.json(
      {
        error:
          "Razorpay is not configured yet. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to your environment before accepting real payments.",
      },
      { status: 500 }
    );
  }

  let tierId: string | undefined;
  try {
    const body = await request.json();
    tierId = body?.tierId;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // The price is looked up server-side from the tier id, rather than trusting
  // an amount sent by the browser, so a request can't be tampered with to
  // pay less than the listed price.
  const tier = booking.tiers.find((t) => t.id === tierId);
  if (!tier) {
    return NextResponse.json({ error: "Unknown session type." }, { status: 400 });
  }

  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

  try {
    const order = await razorpay.orders.create({
      amount: tier.price * 100, // paise
      currency: booking.currency,
      receipt: `${tier.id}-${Date.now()}`,
      notes: { tierId: tier.id, tierName: tier.name },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      tierName: tier.name,
    });
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    return NextResponse.json(
      { error: "Could not create the order. Please try again shortly." },
      { status: 502 }
    );
  }
}
