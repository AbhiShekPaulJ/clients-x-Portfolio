import { NextResponse } from "next/server";
import crypto from "crypto";

const keySecret = process.env.RAZORPAY_KEY_SECRET;

export async function POST(request: Request) {
  if (!keySecret) {
    return NextResponse.json(
      { error: "Razorpay is not configured yet." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = body ?? {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  // Recompute the expected signature server-side and compare — this is the
  // step that actually confirms the payment is genuine and wasn't forged by
  // a client-side script. Never trust a "payment succeeded" message from the
  // browser alone.
  const expectedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    return NextResponse.json({ verified: false, error: "Signature mismatch." }, { status: 400 });
  }

  // TODO: this is the right place to record the booking — e.g. save it to a
  // database, send a confirmation email to the client and to Sowmya, or
  // create a calendar event. None of that is wired up yet.

  return NextResponse.json({ verified: true });
}
