import React from 'react';
import { Filter, Download, Plus } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Transactions Ledger</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Single unified ledger &middot; Keyset paginated &middot; Deterministic INR
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium hover:bg-[var(--surface-raised)] flex items-center gap-1.5 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button className="px-3.5 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 transition-opacity shadow-sm">
            <Plus className="w-4 h-4" />
            <span>New Transaction</span>
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[var(--foreground-muted)]" />
          <span className="text-xs font-semibold">Filters:</span>
          <span className="text-xs bg-[var(--surface-raised)] px-2.5 py-1 rounded-md text-[var(--foreground)]">All Types</span>
          <span className="text-xs bg-[var(--surface-raised)] px-2.5 py-1 rounded-md text-[var(--foreground)]">All Categories</span>
        </div>
        <div className="text-xs text-[var(--foreground-muted)]">
          Showing keyset cursor page 1 of 1
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-xs">
        <div className="p-8 text-center text-sm text-[var(--foreground-muted)]">
          Ready for transaction records. Database composite FKs and RLS ensure complete profile isolation.
        </div>
      </div>
    </div>
  );
}
