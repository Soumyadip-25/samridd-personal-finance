import { Outlet, NavLink, Link } from 'react-router-dom';
import { Shield, Users, FileText, Activity, ArrowLeft } from 'lucide-react';

export function AdminLayout() {
  const adminNav = [
    { name: 'Overview', path: '/admin', icon: Activity, end: true },
    { name: 'Users', path: '/admin/users', icon: Users, end: false },
    { name: 'Audit Logs', path: '/admin/audit', icon: FileText, end: false },
    { name: 'System', path: '/admin/system', icon: Shield, end: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* High-Visibility Admin Banner (§A.5 & §B.5) */}
      <div className="bg-amber-900 text-amber-100 text-xs py-2 px-4 flex items-center justify-between font-mono font-semibold tracking-wide">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-amber-400 shrink-0" />
          <span>ADMINISTRATION CONSOLE — Strict Zero-Access to Tenant Financial Records</span>
        </div>
        <Link to="/p/default/home" className="text-amber-300 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Return to App
        </Link>
      </div>

      <div className="flex-1 flex">
        {/* Admin Navigation Sidebar */}
        <aside className="w-60 border-r border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col justify-between">
          <nav className="space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
              Management
            </div>
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--primary)] text-white shadow-sm'
                        : 'text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--foreground)]'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="p-3 border border-[var(--border)] rounded-lg text-xs text-[var(--foreground-muted)]">
            MFA / AAL2 Authenticated Session
          </div>
        </aside>

        {/* Admin Viewport */}
        <main className="flex-1 p-6 sm:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
