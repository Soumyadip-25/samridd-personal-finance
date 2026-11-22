import React from 'react';
import { Filter, Download, Plus } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Transactions Ledger</h1>
          <p className="text-sm font-medium text-latte-dark">
            Single unified ledger &middot; Keyset paginated &middot; Deterministic INR
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-latte bg-mocha text-burgundy text-sm font-bold hover:bg-mocha-surface flex items-center gap-1.5 transition-colors shadow-xs">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button className="px-4 py-2 rounded-xl bg-burgundy text-white text-sm font-bold hover:bg-burgundy-hover flex items-center gap-1.5 transition-opacity shadow-md">
            <Plus className="w-4 h-4" />
            <span>New Transaction</span>
          </button>
        </div>
      </div>

      <div className="p-4 rounded-2xl border border-latte bg-mocha-surface flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-burgundy" />
          <span className="text-xs font-bold text-burgundy">Filters:</span>
          <span className="text-xs bg-mocha border border-latte px-3 py-1 rounded-lg text-burgundy font-bold">All Types</span>
          <span className="text-xs bg-mocha border border-latte px-3 py-1 rounded-lg text-burgundy font-bold">All Categories</span>
        </div>
        <div className="text-xs text-latte-dark font-medium">
          Showing keyset cursor page 1 of 1
        </div>
      </div>

      <div className="rounded-2xl border border-latte bg-surface overflow-hidden shadow-xs">
        <div className="p-8 text-center text-sm text-espresso-muted">
          Ready for transaction records. Database composite FKs and RLS ensure complete profile isolation.
        </div>
      </div>
    </div>
  );
}
