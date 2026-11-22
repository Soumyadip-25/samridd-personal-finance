import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Database, UserCheck, Mail, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
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
            <span className="px-5 py-1.5 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-bold text-xs shadow-xs">
              Privacy Policy
            </span>
            <Link
              to="/terms"
              className="px-5 py-1.5 rounded-full text-burgundy hover:text-burgundy-hover font-serif font-bold text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Main Document Card */}
        <div className="rounded-3xl border-2 border-[#B7A89A] bg-[#FCF8F2]/95 p-8 sm:p-14 shadow-2xl backdrop-blur-xs">
          {/* Header */}
          <div className="border-b-2 border-latte/40 pb-8 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy/10 border border-burgundy/25 text-burgundy font-cinzel font-bold text-xs uppercase tracking-[0.24em] mb-3">
              <ShieldCheck className="w-4 h-4 text-income" />
              <span>DPDP Act (2023) Aligned</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-burgundy tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base font-serif italic text-espresso-muted">
              Effective Date: November 24, 2026 &bull; Version 1.2 &bull; Governing Law: Republic of India
            </p>
          </div>

          {/* Plain-English Executive Summary Callout */}
          <div className="mb-10 p-6 rounded-2xl bg-[#F5EDE0] border border-[#B7A89A] space-y-3">
            <h3 className="font-serif font-bold text-base text-burgundy flex items-center gap-2">
              <Lock className="w-4 h-4 text-burgundy" /> The SAMRIDD Sovereign Privacy Commitment
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1715] leading-relaxed font-sans font-medium">
              SAMRIDD is built on the fundamental belief that your personal financial records belong strictly to you. We act exclusively as a <strong>Data Fiduciary</strong> under the <em>Digital Personal Data Protection Act, 2023 (DPDP Act)</em>. We do <strong>not</strong> scrape your bank accounts, we do <strong>not</strong> read your SMS messages, and we will <strong>never sell, lease, or monetize</strong> your personal financial data to credit bureaus, advertisers, or loan providers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-serif font-bold text-burgundy">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Zero Bank Scraping
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Indian Data Residency
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-income" /> Instant Erasure Rights
              </span>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="space-y-10 text-sm sm:text-base text-[#1E1715] font-sans leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                1. Statutory Context &amp; Scope
              </h2>
              <p>
                This Privacy Policy (&ldquo;Policy&rdquo;) outlines how <strong>SAMRIDD Technologies</strong> (&ldquo;SAMRIDD&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, stores, and protects your information when you access or use the SAMRIDD personal finance platform, applications, and web services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="mt-2">
                This document is prepared and published in strict compliance with the <strong>Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;)</strong>, the <strong>Information Technology Act, 2000</strong>, and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>. By registering for or using SAMRIDD, you confirm that you are a citizen or resident of India (or accessing the service under Indian jurisdiction) and consent to the data practices described herein.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                2. Information We Collect
              </h2>
              <p>
                As a deterministic, manual-first platform, our data collection is deliberately minimal and transparent:
              </p>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">A. Account Credentials (Identity Data)</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    When registering, we collect your full name, verified email address, and a cryptographically salted &amp; hashed password. We use this strictly to authenticate your identity and protect your workspaces.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">B. Ledger &amp; Financial Records (User-Entered Data)</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    Financial entries that you choose to log manually: transaction amounts (in integer paise), dates, category tags, payment method labels (e.g., UPI, Netbanking, Card, Cash), notes, monthly budget limits, and life event (&ldquo;Moments&rdquo;) occasion budgets.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <h4 className="font-serif font-bold text-burgundy text-sm mb-1">C. Technical &amp; Operational Metadata</h4>
                  <p className="text-xs sm:text-sm text-espresso-muted">
                    IP address, device browser type, and authentication session timestamps solely for detecting suspicious account breaches, session timeouts, and maintaining system integrity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                3. What We Strictly DO NOT Collect
              </h2>
              <p>
                To maintain true financial sovereignty and eliminate security liabilities, SAMRIDD enforces architectural prohibitions against invasive data harvesting:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm font-medium">
                <li><strong className="text-burgundy">Zero Banking Credentials:</strong> We never ask for, collect, or store your netbanking passwords, debit/credit card numbers, CVVs, or UPI MPINs.</li>
                <li><strong className="text-burgundy">Zero SMS or Notification Scraping:</strong> We do not deploy mobile background services to read your personal bank SMS, transactional OTPs, or messaging apps.</li>
                <li><strong className="text-burgundy">Zero Biometric Harvesting:</strong> We do not store fingerprints or facial geometry.</li>
                <li><strong className="text-burgundy">Zero Advertising Trackers:</strong> We deploy zero third-party advertising SDKs, pixel trackers, or cross-site behavioral telemetry (no Meta Pixel, no Google Ads tracking).</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                4. Purpose &amp; Lawful Basis of Processing
              </h2>
              <p>
                Under Section 4 and Section 6 of the DPDP Act, 2023, SAMRIDD processes your data on the lawful basis of your <strong>explicit, informed, and unambiguous consent</strong>, solely for the following specified purposes:
              </p>
              <ol className="mt-3 space-y-2 list-decimal list-inside text-xs sm:text-sm font-medium">
                <li>Computing mathematical balances, income vs. expense summaries, and net savings ratios for your account.</li>
                <li>Executing threshold alerts when your spending nears your designated monthly budget ceilings.</li>
                <li>Orchestrating occasion budgets within the Moments feature (tracking cash payouts vs. unpaid commitments).</li>
                <li>Maintaining isolated multi-profile data boundaries (Personal vs. Family vs. Business).</li>
                <li>Providing account security notifications and password reset tokens.</li>
              </ol>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-burgundy" /> 5. Indian Data Residency &amp; Security Standards
              </h2>
              <p>
                In alignment with Indian sovereign data mandates, all primary database clusters, backups, and computational servers are physically located within certified cloud data centers within the <strong>territory of the Republic of India</strong> (Mumbai / Delhi NCR).
              </p>
              <p className="mt-2">
                We implement industry-leading technical safeguards:
              </p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside text-xs sm:text-sm">
                <li><strong>Encryption in Transit:</strong> Transport Layer Security (TLS 1.3) with mandatory HSTS.</li>
                <li><strong>Encryption at Rest:</strong> AES-256 bit hardware-level encryption across all database volumes.</li>
                <li><strong>Zero-Trust Admin Architecture:</strong> Internal administrators and engineering staff have zero access to individual transaction ledgers, itemized balances, or personal memos.</li>
                <li><strong>Composite Boundary Keys:</strong> Schema-level composite keys ensure complete multi-profile isolation.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-burgundy" /> 6. Your Rights as a Data Principal (DPDP Act, 2023)
              </h2>
              <p>
                The DPDP Act, 2023 confers fundamental rights upon you as a Data Principal. SAMRIDD provides direct, self-service tools inside your Settings to exercise each right:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <strong className="text-burgundy block font-serif text-sm mb-1">Right to Access Summary</strong>
                  Review all your personal and financial data directly in your account at any time.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <strong className="text-burgundy block font-serif text-sm mb-1">Right to Correction &amp; Updating</strong>
                  Freely edit, correct, or update any transaction, budget limit, or profile classification.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <strong className="text-burgundy block font-serif text-sm mb-1">Right to Complete Erasure</strong>
                  Initiate complete account deletion. All ledger rows and profile records are cryptographically wiped within 30 days.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5ED] border border-latte/40">
                  <strong className="text-burgundy block font-serif text-sm mb-1">Right to Data Portability</strong>
                  Export your entire financial ledger in standardized, open JSON / CSV formats with a single click.
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-burgundy mb-3 flex items-center gap-2">
                7. Data Retention &amp; Disposal
              </h2>
              <p>
                We retain your data only for as long as your account remains open and active. Should you choose to terminate your account via <em>Settings &rarr; Delete Account</em>, our automated pipeline marks all records for immediate deletion and permanently purges them from rolling production backups within <strong>30 calendar days</strong>, in compliance with Rule 5(4) of the IT Rules, 2011.
              </p>
            </section>

            {/* Section 8: Grievance Officer */}
            <section className="p-6 rounded-2xl bg-[#F5EDE0] border-2 border-burgundy/30">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-burgundy mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-burgundy" /> 8. Statutory Grievance Redressal &amp; DPO
              </h2>
              <p className="text-xs sm:text-sm text-[#1E1715] leading-relaxed">
                In compliance with Section 10 of the DPDP Act, 2023 and Rule 5(9) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, SAMRIDD has appointed a designated Grievance Officer and Data Protection Officer (DPO):
              </p>
              <div className="mt-4 p-4 rounded-xl bg-surface border border-latte/50 space-y-1 text-xs sm:text-sm font-sans">
                <p><strong>Designation:</strong> Data Protection &amp; Grievance Officer</p>
                <p><strong>Entity:</strong> SAMRIDD Technologies Private Limited</p>
                <p><strong>Email:</strong> <a href="mailto:grievance@samridd.in" className="text-burgundy underline font-bold">grievance@samridd.in</a> / <a href="mailto:privacy@samridd.in" className="text-burgundy underline font-bold">privacy@samridd.in</a></p>
                <p><strong>Address:</strong> DLF Cyber City, Sector 24, Gurugram, Haryana &ndash; 122002, India</p>
                <p className="text-xs text-espresso-muted pt-2 italic">
                  * All privacy grievances are formally acknowledged within 24 hours and conclusively resolved within 15 working days.
                </p>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t-2 border-latte/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-espresso-muted font-serif">
              &copy; {new Date().getFullYear()} SAMRIDD Technologies. All rights reserved.
            </span>
            <div className="flex items-center gap-6 text-xs font-serif font-bold text-burgundy">
              <Link to="/terms" className="hover:underline flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> View Terms of Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
