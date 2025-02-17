export default function ({ redirect, $auth }) {
  if ($auth.user && $auth.user.role === 'admin') {
    return true // User is verified, continue
  }
  // User is not verified, redirect to dashboard
  return redirect('/dashboard')
}
