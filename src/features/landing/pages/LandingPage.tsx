import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary)] mb-6 border border-[var(--primary)]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Manual-First &middot; Deterministic INR Finance</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)] max-w-3xl mx-auto leading-tight">
          True mastery over your money. <span className="text-[var(--primary)]">Without bank scraping.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto">
          SAMRIDD is built for intentional, private personal finance in India. Record single-ledger transactions, isolate independent financial profiles, and plan major life events with precision.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-95 shadow-md flex items-center justify-center gap-2"
          >
            <span>Start Your Ledger</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] font-medium hover:bg-[var(--surface-raised)]"
          >
            Log in to Profile
          </Link>
        </div>
      </section>

      {/* Feature Highlights (§0.2 Non-negotiable principles) */}
      <section id="features" className="w-full bg-[var(--surface)] border-y border-[var(--border)] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Single Unified Ledger</h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              All income and expenses reside in one ledger. No duplicate entries, no artificial balance adjustments. Every rupee is accounted for with integer-paise accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Independent Financial Profiles</h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Manage personal, family, freelance, or business finances under one account with complete schema-level isolation. No cross-profile data leakage.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Life Event "Moments"</h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Plan weddings, vacations, or relocations. Track planned commitments vs. actual payments atomically without ever double-counting expenses in your budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
