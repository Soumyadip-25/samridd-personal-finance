import React from 'react';
import { Download } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Financial Reports</h1>
          <p className="text-sm text-[var(--foreground-muted)]">
            Deterministic server-aggregated period reports (Calendar or Indian FY)
          </p>
        </div>
        <button className="px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium hover:bg-[var(--surface-raised)] flex items-center gap-1.5 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Summary</span>
        </button>
      </div>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] text-center text-sm text-[var(--foreground-muted)]">
        Server-side report RPCs (<code className="text-xs bg-[var(--surface-raised)] px-2 py-0.5 rounded">report_series</code>, <code className="text-xs bg-[var(--surface-raised)] px-2 py-0.5 rounded">report_category_breakdown</code>) ready for wire-up.
      </div>
    </div>
  );
}
