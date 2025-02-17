<template>
  <VOnboardingContainer
    image-src="/onboarding/page-03.png"
    character-src="/onboarding/characters/Characters-3.png"
  >
    <VOnboardingHeading
      class="mb-4"
      title="Verification Required"
      content="In order to continue, your account must be verified by an admin."
    ></VOnboardingHeading>
    <template slot="button">
      <ButtonNext :disabled="fetchingUser" color="blue" @click="retry()"
        >RETRY</ButtonNext
      >
    </template>
  </VOnboardingContainer>
</template>

<script>
export default {
  layout: 'onboarding',
  auth: false,
  middleware: ['verification-required-page'],
  data() {
    return {
      fetchingUser: false,
    }
  },
  created() {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    retry() {
      this.fetchingUser = true
      this.$auth
        .fetchUser()
        .then((response) => {
          const isVerified = response.data.data.is_verified
          if (isVerified) {
            this.$toast.success('Your account has been verified')
            this.$router.push('/dashboard')
          } else {
            this.$toast.error(
              'It looks like this account is still not verified'
            )
          }
        })
        .catch((e) => {
          this.$toast.error('You must be logged in to continue')
          this.$auth.logout()
        })
        .finally(() => {
          this.fetchingUser = false
        })
    },
  },
}
</script>

<style></style>
