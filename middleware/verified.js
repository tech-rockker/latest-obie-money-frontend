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
    // Check if the user is verified
    if ($auth.user && $auth.user.is_verified) {
      return true // User is verified, continue
    }
    // User is not verified, redirect to verification page
    return redirect('/verification-required')
  }
}
