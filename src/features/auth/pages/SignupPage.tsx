import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/p/default/home');
    }, 400);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-xs text-center text-[var(--foreground-muted)] mb-6">
        Private, manual personal finance with zero bank linking
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold mb-1" htmlFor="signup-email">Email Address</label>
          <input
            id="signup-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1" htmlFor="signup-password">Password (min 10 characters)</label>
          <input
            id="signup-password"
            type="password"
            required
            minLength={10}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id="terms-consent"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
          />
          <label htmlFor="terms-consent" className="text-xs text-[var(--foreground-muted)] leading-relaxed">
            I agree to the <Link to="/terms" className="text-[var(--primary)] underline">Terms of Service</Link> and acknowledge the <Link to="/privacy" className="text-[var(--primary)] underline">Privacy Policy</Link> (DPDP Act aligned).
          </label>
        </div>

        <button
          type="submit"
          disabled={loading || !consent}
          className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>{loading ? 'Creating...' : 'Get Started'}</span>
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[var(--border)] text-center text-xs text-[var(--foreground-muted)]">
        Already have an account?{' '}
        <Link to="/login" className="text-[var(--primary)] font-semibold hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
