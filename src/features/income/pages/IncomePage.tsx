import React from 'react';
import { formatINR } from '@/lib/money';
import { Plus } from 'lucide-react';

export default function IncomePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Income Analytics</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Filtered view of the unified ledger &middot; Incomes only
          </p>
        </div>
        <button className="px-3.5 py-2 rounded-lg bg-[var(--income)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Record Income</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <span className="text-xs text-[var(--foreground-muted)] font-medium">Monthly Average</span>
          <div className="text-2xl font-bold text-[var(--income)] mt-1">{formatINR(14250000)}</div>
        </div>
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <span className="text-xs text-[var(--foreground-muted)] font-medium">Primary Source</span>
          <div className="text-2xl font-bold text-[var(--foreground)] mt-1">Salary (88%)</div>
        </div>
        <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <span className="text-xs text-[var(--foreground-muted)] font-medium">Active Inflow Streams</span>
          <div className="text-2xl font-bold text-[var(--foreground)] mt-1">3 Sources</div>
        </div>
      </div>
    </div>
  );
}
