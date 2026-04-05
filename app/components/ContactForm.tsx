'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Collaboration Request Sent!</h3>
        <p className="mt-2 text-muted-foreground">Thank you for reaching out. I'm excited about the possibility of working together on future innovations.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-bold text-primary hover:underline"
        >
          Send another proposal
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="grid gap-6"
    >
      <div className="text-center mb-2">
        <h3 className="text-xl font-bold text-foreground">Future Collaboration</h3>
        <p className="text-sm text-muted-foreground">Share your vision for a potential partnership or project.</p>
      </div>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
        <input
          required
          type="text"
          id="name"
          placeholder="Enter your name"
          className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
        <input
          required
          type="email"
          id="email"
          placeholder="your@email.com"
          className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">Collaboration Plan</label>
        <textarea
          required
          id="message"
          rows={4}
          placeholder="Describe your plan for future collaborations..."
          className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
      >
        <motion.span
          animate={status === 'submitting' ? { x: -20, opacity: 0 } : { x: 0, opacity: 1 }}
        >
          {status === 'submitting' ? 'Processing...' : 'Send Collaboration Proposal'}
        </motion.span>
        <Send className={cn("h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", status === 'submitting' && "animate-pulse")} />
      </button>
    </motion.form>
  );
}

import { cn } from '@/lib/utils';
