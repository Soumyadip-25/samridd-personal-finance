import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Sun, Moon, ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function PublicLayout() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-foreground relative selection:bg-burgundy/20 selection:text-burgundy">
      {/* Top Navbar — Flowing and translucent over creamy mocha canvas */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xs transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          {/* Subtle mobile brand icon */}
          <Link to="/" className="md:hidden flex items-center gap-2">
            <span className="font-cinzel font-black text-xl tracking-wider text-burgundy">SAMRIDD</span>
          </Link>

          {/* Center-Right Navigation Links per reference image: Explore · How It Works · About Us */}
          <nav className="hidden md:flex items-center gap-10 font-serif text-base font-medium text-burgundy/90 ml-auto mr-8">
            <a
              href="#explore"
              className="hover:text-burgundy hover:underline underline-offset-8 transition-colors"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              className="hover:text-burgundy hover:underline underline-offset-8 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="hover:text-burgundy hover:underline underline-offset-8 transition-colors"
            >
              About Us
            </a>
          </nav>

          {/* Right Action: Sign In pill button + Theme toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-burgundy/70 hover:text-burgundy hover:bg-burgundy/10 transition-colors"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link
              to="/login"
              className="px-7 py-2.5 rounded-full bg-burgundy text-white font-serif font-medium text-sm sm:text-base hover:bg-burgundy-hover shadow-md hover:shadow-lg transition-all duration-200"
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

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-mocha-surface/95 border-b border-latte px-6 py-4 space-y-3 font-serif">
            <a
              href="#explore"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-medium"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-medium"
            >
              How It Works
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-burgundy font-medium"
            >
              About Us
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-latte/40 py-12 text-sm text-espresso-muted z-10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-cinzel font-bold text-burgundy text-base tracking-wider">SAMRIDD</span>
            <span className="text-xs">&mdash; Intentional, Indian Single-Ledger Personal Finance</span>
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
