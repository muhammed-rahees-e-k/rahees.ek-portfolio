import { NextResponse } from 'next/server';
import * as z from 'zod';

import { rateLimitCheck } from '@/lib/rateLimit';

export const runtime = 'edge';

const ContactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email(),
  mobile: z.string().min(5).max(30),
  message: z.string().min(2).max(5000)
});

async function verifyTurnstile(): Promise<boolean> {
  return true;
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.issues.map(i => i.message) },
      { status: 400 }
    );
  }

  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  const limited = rateLimitCheck(ip);
  if (limited) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const captchaOk = await verifyTurnstile();
  if (!captchaOk) {
    return NextResponse.json({ error: 'Captcha failed' }, { status: 403 });
  }

  const { name, email, mobile, message } = parsed.data;
  const payload = {
    name,
    mobile,
    email,
    message,
    tenant: 39
  };

  try {
    const upstream = await fetch('https://staging-api.raihsuite.com/v1/crm/enquiries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      console.error('[contact] Upstream error response:', errorText);
      return NextResponse.json({ error: 'Upstream error submitting enquiry' }, { status: 502 });
    }

    const data = await upstream.json();
    return NextResponse.json({ status: 'ok', data }, { status: 200 });
  } catch (err) {
    console.error('[contact] Network error:', err);
    return NextResponse.json({ error: 'Network error connecting to CRM backend' }, { status: 502 });
  }
}