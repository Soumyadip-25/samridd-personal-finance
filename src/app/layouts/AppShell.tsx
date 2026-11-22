import { useState } from 'react';
import { Outlet, NavLink, useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { SamriddLogoCream } from '@/features/landing/components/SamriddLogoCream';
import {
  Home,
  BarChart3,
  PieChart,
  ArrowLeftRight,
  LayoutGrid,
  FileText,
  Wand2,
  Settings,
  User,
  ChevronDown,
  Sun,
  Moon,
  LogOut,
  Menu,
  X,
  Plus,
} from 'lucide-react';

export function AppShell() {
  const { profileId = 'default' } = useParams<{ profileId: string }>();
  const { resolvedTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // The 8 Canonical Sidebar Navigation Tabs matching user reference
  const navItems = [
    { name: 'Home', path: `/p/${profileId}/home`, icon: Home },
    { name: 'Income', path: `/p/${profileId}/income`, icon: BarChart3 },
    { name: 'Budget', path: `/p/${profileId}/budget`, icon: PieChart },
    { name: 'Transactions', path: `/p/${profileId}/transactions`, icon: ArrowLeftRight },
    { name: 'Categories', path: `/p/${profileId}/categories`, icon: LayoutGrid },
    { name: 'Reports', path: `/p/${profileId}/reports`, icon: FileText },
    { name: 'Moments', path: `/p/${profileId}/moments`, icon: Wand2 },
    { name: 'Settings', path: `/settings/profiles`, icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#FAF5EE] text-[#100C0B]">
      {/* Desktop Sidebar — Deep Burgundy Background with Cream Logo & Icons */}
      <aside className="hidden md:flex flex-col w-64 bg-[#541922] text-[#E8DCC6] min-h-screen border-r border-[#3E0F16] shadow-xl select-none shrink-0 justify-between">
        <div>
          {/* Top Header: Cream Lotus Logo & SAMRIDD Title */}
          <div className="pt-8 pb-2">
            <SamriddLogoCream size="md" />
          </div>

          {/* Delicate Cream Divider Line below Logo */}
          <div className="w-4/5 mx-auto h-[1px] bg-[#E8DCC6]/20 my-5" />

          {/* Primary Navigation Tabs */}
          <nav className="px-3.5 space-y-1.5 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-white/15 text-white font-semibold shadow-xs'
                        : 'text-[#E8DCC6] hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Divider & Profiles Switcher */}
        <div className="px-3.5 pb-6">
          {/* Delicate Cream Divider Line above Profiles */}
          <div className="w-4/5 mx-auto h-[1px] bg-[#E8DCC6]/20 mb-4" />

          <div className="relative">
            {/* Profiles Dropdown Popup Menu */}
            {profileDropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-3 bg-[#42121A] border border-[#E8DCC6]/25 rounded-2xl p-3 shadow-2xl space-y-2 z-50 text-xs font-sans">
                <div className="px-2 py-1 text-[10px] font-cinzel font-bold text-[#E8DCC6]/70 uppercase tracking-wider">
                  Switch Workspace
                </div>

                <button
                  onClick={() => {
                    navigate(`/p/default/home`);
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white/10 text-white font-semibold flex items-center justify-between"
                >
                  <span>Personal Finance</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-income" />
                </button>

                <button
                  onClick={() => {
                    navigate(`/p/freelance/home`);
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#E8DCC6] hover:bg-white/5 transition-colors"
                >
                  Freelance Studio
                </button>

                <button
                  onClick={() => {
                    navigate(`/p/family/home`);
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#E8DCC6] hover:bg-white/5 transition-colors"
                >
                  Family Household
                </button>

                <div className="border-t border-[#E8DCC6]/15 pt-2 space-y-1">
                  <button
                    onClick={() => {
                      navigate(`/settings/profiles`);
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#E8DCC6] hover:bg-white/5 font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Profile</span>
                  </button>

                  <button
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-[#E8DCC6] hover:bg-white/5 font-medium transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {resolvedTheme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                      <span>Toggle Theme</span>
                    </span>
                    <span className="text-[10px] opacity-70 uppercase">{resolvedTheme}</span>
                  </button>

                  <button
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-rose-300 hover:bg-white/5 font-medium transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}

            {/* Profiles Main Trigger Button */}
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
              aria-label="Profile menu"
            >
              <div className="flex items-center gap-3">
                {/* Cream Circular User Avatar matching Image 1 */}
                <div className="w-9 h-9 rounded-full bg-[#E8DCC6] flex items-center justify-center text-[#541922] shadow-xs">
                  <User className="w-5 h-5 fill-current" />
                </div>
                <span className="font-medium text-[15px] text-[#E8DCC6] group-hover:text-white transition-colors">
                  Profiles
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#E8DCC6]/80 transition-transform duration-200 ${
                  profileDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Header (Burgundy & Cream) */}
        <header className="md:hidden flex items-center justify-between p-4 bg-[#541922] text-[#E8DCC6] border-b border-[#3E0F16]">
          <div className="flex items-center gap-2.5">
            <SamriddLogoCream size="sm" />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#E8DCC6] hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#541922] border-b border-[#E8DCC6]/20 p-4 space-y-1.5 shadow-xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${
                      isActive
                        ? 'bg-white/15 text-white font-semibold'
                        : 'text-[#E8DCC6] hover:bg-white/10'
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
        <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-[#E8DCC6]/20 bg-[#541922]/98 backdrop-blur-md z-40 flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 text-[10px] font-bold p-1 ${
                    isActive ? 'text-white' : 'text-[#E8DCC6]/70'
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
            className="flex flex-col items-center gap-1 text-[10px] font-bold p-1 text-[#E8DCC6]/70"
          >
            <Menu className="w-5 h-5" />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
