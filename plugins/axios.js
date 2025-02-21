export default function ({ $axios, redirect, $toast }) {
  $axios.onError((error) => {
    if (error.response.status === 401) {
      redirect('/auth/login')
    }
    console.log(error.response.data)
    if (error?.response?.data?.errors) {
      // Loop through each error object and create a toast for each message
      Object.values(error.response.data.errors).forEach((error) => {
        error.forEach((message) => {
          $toast.error(message)
        })
      })
    }
    if (error?.response?.data?.error) {
      $toast.error(error?.response?.data?.error)
    }
    if (error?.response?.data?.status) {
      $toast.error(error.response.data.status)
    }
    if (error?.response?.data?.data) {
      // for each property in the error response, add a flash message
      // eslint-disable-next-line
      for (const [key, value] of Object.entries(error.response.data.data)) {
        if (value.length > 0) {
          value.forEach((message) => {
            $toast.error(message)
          })
        }
      }
    }
  })
}
