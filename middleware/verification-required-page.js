// Middleware specific to the verification-required page

export default function ({ redirect, $auth }) {
  return $auth
    .fetchUser()
    .then(() => {
      if ($auth.user.is_verified) {
        return redirect('/dashboard')
      }
      return true
    })
    .catch(() => {
      return redirect('/login')
    })
}
