import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-mocha border border-latte text-burgundy mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-burgundy" />
          <span>Manual-First &middot; Deterministic INR Finance</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-espresso max-w-3xl mx-auto leading-tight">
          True mastery over your money. <span className="text-burgundy underline decoration-latte">Without bank scraping.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-espresso-muted max-w-2xl mx-auto font-medium">
          SAMRIDD is built for intentional, private personal finance in India. Record single-ledger transactions, isolate independent financial profiles, and plan major life events with precision.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-burgundy text-white font-bold hover:bg-burgundy-hover shadow-lg flex items-center justify-center gap-2 ring-2 ring-burgundy/20"
          >
            <span>Start Your Ledger</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-latte bg-mocha font-bold text-burgundy hover:bg-mocha-surface shadow-xs"
          >
            Log in to Profile
          </Link>
        </div>
      </section>

      {/* Feature Highlights (§0.2 Non-negotiable principles) */}
      <section id="features" className="w-full bg-mocha-surface border-y border-latte py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-latte bg-surface shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-burgundy">Single Unified Ledger</h3>
            <p className="text-sm text-espresso-muted leading-relaxed">
              All income and expenses reside in one ledger. No duplicate entries, no artificial balance adjustments. Every rupee is accounted for with integer-paise accuracy.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-latte bg-surface shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-burgundy">Independent Financial Profiles</h3>
            <p className="text-sm text-espresso-muted leading-relaxed">
              Manage personal, family, freelance, or business finances under one account with complete schema-level isolation. No cross-profile data leakage.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-latte bg-surface shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-burgundy">Life Event &ldquo;Moments&rdquo;</h3>
            <p className="text-sm text-espresso-muted leading-relaxed">
              Plan weddings, vacations, or relocations. Track planned commitments vs. actual payments atomically without ever double-counting expenses in your budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
