/**
 * SAMRIDD Error Translation Utility (lib/errors.ts)
 * Translates PostgreSQL and Supabase Auth error codes into friendly user messages.
 * Never exposes raw SQL errors, stack traces, or internal database schemas to users.
 */

export interface AppError {
  code?: string;
  message: string;
  field?: string;
}

export function translateError(error: unknown): string {
  if (!error) return 'An unexpected error occurred. Please try again.';

  if (typeof error === 'string') return error;

  const err = error as { code?: string; message?: string; details?: string };

  // PostgreSQL Error Codes
  switch (err.code) {
    case '23505': // unique_violation
      if (err.message?.includes('category') || err.message?.includes('name')) {
        return 'A category with this name already exists in this profile.';
      }
      if (err.message?.includes('profile') || err.message?.includes('financial_profiles')) {
        return 'A financial profile with this name already exists.';
      }
      return 'A record with these details already exists.';

    case '23503': // foreign_key_violation
      return 'Referenced record could not be found or belongs to another profile.';

    case '23514': // check_violation
      if (err.message?.includes('amount')) {
        return 'Amount must be greater than zero.';
      }
      return 'The submitted data violated validation rules.';

    case '42501': // insufficient_privilege
      return 'You do not have permission to perform this action.';

    // Supabase Auth Error Messages
    case 'invalid_credentials':
      return 'Invalid email or password.';

    case 'user_already_exists':
      return 'An account with this email already exists.';

    case 'email_not_confirmed':
      return 'Please verify your email address before signing in.';

    case 'over_email_send_rate_limit':
      return 'Too many email requests. Please wait a few minutes before trying again.';

    default:
      if (err.message) {
        // Sanitize generic messages
        if (err.message.includes('JWT') || err.message.includes('token')) {
          return 'Your session has expired. Please log in again.';
        }
        return err.message;
      }
      return 'An error occurred while processing your request. Please try again.';
  }
}
