import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { createHmac, timingSafeEqual } from 'crypto';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION || '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_PREVIEW_TOKEN,
});

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
});

function verifySignature(req: NextRequest, rawBody: string) {
  const secret = process.env.SANITY_WEBHOOK_SECRET!;
  const sig = req.headers.get('sanity-webhook-signature') || '';
  const hmac = createHmac('sha256', secret).update(rawBody).digest('hex');
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(hmac));
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  if (!verifySignature(req, rawBody)) {
    return NextResponse.json(
      { ok: false, error: 'Invalid signature' },
      { status: 401 }
    );
  }

  const body = JSON.parse(rawBody) as {
    _id: string;
    _type: string;
    slug?: { current: string };
  };

  if (body._type !== 'product') {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const doc = await sanity.getDocument(body._id).catch(() => null);
  if (!doc)
    return NextResponse.json(
      { ok: false, error: 'Doc not found' },
      { status: 404 }
    );

  const name = doc.name as string;
  const description = (doc.description as string) || '';
  const slug = doc.slug?.current as string | undefined;
  const img = doc.image
    ? builder.image(doc.image).width(1200).height(800).fit('max').url()
    : undefined;

  const data = {
    name,
    description,
    imageUrl: img,
    slug,
    updatedAt: new Date().toISOString(),
  };

  await adminDb.collection('products').doc(doc._id).set(data, { merge: true });

  return NextResponse.json({ ok: true });
}
