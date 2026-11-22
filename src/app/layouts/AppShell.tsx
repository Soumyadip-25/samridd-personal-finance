import React, { useState } from 'react';
import { Outlet, NavLink, useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import {
  LayoutDashboard,
  TrendingUp,
  PieChart,
  Receipt,
  Tag,
  BarChart3,
  Sparkles,
  Settings,
  Sun,
  Moon,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

export function AppShell() {
  const { profileId = 'default' } = useParams<{ profileId: string }>();
  const { resolvedTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The 8 Canonical Tabs (§0.4 & §A.2)
  const navItems = [
    { name: 'Home', path: `/p/${profileId}/home`, icon: LayoutDashboard },
    { name: 'Income', path: `/p/${profileId}/income`, icon: TrendingUp },
    { name: 'Budget', path: `/p/${profileId}/budget`, icon: PieChart },
    { name: 'Transactions', path: `/p/${profileId}/transactions`, icon: Receipt },
    { name: 'Categories', path: `/p/${profileId}/categories`, icon: Tag },
    { name: 'Reports', path: `/p/${profileId}/reports`, icon: BarChart3 },
    { name: 'Moments', path: `/p/${profileId}/moments`, icon: Sparkles },
    { name: 'Settings', path: `/settings/profiles`, icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[var(--border)] bg-[var(--surface)]">
        {/* Brand & Profile Selector */}
        <div className="p-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              S
            </div>
            <span className="font-bold text-lg text-[var(--primary)]">SAMRIDD</span>
          </div>

          {/* Profile Switcher Shell */}
          <div className="bg-[var(--surface-raised)] border border-[var(--border)] rounded-xl p-2.5 flex items-center justify-between cursor-pointer hover:border-[var(--primary)] transition-colors">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-md bg-[var(--primary)]/15 text-[var(--primary)] flex items-center justify-center text-xs font-semibold">
                P
              </div>
              <div className="truncate">
                <div className="text-xs font-semibold truncate leading-none">Primary Profile</div>
                <div className="text-[10px] text-[var(--foreground-muted)] leading-tight mt-0.5">Personal Workspace</div>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[var(--foreground-muted)]" />
          </div>
        </div>

        {/* 8 Primary Navigation Tabs */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--primary)] text-white shadow-sm'
                      : 'text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--foreground)]'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom User Area */}
        <div className="p-4 border-t border-[var(--border)] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[var(--foreground-muted)]">Theme</span>
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-md text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={() => {
              navigate('/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--danger)] hover:bg-[var(--danger)]/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xs">
              S
            </div>
            <span className="font-bold text-base text-[var(--primary)]">SAMRIDD</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)]'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        )}

        {/* Main Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-20 md:pb-8">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation Bar (5 Primary Actions) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md z-40 flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 text-[10px] font-medium p-1 ${
                    isActive ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center gap-1 text-[10px] font-medium p-1 text-[var(--foreground-muted)]"
          >
            <Menu className="w-5 h-5" />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
