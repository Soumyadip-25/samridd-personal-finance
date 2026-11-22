import { useState } from 'react';
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
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Desktop Sidebar (Rich Mocha & Cosmic Latte Styling) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-latte bg-mocha-surface shadow-xs">
        {/* Brand & Profile Selector */}
        <div className="p-4 border-b border-latte">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo.png" alt="SAMRIDD" className="h-9 w-auto object-contain rounded-lg shadow-xs" />
            <div>
              <span className="font-extrabold text-xl tracking-tight text-burgundy">SAMRIDD</span>
              <span className="block text-[10px] text-latte-dark font-medium -mt-1 tracking-wider uppercase">Personal Finance</span>
            </div>
          </div>

          {/* Profile Switcher Card */}
          <div className="bg-mocha border border-latte rounded-xl p-2.5 flex items-center justify-between cursor-pointer hover:border-burgundy transition-all shadow-xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-burgundy text-white flex items-center justify-center text-xs font-bold shadow-xs">
                P
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-burgundy truncate leading-none">Primary Profile</div>
                <div className="text-[10px] text-latte-dark leading-tight mt-0.5">Isolated Workspace</div>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-latte-dark" />
          </div>
        </div>

        {/* 8 Primary Navigation Tabs */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-burgundy text-white shadow-md ring-1 ring-burgundy-hover'
                      : 'text-espresso hover:bg-mocha hover:text-burgundy'
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
        <div className="p-4 border-t border-latte bg-mocha/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-latte-dark">Theme Mode</span>
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-lg border border-latte bg-surface text-burgundy hover:bg-mocha transition-colors"
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
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-burgundy hover:bg-burgundy/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-latte bg-mocha-surface">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SAMRIDD" className="h-8 w-auto object-contain rounded-md shadow-xs" />
            <span className="font-extrabold text-lg text-burgundy">SAMRIDD</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-burgundy hover:bg-mocha"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-latte bg-mocha-surface p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                      isActive
                        ? 'bg-burgundy text-white shadow-sm'
                        : 'text-espresso hover:bg-mocha'
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
        <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-latte bg-mocha-surface/95 backdrop-blur-md z-40 flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 text-[10px] font-bold p-1 ${
                    isActive ? 'text-burgundy' : 'text-latte-dark'
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
            className="flex flex-col items-center gap-1 text-[10px] font-bold p-1 text-latte-dark"
          >
            <Menu className="w-5 h-5" />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
