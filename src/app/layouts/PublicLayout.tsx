import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { MochaWaveBackground } from '@/features/landing/components/MochaWaveBackground';

export function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-foreground relative selection:bg-burgundy/20 selection:text-burgundy bg-mocha-surface">
      {/* Background canvas covering the entire viewport seamlessly from top:0 behind all elements */}
      <MochaWaveBackground />

      {/* Top Navbar — Pure floating tabs over continuous canvas, ZERO white layer */}
      <header className="relative z-40 w-full bg-transparent border-0 outline-none shadow-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 relative flex items-center justify-between">
          {/* Subtle mobile brand icon on left */}
          <Link to="/" className="md:hidden flex items-center gap-2">
            <span className="font-cinzel font-black text-xl tracking-wider text-burgundy">SAMRIDD</span>
          </Link>

          {/* Centrally Aligned Navigation Tabs (Equally Distanced & Deep Burgundy #722F37) */}
          <nav className="hidden md:flex items-center justify-center gap-12 lg:gap-16 font-serif text-lg font-bold text-burgundy absolute left-1/2 -translate-x-1/2">
            <a
              href="#explore"
              className="text-burgundy hover:text-burgundy-hover hover:scale-105 transition-all tracking-wide"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              className="text-burgundy hover:text-burgundy-hover hover:scale-105 transition-all tracking-wide"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-burgundy hover:text-burgundy-hover hover:scale-105 transition-all tracking-wide"
            >
              About Us
            </a>
          </nav>

          {/* Right Action: Sign In pill button in Deep Burgundy (#722F37) with Mocha Cream (#E8DCC6) text (Zero Moon/Theme Toggle) */}
          <div className="flex items-center gap-4 ml-auto">
            <Link
              to="/login"
              className="px-8 py-2.5 rounded-full bg-burgundy text-[#E8DCC6] font-serif font-bold text-base hover:bg-burgundy-hover hover:text-[#FAF5EE] shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-burgundy"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — Mocha Cream background with Cosmic Latte borders */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-mocha-surface border-b-2 border-latte px-6 py-4 space-y-3 font-serif shadow-lg">
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-bold text-base"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-bold text-base"
            >
              How It Works
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-bold text-base"
            >
              About Us
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer — Cosmic Latte border & Deep Burgundy accents */}
      <footer className="border-t-2 border-latte/40 py-12 text-sm text-espresso-muted relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-cinzel font-bold text-burgundy text-base tracking-wider">SAMRIDD</span>
            <span className="text-xs font-serif">&mdash; Intentional, Indian Single-Ledger Personal Finance</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link to="/terms" className="hover:text-burgundy transition-colors font-medium">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-burgundy transition-colors font-medium">Privacy Policy</Link>
            <span className="flex items-center gap-1 text-income font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> DPDP Aligned
            </span>
          </div>
          <div className="text-xs text-latte-dark">
            &copy; {new Date().getFullYear()} SAMRIDD. Built for financial precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
