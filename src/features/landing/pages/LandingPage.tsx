import { Link } from 'react-router-dom';
import { SamriddLogo } from '@/features/landing/components/SamriddLogo';
import {
  Sparkles,
  Layers,
  Wallet,
  Receipt,
  Sliders,
  Tags,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between">
      {/* Hero Section — Logo on Left, Headings on Right, Centered Get Started Button & Bottom Quote */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-8 sm:pt-10 sm:pb-12 w-full flex-1 flex flex-col justify-center">
        {/* Two-Column Grid: Left = Logo & Plan Track Grow, Right = Headings & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: SAMRIDD Logo + PLAN • TRACK • GROW in bold burgundy */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <SamriddLogo size="lg" align="center" />
          </div>

          {/* Right Column: Take Control of Your Finances + Description + Quote */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main Headline with high-contrast obsidian black & deep burgundy */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-serif font-black tracking-tight leading-[1.12]">
              <span className="text-[#100C0B] block">Take Control of</span>
              <span className="text-[#100C0B]">Your </span>
              <span className="relative inline-block text-burgundy italic font-serif font-black">
                Finances
                {/* Wavy curved underline only under "Finances" in Cosmic Latte / Mocha */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#B7A89A] pointer-events-none"
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 11 C 45 3, 115 3, 157 11"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Description & Quote Container */}
            <div className="mt-6 max-w-xl w-full">
              <p className="text-base sm:text-lg lg:text-xl font-serif text-[#100C0B] leading-relaxed font-medium">
                Track your income, manage expenses, master your budgets,<br className="hidden sm:inline" />
                plan life&apos;s biggest moments, and achieve your financial goals.
              </p>

              {/* Quote Line on the right side of the writing */}
              <div className="flex justify-end mt-3">
                <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-serif italic text-burgundy font-bold tracking-wide text-right">
                  ~ all in one place
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Centrally Aligned Down the Contents: Refined Sleek Get Started Button */}
        <div className="mt-7 sm:mt-9 flex flex-col items-center justify-center w-full gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2.5 px-8 py-2.5 sm:px-10 sm:py-3 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-bold text-base sm:text-lg shadow-xl hover:bg-burgundy-hover hover:text-[#FAF5EE] hover:shadow-burgundy/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group ring-1 ring-burgundy/30"
          >
            <span>Get Started</span>
            <span className="text-xl leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>

          {/* Three Feature Badges matching user reference (media_1795377857927_81768710.png) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-2">
            {/* 1. Secure & Private */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/40 flex items-center justify-center shadow-xs shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-burgundy" />
              </div>
              <span className="font-serif font-bold text-base sm:text-lg text-[#100C0B] tracking-wide whitespace-nowrap">
                Secure &amp; Private
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-[1.5px] bg-[#B7A89A]/60" />

            {/* 2. Multiple Profiles */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/40 flex items-center justify-center shadow-xs shrink-0">
                <Layers className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-burgundy" />
              </div>
              <span className="font-serif font-bold text-base sm:text-lg text-[#100C0B] tracking-wide whitespace-nowrap">
                Multiple Profiles
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-[1.5px] bg-[#B7A89A]/60" />

            {/* 3. Insightful Reports */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#E8DCC6]/60 border border-[#B7A89A]/40 flex items-center justify-center shadow-xs shrink-0">
                <BarChart3 className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-burgundy" />
              </div>
              <span className="font-serif font-bold text-base sm:text-lg text-[#100C0B] tracking-wide whitespace-nowrap">
                Insightful Reports
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Tagline Divider cleanly visible above the minimal waves */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 text-burgundy font-serif italic font-semibold text-sm sm:text-base relative z-20">
          <span className="w-12 sm:w-28 h-[1.5px] bg-burgundy/60"></span>
          <span className="flex items-center gap-2">
            <span className="text-xs">✦</span>
            <span>Smarter choices. A more secure tomorrow.</span>
            <span className="text-xs">✦</span>
          </span>
          <span className="w-12 sm:w-28 h-[1.5px] bg-burgundy/60"></span>
        </div>
      </section>

      {/* Explore Section — High Glamour Bento Architecture */}
      <section id="explore" className="relative z-10 py-24 px-6 sm:px-10 lg:px-16 border-t-2 border-latte/60 bg-[#FAF4EA]/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto">
          {/* Section Editorial Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/10 border-2 border-burgundy/25 text-burgundy font-cinzel font-bold text-xs uppercase tracking-[0.24em] mb-4 shadow-xs">
              <span>✦ The Architecture of Clarity ✦</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-burgundy tracking-tight leading-tight">
              Everything you need to master your money. In one place.
            </h2>
            <p className="font-serif italic text-espresso-muted mt-4 text-base sm:text-lg leading-relaxed font-medium">
              SAMRIDD brings your everyday financial activities into one sovereign, dignified space. Whether you draw a fixed salary, earn through consulting milestones, run a business, or receive occasional inflows, keep genuine control without chaotic spreadsheets or black-box bank connections.
            </p>
          </div>

          {/* Feature Bento Grid (7 Core Pillars Redesigned with High Glamour) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* 1. Moments — Occasion & Milestone Planning (Span 7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-mocha text-burgundy flex items-center justify-center ring-2 ring-burgundy/20 shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-burgundy font-bold px-3 py-1 rounded-full bg-burgundy/15 border border-burgundy/30">
                    ✦ Signature Indian Experience ✦
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-burgundy mb-2">
                  Moments &mdash; Plan the Finances Behind What Matters
                </h3>
                <p className="text-sm sm:text-base text-[#1E1715] leading-relaxed font-sans font-medium">
                  Life&apos;s biggest occasions come with significant commitments. Moments gives you a dedicated canvas to budget and track weddings, festivals, pujas, birthdays, or family vacations&mdash;monitoring planned costs, cash paid, and pending commitments without distorting your regular monthly operating budget.
                </p>
              </div>

              {/* Glamorous Interactive Preview: Sister's Wedding Budget */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 space-y-3.5 shadow-inner">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-serif font-bold text-burgundy flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-burgundy" /> Sister&apos;s Wedding &bull; Winter 2026
                  </span>
                  <span className="text-[#100C0B] font-mono font-bold">Total Budget: &#8377;5,00,000</span>
                </div>
                <div className="w-full bg-latte/40 h-2.5 rounded-full overflow-hidden p-0.5">
                  <div className="bg-burgundy h-full rounded-full transition-all duration-500 shadow-xs" style={{ width: '72%' }} />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="bg-[#FAF4EA] p-2 rounded-xl border border-latte/40">
                    <span className="block text-[10px] uppercase tracking-wider text-latte-dark font-bold">Actual Paid</span>
                    <span className="font-mono font-bold text-income text-sm">&#8377;2,80,000</span>
                  </div>
                  <div className="bg-[#FAF4EA] p-2 rounded-xl border border-latte/40">
                    <span className="block text-[10px] uppercase tracking-wider text-latte-dark font-bold">Committed</span>
                    <span className="font-mono font-bold text-burgundy text-sm">&#8377;80,000</span>
                  </div>
                  <div className="bg-[#FAF4EA] p-2 rounded-xl border border-latte/40">
                    <span className="block text-[10px] uppercase tracking-wider text-latte-dark font-bold">Buffer Left</span>
                    <span className="font-mono font-bold text-[#100C0B] text-sm">&#8377;1,40,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Independent Financial Profiles (Span 5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-burgundy mb-2">
                  Independent Financial Profiles
                </h3>
                <p className="text-sm sm:text-base text-[#1E1715] leading-relaxed font-sans font-medium">
                  Manage personal, freelance, and family finances within a single account. Each profile operates as a sovereign workspace with independent transactions, categories, budgets, and reports with zero cross-profile bleed.
                </p>
              </div>

              {/* Glamorous Profile Switcher Preview */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 flex flex-col gap-3 shadow-inner">
                <div className="text-[11px] font-cinzel uppercase tracking-wider text-latte-dark font-bold">Sovereign Profile Workspaces</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-burgundy text-[#E8DCC6] font-serif text-xs font-bold shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-income animate-pulse" /> Personal Finance
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF4EA] border border-[#B7A89A] text-[#1E1715] font-serif text-xs font-semibold">
                    Freelance Studio
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#FAF4EA] border border-[#B7A89A] text-[#1E1715] font-serif text-xs font-semibold">
                    Family Trust
                  </span>
                </div>
                <span className="text-xs text-espresso-muted font-serif italic pt-1">
                  ✓ Composite-key boundary isolation guarantees zero data bleed.
                </span>
              </div>
            </div>

            {/* 3. Income Management (Span 4 cols) */}
            <div className="lg:col-span-4 p-7 sm:p-8 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <Wallet className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy mb-2">
                  Income Management
                </h3>
                <p className="text-sm text-[#1E1715] leading-relaxed font-sans font-medium">
                  Know exactly what you earn. Easily log fixed salaries, freelance remittances, business dividends, daily earnings, or festive shagun. Support for multiple inflows on the same day.
                </p>
              </div>

              {/* Inflow Snapshot */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 space-y-2.5 text-xs shadow-inner">
                <div className="flex items-center justify-between font-mono bg-[#FAF4EA] p-2 rounded-xl border border-latte/30">
                  <span className="text-[#100C0B] font-semibold">Consulting Retainer &bull; UPI</span>
                  <span className="text-income font-extrabold text-sm">+&#8377;45,000</span>
                </div>
                <div className="flex items-center justify-between font-mono bg-[#FAF4EA] p-2 rounded-xl border border-latte/30">
                  <span className="text-[#100C0B] font-semibold">Freelance Milestone &bull; Bank</span>
                  <span className="text-income font-extrabold text-sm">+&#8377;18,500</span>
                </div>
                <div className="flex items-center justify-between font-mono bg-[#FAF4EA] p-2 rounded-xl border border-latte/30">
                  <span className="text-[#100C0B] font-semibold">Occasional Shagun &bull; Cash</span>
                  <span className="text-income font-extrabold text-sm">+&#8377;5,000</span>
                </div>
              </div>
            </div>

            {/* 4. Single Unified Ledger (Span 4 cols) */}
            <div className="lg:col-span-4 p-7 sm:p-8 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy mb-2">
                  Unified Central Ledger
                </h3>
                <p className="text-sm text-[#1E1715] leading-relaxed font-sans font-medium">
                  Keep every transaction organized. Income and expenses live together in mathematical harmony. Filter by payment method (UPI, Netbanking, Cards, Cash) with deterministic paise precision.
                </p>
              </div>

              {/* Central Ledger Snapshot */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 space-y-2.5 text-xs shadow-inner">
                <div className="flex items-center justify-between text-xs text-latte-dark border-b border-latte/40 pb-1.5 font-bold">
                  <span>Single Ledger Feed</span>
                  <span className="font-mono text-income font-extrabold">Net: +&#8377;38,250.00</span>
                </div>
                <div className="flex items-center justify-between font-mono bg-[#FAF4EA] p-2 rounded-xl border border-latte/30">
                  <span className="text-[#100C0B] truncate font-medium">Groceries &bull; UPI</span>
                  <span className="text-burgundy font-extrabold">-&#8377;2,140.00</span>
                </div>
                <div className="flex items-center justify-between font-mono bg-[#FAF4EA] p-2 rounded-xl border border-latte/30">
                  <span className="text-[#100C0B] truncate font-medium">Electricity &bull; Netbanking</span>
                  <span className="text-burgundy font-extrabold">-&#8377;1,820.00</span>
                </div>
              </div>
            </div>

            {/* 5. Budget Planning (Span 4 cols) */}
            <div className="lg:col-span-4 p-7 sm:p-8 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy mb-2">
                  Budget Planning
                </h3>
                <p className="text-sm text-[#1E1715] leading-relaxed font-sans font-medium">
                  Give every rupee a purpose. Set an overall monthly ceiling along with category-specific limits. Track real-time utilization pacing and receive proactive threshold warnings before overspending.
                </p>
              </div>

              {/* Budget Pacing Snapshot */}
              <div className="mt-5 p-4 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 space-y-3 text-xs shadow-inner">
                <div className="flex justify-between font-serif">
                  <span className="text-burgundy font-bold">Dining &amp; Socializing</span>
                  <span className="font-mono text-[#100C0B] font-bold">&#8377;8,400 / &#8377;10,000</span>
                </div>
                <div className="w-full bg-latte/40 h-2.5 rounded-full overflow-hidden p-0.5">
                  <div className="bg-amber-600 h-full rounded-full" style={{ width: '84%' }} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300 w-fit">
                  <span>&#9888; 84% utilized &bull; 6 days left in cycle</span>
                </div>
              </div>
            </div>

            {/* 6. Categories — Organise Your Money Your Way (Span 6 cols) */}
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <Tags className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy mb-2">
                  Categories &mdash; Organise Your Money Your Way
                </h3>
                <p className="text-sm sm:text-base text-[#1E1715] leading-relaxed font-sans font-medium">
                  Bring structure to your records through meaningful classifications. Seeded with authentic Indian spending habits, with complete freedom to create, color-code, and archive custom tags.
                </p>
              </div>

              {/* Category Badges Preview */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 shadow-inner">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-xl bg-burgundy/15 border border-burgundy/40 text-burgundy font-serif font-bold shadow-xs">
                    &#128591; Puja &amp; Rituals
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-income/15 border border-income/40 text-income font-serif font-bold shadow-xs">
                    &#127806; Kitchen &amp; Groceries
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-latte/25 border border-latte/50 text-[#100C0B] font-serif font-bold shadow-xs">
                    &#127968; Rent &amp; Maintenance
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-latte/25 border border-latte/50 text-[#100C0B] font-serif font-bold shadow-xs">
                    &#128663; Vehicle &amp; Fuel
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-burgundy/15 border border-burgundy/40 text-burgundy font-serif font-bold shadow-xs">
                    &#127873; Gifting &amp; Shagun
                  </span>
                </div>
              </div>
            </div>

            {/* 7. Financial Reports — Turn Records into Clarity (Span 6 cols) */}
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl border-2 border-[#B7A89A] hover:border-burgundy/80 bg-[#FCF8F2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-mocha text-burgundy flex items-center justify-center mb-4 ring-2 ring-burgundy/20 shadow-xs">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy mb-2">
                  Financial Reports &mdash; Turn Records into Clarity
                </h3>
                <p className="text-sm sm:text-base text-[#1E1715] leading-relaxed font-sans font-medium">
                  Transform entries into foresight. Explore income and expense trends, evaluate category-wise distribution, and toggle natively between Calendar Year and April&ndash;March Indian Financial Year presets.
                </p>
              </div>

              {/* Reports Preview */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A]/60 space-y-2.5 text-xs shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-burgundy text-sm">April &ndash; March Indian FY Preset</span>
                  <span className="px-3 py-1 rounded-full bg-income/20 text-income font-mono text-xs font-black border border-income/30">
                    Net Savings: +34.8%
                  </span>
                </div>
                <p className="text-[#1E1715] text-xs font-sans font-medium">
                  Compare monthly trajectories, identify seasonal surges, and make informed choices with zero confusing financial jargon.
                </p>
              </div>
            </div>
          </div>

          {/* Grand Philosophy Centerpiece Banner */}
          <div className="mt-20 rounded-3xl border-2 border-burgundy/40 bg-gradient-to-br from-[#FAF4EA] via-[#F5ECE0] to-[#EBDCC8] p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-3xl mx-auto space-y-5">
              <span className="font-cinzel font-bold text-xs uppercase tracking-[0.26em] text-burgundy">
                ✦ The SAMRIDD Philosophy ✦
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-burgundy leading-snug">
                One platform. A clearer financial picture.
              </h3>
              <p className="font-serif italic text-base sm:text-xl text-[#1E1715] leading-relaxed font-medium">
                &ldquo;SAMRIDD is designed around the way people actually earn, spend, and plan. You don&apos;t need a fixed monthly salary, multiple fragmented applications, or complicated spreadsheets to organise your money. Start with what you earn, record what you spend, plan for what matters, and build timeless financial calm.&rdquo;
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  to="/signup"
                  className="px-10 py-4 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-bold text-base sm:text-lg hover:bg-burgundy-hover hover:text-[#FAF5EE] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  Start Your Sovereign Ledger Today &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-24 px-6 sm:px-10 lg:px-16 border-t-2 border-latte/60 bg-[#FAF4EA]/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-cinzel font-bold text-xs uppercase tracking-[0.24em] text-burgundy">✦ Simple &amp; Intentional ✦</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-burgundy mt-2">
              Three steps to complete clarity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start p-8 rounded-3xl border-2 border-[#B7A89A] bg-[#FCF8F2] shadow-sm hover:shadow-md transition-all">
              <span className="font-cinzel font-black text-4xl text-burgundy/40 mb-3">01</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Create Your Profile</h3>
              <p className="text-sm text-[#1E1715] leading-relaxed font-medium">
                Sign up in seconds. Establish your first isolated financial profile (e.g., Personal, Family, or Business) with custom default categories.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-3xl border-2 border-[#B7A89A] bg-[#FCF8F2] shadow-sm hover:shadow-md transition-all">
              <span className="font-cinzel font-black text-4xl text-burgundy/40 mb-3">02</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Record Transactions</h3>
              <p className="text-sm text-[#1E1715] leading-relaxed font-medium">
                Log income and expenses manually with payment methods (UPI, Card, Cash, Netbanking). Enjoy instant deterministic balance reconciliations.
              </p>
            </div>

            <div className="flex flex-col items-start p-8 rounded-3xl border-2 border-[#B7A89A] bg-[#FCF8F2] shadow-sm hover:shadow-md transition-all">
              <span className="font-cinzel font-black text-4xl text-burgundy/40 mb-3">03</span>
              <h3 className="font-serif font-bold text-xl text-burgundy mb-2">Plan &amp; Master Goals</h3>
              <p className="text-sm text-[#1E1715] leading-relaxed font-medium">
                Set monthly category budgets and orchestrate major life Moments. Watch your net savings rate grow with trusted period analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-24 px-6 sm:px-10 lg:px-16 border-t-2 border-latte/60 bg-[#FAF4EA]/90">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-cinzel font-bold text-xs uppercase tracking-[0.24em] text-burgundy">✦ The Philosophy ✦</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-burgundy mt-2 mb-6">
            Why Manual-First Matters
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl text-[#100C0B] leading-relaxed max-w-3xl mx-auto font-medium">
            &ldquo;When software automatically connects to bank accounts, users disconnect from the reality of their spending. By recording transactions intentionally, you cultivate true awareness, eliminate privacy liabilities, and regain complete sovereignty over your financial life.&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-serif font-bold text-burgundy">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-income" /> Secure &amp; Private
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-income" /> Multiple Profiles
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-income" /> Insightful Reports
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
