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
      // User email is verified, continue
      if ($auth.user.is_email_verified === false) {
        if (route.path === '/email-verification-required') {
          return true
        } else {
          return redirect('/email-verification-required')
        }
      }

      // check if user has completed onboarding questions
      if ($auth.user.profile.goal === null) {
        if (
          route.path === '/onboarding/welcome' ||
          route.path === '/onboarding/page-01' ||
          route.path === '/onboarding/page-02' ||
          route.path === '/onboarding/page-03' ||
          route.path === '/onboarding/page-04' ||
          route.path === '/onboarding/page-05'
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
          route.path === '/onboarding/page-06' ||
          route.path === '/onboarding/page-07' ||
          route.path === '/onboarding/page-08' 
        ) {
            console.log('redirecting to income questions');
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
