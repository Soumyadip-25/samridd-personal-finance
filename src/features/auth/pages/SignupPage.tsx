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
      <h2 className="text-2xl font-black text-center mb-2 text-burgundy">Create Account</h2>
      <p className="text-xs text-center text-espresso-muted mb-6 font-medium">
        Private, manual personal finance with zero bank linking
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-xs font-bold mb-1.5 text-espresso" htmlFor="signup-email">Email Address</label>
          <input
            id="signup-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-latte bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5 text-espresso" htmlFor="signup-password">Password (min 10 characters)</label>
          <input
            id="signup-password"
            type="password"
            required
            minLength={10}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-latte bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
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
            className="mt-1 rounded border-latte text-burgundy focus:ring-burgundy"
          />
          <label htmlFor="terms-consent" className="text-xs text-espresso-muted leading-relaxed font-medium">
            I agree to the <Link to="/terms" className="text-burgundy font-bold underline">Terms of Service</Link> and acknowledge the <Link to="/privacy" className="text-burgundy font-bold underline">Privacy Policy</Link> (DPDP Act aligned).
          </label>
        </div>

        <button
          type="submit"
          disabled={loading || !consent}
          className="w-full py-3 rounded-xl bg-burgundy text-white font-bold text-sm hover:bg-burgundy-hover disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 ring-1 ring-burgundy-hover"
        >
          <UserPlus className="w-4 h-4" />
          <span>{loading ? 'Creating...' : 'Get Started'}</span>
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-latte text-center text-xs text-espresso-muted font-medium">
        Already have an account?{' '}
        <Link to="/login" className="text-burgundy font-bold hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
