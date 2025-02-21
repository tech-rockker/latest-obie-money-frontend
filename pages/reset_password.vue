<template>
  <VOnboardingContainer
    image-src="/onboarding/page-03.png"
    character-src="/onboarding/characters/Characters-3.png"
  >
    <form @submit.prevent="resetPassword()">
      <VOnboardingHeading
        class="mb-4"
        title="Reset Password"
      ></VOnboardingHeading>

      <div class="onboarding-input-container">
        <label class="onboarding-label" for="name">Email</label>
        <input
          id="email"
          class="onboarding-input"
          type="email"
          required
          v-model="email"
        />
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="name">New Password</label>
        <InputPassword name="password" v-model="password"></InputPassword>
        <p class="onboarding-input-description">
          Your password must contain at least 6 characters, a capital letter, a
          special character and a number.
        </p>
      </div>
      <div class="onboarding-input-container">
        <label class="onboarding-label" for="name">Confirm Password</label>
        <InputPassword
          name="password_confirmation"
          v-model="password_confirmation"
        ></InputPassword>
      </div>
      <VAlert
        v-if="isSuccessful"
        class="mb-6"
        title="Success!"
        description="Your password has been reset."
      >
      </VAlert>
      <ButtonNext
        v-else
        :disabled="
          !email || !password || password !== password_confirmation || loading
        "
        color="blue"
        type="submit"
        >Request a reset</ButtonNext
      >
    </form>
  </VOnboardingContainer>
</template>

<script>
export default {
  layout: 'onboarding',
  auth: false,
  data() {
    return {
      token: this.$route.query.token,
      email: '',
      password: '',
      password_confirmation: '',
      loading: false,
      isSuccessful: false,
    }
  },
  methods: {
    resetPassword() {
      this.loading = true
      this.$axios
        .post(`/api/password/reset`, {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.token,
        })
        .then((response) => {
          this.$router.push('/auth/login')
          this.isSuccessful = true
          this.$toast.success(response.data.status)
        })
        .catch((error) => {
          if (error?.response?.data?.errors) {
            // Loop through each error object and create a toast for each message
            Object.values(error.response.data.errors).forEach((error) => {
              error.forEach((message) => {
                this.$toast.error(message)
              })
            })
          }
          if (error.response.data.status) {
            this.$toast.error(error.response.data.status)
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
