import { Link } from 'react-router-dom';
import { Scale, AlertTriangle, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Document Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-serif font-bold text-burgundy hover:text-burgundy-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to SAMRIDD Home</span>
          </Link>

          {/* Legal Switcher Tabs */}
          <div className="inline-flex rounded-full p-1 bg-mocha border border-latte/50 shadow-xs">
            <Link
              to="/privacy"
              className="px-5 py-1.5 rounded-full text-burgundy hover:text-burgundy-hover font-serif font-bold text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="px-5 py-1.5 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-bold text-xs shadow-xs">
              Terms of Service
            </span>
          </div>
        </div>

        {/* Main Document Card */}
        <div className="rounded-3xl border-2 border-[#C2B09D] bg-[#FCF8F2]/95 p-8 sm:p-14 shadow-2xl backdrop-blur-xs">
          {/* Header */}
          <div className="border-b-2 border-latte/40 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/10 border border-burgundy/25 text-burgundy font-cinzel font-bold text-xs uppercase tracking-[0.24em] mb-3">
              <Scale className="w-4 h-4 text-burgundy" />
              <span>Standard User Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-burgundy tracking-tight leading-tight">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base font-serif italic text-espresso-muted">
              Effective Date: November 24, 2026 &bull; Version 1.2 &bull; Governing Jurisdiction: Courts of New Delhi, India
            </p>
          </div>

          {/* Critical Advisory & Regulatory Disclaimer Callout */}
          <div className="mb-10 p-6 rounded-2xl bg-[#F6EFE3] border-2 border-burgundy/30 space-y-3">
            <h3 className="font-serif font-bold text-base text-burgundy flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-burgundy" /> Important Regulatory &amp; Financial Disclaimer
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1715] leading-relaxed font-sans font-medium">
              SAMRIDD is a manual-first personal bookkeeping, ledger, budgeting, and financial organization software. 
              <strong> SAMRIDD is NOT a bank, NOT a non-banking financial company (NBFC), and NOT a SEBI-registered Investment Advisor (RIA) or Research Analyst.</strong> 
              The calculations, charts, and budget projections provided on this platform are deterministic mathematical evaluations based strictly on figures input by you. Nothing on SAMRIDD constitutes personalized tax, legal, investment, or financial advice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-serif font-bold text-burgundy">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Bookkeeping Tool Only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Not a SEBI Advisor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Zero Bank Liability
              </span>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="space-y-10 text-sm sm:text-base text-[#1E1715] font-sans leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account, browsing, or utilizing the SAMRIDD application, website, or APIs (collectively, the &ldquo;Service&rdquo;), you enter into a legally binding contract with <strong>SAMRIDD Technologies Private Limited</strong> (&ldquo;SAMRIDD&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p className="mt-2">
                If you do not agree to these Terms of Service (&ldquo;Terms&rdquo;) or our Privacy Policy, you must refrain from registering or immediately discontinue use of the Service. These terms constitute an electronic record in terms of the <strong>Information Technology Act, 2000</strong> and rules thereunder.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                2. Eligibility &amp; Account Obligations
              </h2>
              <p>
                To be eligible to register for SAMRIDD, you must:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm font-medium">
                <li>Be at least 18 years of age and legally competent to contract under the <strong>Indian Contract Act, 1872</strong>.</li>
                <li>Provide accurate, genuine, and current registration details (name and email address).</li>
                <li>Maintain the confidentiality and security of your login credentials. You are solely liable for all activities, entries, or deletions executed under your authenticated session.</li>
                <li>Notify SAMRIDD immediately at <a href="mailto:security@samridd.in" className="text-burgundy underline font-bold">security@samridd.in</a> upon identifying any unauthorized breach of your account.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                3. Nature of Service &amp; Mathematical Determinism
              </h2>
              <p>
                SAMRIDD operates on an intentional, manual-first single-ledger architecture:
              </p>
              <div className="mt-4 space-y-3">
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">A. Single Ledger Arithmetic</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    Income and expense transactions are tracked in discrete integer paise to eliminate floating-point rounding drift. Balance computations reflect purely the transactions entered by the user. SAMRIDD does not independently verify the truthfulness of your logged figures with third-party banks or merchants.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">B. Life Event &ldquo;Moments&rdquo; Module</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    Occasion budgets (weddings, festivals, travel) segregate estimated allocations, actual cash payments, and pending commitments. They do not constitute escrow accounts, vendor guarantee contracts, or formal financial instruments.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">C. Multi-Profile Isolation</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    Users may establish separate profiles (e.g. Personal, Family, Freelance). Profiles are strictly segregated via composite primary keys, but all remain governed under the primary account holder&apos;s authentication umbrella.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                4. User Data Ownership &amp; License
              </h2>
              <p>
                <strong>You retain 100% intellectual property and ownership over all financial entries, notes, memos, and categories you create on SAMRIDD.</strong>
              </p>
              <p className="mt-2">
                You grant SAMRIDD a limited, non-exclusive, revocable, royalty-free license solely to host, compute, and render your data for the exclusive purpose of delivering the Service to you. SAMRIDD will never sell, lease, or monetize your ledger data to advertisers or financial brokers. You may export your entire ledger in open JSON or CSV format at any time.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                5. Prohibited Activities &amp; Acceptable Use
              </h2>
              <p>
                When utilizing SAMRIDD, you explicitly agree that you shall NOT:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm font-medium">
                <li>Deploy automated bots, spiders, crawlers, or scrapers to harvest platform interfaces or content.</li>
                <li>Decompile, reverse-engineer, or attempt to extract source algorithms or schema structures of the Service.</li>
                <li>Attempt to bypass composite key profile boundaries, privilege escalations, or access other users&apos; accounts.</li>
                <li>Introduce malicious payloads, SQL injections, or denial-of-service vectors against SAMRIDD infrastructure.</li>
                <li>Use SAMRIDD to log or orchestrate activities that violate Indian law (including the Prevention of Money Laundering Act, 2002).</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                6. Warranty Disclaimer &amp; Limitation of Liability
              </h2>
              <p>
                THE SERVICE IS PROVIDED ON AN <strong>&ldquo;AS IS&rdquo;</strong> AND <strong>&ldquo;AS AVAILABLE&rdquo;</strong> BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR FINANCIAL PURPOSE, OR UNINTERRUPTED AVAILABILITY.
              </p>
              <p className="mt-3">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, SAMRIDD TECHNOLOGIES, ITS DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-xs sm:text-sm">
                <li>Financial losses, investment deficits, or penalty fees resulting from decisions made based on manual user entries.</li>
                <li>Discrepancies between manual ledger entries and actual third-party bank balances.</li>
                <li>Temporary service interruptions, scheduled maintenance downtime, or network latency.</li>
              </ul>
              <p className="mt-2 text-xs sm:text-sm">
                IN NO EVENT SHALL SAMRIDD&apos;S TOTAL AGGREGATE LIABILITY EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY YOU TO SAMRIDD FOR THE SERVICE DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR &rupee;1,000 (INR ONE THOUSAND), WHICHEVER IS LESS.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                7. Termination &amp; Account Deletion
              </h2>
              <p>
                You may terminate your account at any time without fees or notice via <em>Settings &rarr; Delete Account</em>. Upon initiation of account deletion:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm">
                <li>Your access credentials and active sessions are revoked immediately.</li>
                <li>Your ledger rows, profiles, and occasion records are marked for cryptographic deletion and permanently purged within 30 days per our Privacy Policy.</li>
              </ul>
              <p className="mt-2">
                SAMRIDD reserves the right to suspend or terminate accounts that breach these Terms or engage in fraudulent or abusive activities.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                8. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by, interpreted, and construed in accordance with the substantive laws of the <strong>Republic of India</strong>, without regard to conflict of law principles.
              </p>
              <p className="mt-2">
                In the event of any controversy, claim, or dispute arising out of or relating to these Terms, the parties shall first endeavor to resolve the matter amicably through good-faith discussions with our Grievance Officer within thirty (30) days. Failing amicable resolution, all disputes shall be subject to the <strong>exclusive jurisdiction of the competent courts of New Delhi, India</strong>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="p-6 rounded-2xl bg-[#F6EFE3] border border-[#C2B09D]">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-burgundy mb-2 flex items-center gap-2">
                9. Modifications to Terms &amp; Inquiries
              </h2>
              <p className="text-xs sm:text-sm text-[#1E1715] leading-relaxed">
                SAMRIDD reserves the right to amend these Terms from time to time to reflect evolving features or statutory mandates under Indian law. When changes are material, we will provide at least fifteen (15) days prior notice via email or a prominent platform banner. Continued use of SAMRIDD after such revisions constitutes full acceptance.
              </p>
              <div className="mt-4 pt-3 border-t border-latte/40 text-xs sm:text-sm space-y-1">
                <p><strong>Legal Department:</strong> SAMRIDD Technologies Private Limited</p>
                <p><strong>Corporate Inquiries:</strong> <a href="mailto:legal@samridd.in" className="text-burgundy underline font-bold">legal@samridd.in</a></p>
                <p><strong>Support &amp; Feedback:</strong> <a href="mailto:support@samridd.in" className="text-burgundy underline font-bold">support@samridd.in</a></p>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t-2 border-latte/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-espresso-muted font-serif">
              &copy; {new Date().getFullYear()} SAMRIDD Technologies. All rights reserved.
            </span>
            <div className="flex items-center gap-6 text-xs font-serif font-bold text-burgundy">
              <Link to="/privacy" className="hover:underline flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> View Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
