import React from 'react';
import { formatINR } from '@/lib/money';
import { Plus, Copy } from 'lucide-react';

export default function BudgetPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Monthly Budgets</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Compare actual expenses with planned monthly limits &middot; November 2026
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium hover:bg-[var(--surface-raised)] flex items-center gap-1.5 transition-colors">
            <Copy className="w-4 h-4" />
            <span>Copy Prev Month</span>
          </button>
          <button className="px-3.5 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Set Category Budget</span>
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold">Overall Monthly Limit</span>
          <span className="text-sm font-bold">{formatINR(6845050)} of {formatINR(10000000)}</span>
        </div>
        <div className="w-full bg-[var(--muted)] rounded-full h-2.5 overflow-hidden">
          <div className="bg-[var(--primary)] h-2.5 rounded-full" style={{ width: '68.5%' }}></div>
        </div>
      </div>
    </div>
  );
}
