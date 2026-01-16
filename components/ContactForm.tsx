'use client';

import { useState } from 'react';
import { track } from '@/lib/analytics';
import { Button } from './Button';

export function ContactForm({
  formType
}: {
  formType: 'consumer' | 'oem' | 'distributor';
}) {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // v1: no backend; integrate your email/CRM later.
    track({ name: 'contact_submit', payload: { formType, topic: (fd.get('topic') ?? '') as string } });
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      {sent ? (
        <div className="rounded-xl border border-line bg-white/60 p-4 text-sm">
          Message captured (placeholder). Wire this to your CRM/email service in v2.
        </div>
      ) : null}

      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold" htmlFor="name">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm" />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold" htmlFor="topic">Topic</label>
        <input id="topic" name="topic" placeholder={formType === 'oem' ? 'Part #, platform, drawing request…' : 'How can we help?'} className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="text-xs font-semibold" htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-xl border border-line bg-bg/60 px-3 py-2 text-sm" />
      </div>

      <div className="flex gap-2">
        <Button variant="primary">Send</Button>
        <Button href="/where-to-buy" variant="secondary">Where to Buy</Button>
      </div>
    </form>
  );
}
