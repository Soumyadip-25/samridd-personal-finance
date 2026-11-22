import React from 'react';
import { Plus } from 'lucide-react';

export default function MomentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Moments</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Life event planning &middot; Planned commitments vs actual payments
          </p>
        </div>
        <button className="px-3.5 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 flex items-center gap-1.5 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Plan a Moment</span>
        </button>
      </div>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] text-center text-sm text-[var(--foreground-muted)]">
        No active moments yet. Moments isolate planned costs from ledger expenses until an atomic payment is recorded.
      </div>
    </div>
  );
}
