<template>
  <div>
    <VOnboardingContainer
      image-src="/onboarding/page-03.png"
      character-src="/onboarding/characters/Characters-3.png"
    >
      <VOnboardingHeading class="mb-4" title="Verify your email"></VOnboardingHeading>
      <template slot="button">
        <ButtonNext @click="verifyEmail()" :disabled="!userCanVerify || loading" color="blue"
          >Verify Email</ButtonNext
        >
      </template>
    </VOnboardingContainer>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'onboarding',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId 
    },
    token() {
      return this.$route.params.token
    },
    expires() {
      return this.$route.query.expires
    },
    signature() {
      return this.$route.query.signature
    },
    userCanVerify() {
      return this.$auth.loggedIn && this.token && this.userId && this.expires && this.signature
    },
    fullPath() {
      return this.$route.fullPath
    }
  },
  methods: {
    async verifyEmail() {
      try {
        this.loading = true
        await this.$axios.$post(this.fullPath)
        await this.$auth.fetchUser()
        this.$toast.success('Email verified')
        this.$router.push('/expenses/page-01')
      } catch (error) {
        this.$toast.error(error?.response?.data?.message)
      } finally {
        this.loading = false
      }
      
    }
  },
}
</script>

<style>

</style>