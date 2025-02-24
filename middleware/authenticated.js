export default function ({ $auth, redirect }) {
    // If user is authenticated, redirect to dashboard
    if ($auth.loggedIn) {
      return redirect('/dashboard')
    }
  }