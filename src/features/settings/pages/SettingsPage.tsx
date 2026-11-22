import React from 'react';
import { Shield, User, Database, Sliders } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-burgundy">Settings & Preferences</h1>
        <p className="text-sm font-medium text-latte-dark">
          Manage financial profiles, preferences, and DPDP-aligned data rights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-latte rounded-2xl bg-mocha-surface shadow-xs">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm text-burgundy">
            <User className="w-4 h-4" />
            <span>Profile Management</span>
          </div>
          <p className="text-xs text-espresso-muted leading-relaxed">
            Create, rename, or archive independent financial workspaces.
          </p>
        </div>

        <div className="p-5 border border-latte rounded-2xl bg-mocha-surface shadow-xs">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm text-burgundy">
            <Sliders className="w-4 h-4" />
            <span>Regional Preferences</span>
          </div>
          <p className="text-xs text-espresso-muted leading-relaxed">
            Financial Year starting month (Default: April) and first day of week.
          </p>
        </div>

        <div className="p-5 border border-latte rounded-2xl bg-mocha-surface shadow-xs">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm text-burgundy">
            <Shield className="w-4 h-4" />
            <span>Security & Sessions</span>
          </div>
          <p className="text-xs text-espresso-muted leading-relaxed">
            Manage two-factor authentication (TOTP) and active session tokens.
          </p>
        </div>

        <div className="p-5 border border-latte rounded-2xl bg-mocha-surface shadow-xs">
          <div className="flex items-center gap-3 mb-2 font-bold text-sm text-burgundy">
            <Database className="w-4 h-4" />
            <span>Data Rights (DPDP)</span>
          </div>
          <p className="text-xs text-espresso-muted leading-relaxed">
            Export all personal financial records (JSON/CSV) or request account deletion.
          </p>
        </div>
      </div>
    </div>
  );
}
