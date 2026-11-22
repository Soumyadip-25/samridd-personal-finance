import { Link } from 'react-router-dom';
import { MochaWaveBackground } from '@/features/landing/components/MochaWaveBackground';
import { SamriddLogo } from '@/features/landing/components/SamriddLogo';
import {
  ShieldCheck,
  TrendingUp,
  Receipt,
  Sparkles,
  PieChart,
  Tag,
  BarChart3,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between">
      {/* Wave Background with Warm Ivory-to-Champagne Gradient & Subtle Burgundy Undertones (Zero external images) */}
      <MochaWaveBackground />

      {/* Hero Section — Logo on Left, Headings on Right, Centered Get Started Button & Bottom Quote */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 sm:pt-14 sm:pb-20 w-full flex-1 flex flex-col justify-center">
        {/* Two-Column Grid: Left = Logo & Plan Track Grow, Right = Headings & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: SAMRIDD Logo + PLAN • TRACK • GROW in burgundy */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <SamriddLogo size="lg" align="center" />
          </div>

          {/* Right Column: Take Control of Your Finances + Description */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-serif font-bold tracking-tight leading-[1.12]">
              <span className="text-[#141110] block">Take Control of</span>
              <span className="text-[#141110]">Your </span>
              <span className="text-burgundy italic font-serif">Finances</span>
            </h1>

            {/* Delicate curved arc underline under "Your Finances" matching reference image */}
            <svg
              className="w-48 sm:w-64 h-3 sm:h-4 text-burgundy/40 mt-1"
              viewBox="0 0 240 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 4 12 C 70 3, 170 3, 236 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Subtitle / Description in normal black color */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl font-serif text-[#141110]/85 max-w-xl leading-relaxed">
              Track your income, manage expenses, master your budgets,<br className="hidden sm:inline" />
              plan life&apos;s biggest moments, and achieve your financial goals.
            </p>
          </div>
        </div>

        {/* Centrally Aligned Down the Contents: Get Started Button */}
        <div className="mt-12 sm:mt-16 flex justify-center items-center w-full">
          <Link
            to="/signup"
            className="inline-flex items-center gap-3 px-9 py-3.5 sm:px-10 sm:py-4 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-semibold text-base sm:text-lg shadow-xl hover:bg-burgundy-hover hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Get Started</span>
            <span className="text-xl leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Bottom Tagline Divider */}
        <div className="mt-16 sm:mt-24 flex items-center justify-center gap-4 text-burgundy/80 font-serif italic text-sm sm:text-base">
          <span className="w-12 sm:w-28 h-[1px] bg-burgundy/30"></span>
          <span>Smarter choices. A more secure tomorrow.</span>
          <span className="w-12 sm:w-28 h-[1px] bg-burgundy/30"></span>
        </div>
      </section>

      {/* Explore Section (§A.6) */}
      <section id="explore" className="relative z-10 py-20 px-6 sm:px-10 lg:px-16 border-t border-latte/40 bg-mocha-surface/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cinzel font-bold text-xs uppercase tracking-[0.2em] text-burgundy">Comprehensive Capability</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy mt-2">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="font-serif italic text-espresso-muted mt-3 text-base">
              Deterministic, manual-first Indian personal finance built on clean mathematical principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Single Unified Ledger</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Income and expenses live in one central ledger. Income and Transactions pages are seamless filtered views.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Isolated Profiles</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Keep personal, family, and business finances strictly independent with schema-level composite key boundaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Life Event &ldquo;Moments&rdquo;</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Plan weddings, education, trips, or house renovations. Track commitments vs actual payments with zero double-counting.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Monthly Budgets</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Set category-level and overall monthly spending limits. Monitor real-time progress with visual threshold alerts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Paise Precision (INR)</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Zero float drift. All calculations are executed in integer paise with Indian Lakhs and Crores grouping.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Indian Financial Year</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Native April&ndash;March FY reporting presets alongside calendar years, aligned with Indian tax conventions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Custom Categories</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Seeded with standard Indian expenditure tags, with full freedom to customize, color-code, and archive tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-latte bg-surface/90 shadow-xs hover:border-burgundy/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-1 ring-latte/60">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy mb-2">Zero-Trust Admin</h3>
              <p className="text-xs text-espresso-muted leading-relaxed font-sans">
                Administrators see system aggregates only. Zero visibility into personal transactions, ledger rows, or balances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-20 px-6 sm:px-10 lg:px-16 border-t border-latte/40 bg-surface/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-cinzel font-bold text-xs uppercase tracking-[0.2em] text-burgundy">Simple &amp; Intentional</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy mt-2">
              Three steps to complete clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-8 rounded-2xl border border-latte bg-mocha-surface/90 shadow-xs">
              <span className="font-cinzel font-black text-3xl text-burgundy/40 mb-3">01</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Create Your Profile</h3>
              <p className="text-sm text-espresso-muted leading-relaxed">
                Sign up in seconds. Establish your first isolated financial profile (e.g., Personal, Family, or Business) with custom default categories.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-2xl border border-latte bg-mocha-surface/90 shadow-xs">
              <span className="font-cinzel font-black text-3xl text-burgundy/40 mb-3">02</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Record Transactions</h3>
              <p className="text-sm text-espresso-muted leading-relaxed">
                Log income and expenses manually with payment methods (UPI, Card, Cash, Netbanking). Enjoy instant deterministic balance reconciliations.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-2xl border border-latte bg-mocha-surface/90 shadow-xs">
              <span className="font-cinzel font-black text-3xl text-burgundy/40 mb-3">03</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Plan &amp; Master Goals</h3>
              <p className="text-sm text-espresso-muted leading-relaxed">
                Set monthly category budgets and orchestrate major life Moments. Watch your net savings rate grow with trusted period analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-20 px-6 sm:px-10 lg:px-16 border-t border-latte/40 bg-mocha-surface/70">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-cinzel font-bold text-xs uppercase tracking-[0.2em] text-burgundy">The Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy mt-2 mb-6">
            Why Manual-First Matters
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-espresso-muted leading-relaxed max-w-3xl mx-auto">
            &ldquo;When software automatically connects to bank accounts, users disconnect from the reality of their spending. By recording transactions intentionally, you cultivate true awareness, eliminate privacy liabilities, and regain complete sovereignty over your financial life.&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-serif font-semibold text-burgundy">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-income" /> Zero Bank Scraping
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-income" /> 100% Indian Data Sovereignty
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-income" /> Fully DPDP Act (2023) Aligned
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
