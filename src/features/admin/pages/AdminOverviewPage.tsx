import React from 'react';
import { Users, Activity, ShieldCheck } from 'lucide-react';

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">System & Account Metrics</h1>
        <p className="text-xs text-[var(--foreground-muted)]">
          Aggregated system performance &middot; Privacy Guaranteed: zero access to financial records
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-1">
            <span>Total Registered Accounts</span>
            <Users className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold">1,248</div>
        </div>

        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-1">
            <span>Active Financial Profiles</span>
            <Activity className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold">2,110</div>
        </div>

        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)] mb-1">
            <span>System Health</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-emerald-600">Operational</div>
        </div>
      </div>
    </div>
  );
}
