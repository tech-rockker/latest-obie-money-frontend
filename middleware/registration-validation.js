export default function ({ store, redirect }) {
    if (!store.getters['registration/isValid']) {
      return redirect('/auth/register/page-01')
    }
  }