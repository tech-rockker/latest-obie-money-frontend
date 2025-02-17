<template>
  <form @submit.prevent="resetPassword()">
    <VOnboardingHeading
      class="mb-4"
      title="Request a new password"
    ></VOnboardingHeading>

    <div class="onboarding-input-container">
      <label class="onboarding-label" for="name">Email</label>
      <input
        id="name"
        class="onboarding-input"
        type="email"
        required
        v-model="email"
      />
    </div>
    <VAlert
      v-if="isSuccessful"
      class="mb-6"
      title="Success!"
      description="A password reset email has been sent to your email address."
    >
      <NuxtLink class="underline" to="/dashboard"
        >Go back to dashboard</NuxtLink
      >
    </VAlert>
    <ButtonNext v-else :disabled="!email || loading" color="blue" type="submit"
      >Request a reset</ButtonNext
    >
  </form>
</template>

<script>
export default {
  layout: 'onboarding',
  data() {
    return {
      email: '',
      loading: false,
      isSuccessful: false,
    }
  },
  methods: {
    resetPassword() {
      this.loading = true
      this.$axios
        .post(`/api/password/email`, {
          email: this.email,
        })
        .then((response) => {
          this.isSuccessful = true
          this.$toast.success(response.data.status)
        })
        .catch((error) => {
          this.$toast.error(error.response.data.status)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style></style>
