const routeIgnoresAuth = (route) => {
  return route.matched.some((m) => {
    return Object.values(m.components).some(
      (component) => component.options && component.options.auth === false
    )
  })
}

export default function ({ route, redirect, $auth, $toast }) {
  if (routeIgnoresAuth(route)) {
    // If the page has the auth:false option, then its ok to access without being verified
    return true
  } else {
    if ($auth.user) {
      if ($auth.user.role === 'admin') {
        return true
      }

      const normalizedPath = route.path.replace(/\/$/, '');
      // User email is verified, continue
      if ($auth.user.is_email_verified === false) {
        if (normalizedPath === '/email-verification-required') {
          return true
        } else {
          return redirect('/email-verification-required')
        }
      }

      // check if user has completed onboarding questions
      if ($auth.user.profile.goal === null) {
        if (
          normalizedPath === '/onboarding/welcome' ||
          normalizedPath === '/onboarding/page-01' ||
          normalizedPath === '/onboarding/page-02' ||
          normalizedPath === '/onboarding/page-03' ||
          normalizedPath === '/onboarding/page-04' ||
          normalizedPath === '/onboarding/page-05'
        ) {
          console.log('redirecting to onboarding')
          return true
        } else {
          return redirect('/onboarding/welcome')
        }
      }

      // check if user has completed income questions
      if ($auth.user.profile.income_frequency === null) {
        if (
          normalizedPath === '/onboarding/page-06' ||
          normalizedPath === '/onboarding/page-07' ||
          normalizedPath === '/onboarding/page-08'
        ) {
          console.log('redirecting to income questions')
          return true
        } else {
          return redirect('/onboarding/page-06')
        }
      }

      // if all conditions false, then continue
      return true
    }
    // User is not verified, redirect to verification page
    return redirect('/auth/login')
  }
}
