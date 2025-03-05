const defaultRegistration = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    dob: '',
  }
  
  export const state = () => ({
    registration: { ...defaultRegistration },
    loading: false,
    submittedToZapier: false,
  })
  
  export const getters = {
    isPasswordValid(state) {
      const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/
      return regex.test(state.registration.password)
    },
    isAgeValid(state) {
      if (!state.registration.dob) return false
      const birthDate = new Date(state.registration.dob)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--
      return age >= 18
    },
    isValid(state, getters) {
      return (
        state.registration.password === state.registration.password_confirmation &&
        !!state.registration.name.trim() &&
        !!state.registration.email.trim() &&
        !!state.registration.dob &&
        getters.isPasswordValid &&
        getters.isAgeValid
      )
    }
  }
  
  export const mutations = {
    SET_REGISTRATION_VALUE(state, { key, value }) {
      state.registration[key] = value
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    RESET_REGISTRATION(state) {
      state.registration = { ...defaultRegistration }
    },
    SET_ZAPIER_SUBMISSION(state, value) {
      state.submittedToZapier = value
    },
  }
  
  export const actions = {
    setRegistrationValue({ commit }, payload) {
      commit('SET_REGISTRATION_VALUE', payload)
    },
  
    async checkEmail({ commit, state }) {
      commit('SET_LOADING', true)
      try {
        await this.$axios.post('/api/check-email', {
          email: state.registration.email,
        })
      } finally {
        commit('SET_LOADING', false)
      }
    },
  
    async createCheckoutSession({ commit, state }) {
      commit('SET_LOADING', true)
      try {
        return await this.$axios.post('/api/create-checkout-session', {
          name: state.registration.name,
          email: state.registration.email,
          dob: state.registration.dob,
          password: state.registration.password,
          password_confirmation: state.registration.password_confirmation,
        })
      } finally {
        commit('SET_LOADING', false)
      }
    },
  
    submitToZapier({ commit, state }) {
      if (!state.submittedToZapier) {
        return this.$axios
          .post(`/hooks/catch/7470443/b0a024q/`, {
            name: state.registration.name,
            email: state.registration.email,
            dob: state.registration.dob,
          })
          .then(() => {
            commit('SET_ZAPIER_SUBMISSION', true)
          })
      }
    },
  }
  
  
  