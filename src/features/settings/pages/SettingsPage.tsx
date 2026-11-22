import React from 'react';
import { Shield, User, Database, Sliders } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Settings & Preferences</h1>
        <p className="text-sm text-[var(--foreground-muted)]">
          Manage financial profiles, preferences, and DPDP-aligned data rights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm">
            <User className="w-4 h-4 text-[var(--primary)]" />
            <span>Profile Management</span>
          </div>
          <p className="text-xs text-[var(--foreground-muted)]">
            Create, rename, or archive independent financial workspaces.
          </p>
        </div>

        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm">
            <Sliders className="w-4 h-4 text-[var(--primary)]" />
            <span>Regional Preferences</span>
          </div>
          <p className="text-xs text-[var(--foreground-muted)]">
            Financial Year starting month (Default: April) and first day of week.
          </p>
        </div>

        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm">
            <Shield className="w-4 h-4 text-[var(--primary)]" />
            <span>Security & Sessions</span>
          </div>
          <p className="text-xs text-[var(--foreground-muted)]">
            Manage two-factor authentication (TOTP) and active session tokens.
          </p>
        </div>

        <div className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm">
            <Database className="w-4 h-4 text-[var(--primary)]" />
            <span>Data Rights (DPDP)</span>
          </div>
          <p className="text-xs text-[var(--foreground-muted)]">
            Export all personal financial records (JSON/CSV) or request account deletion.
          </p>
        </div>
      </div>
    </div>
  );
}
