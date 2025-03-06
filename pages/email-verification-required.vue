<template>
    <VOnboardingContainer image-src="/onboarding/page-03.png" character-src="/onboarding/characters/Characters-3.png">
      <div class="max-w-xl mx-auto py-8 px-4">
        <VOnboardingHeading class="mb-6" title="Verification Required" />
  
        <div class="space-y-6">
          <!-- Informational Text -->
          <p class="pb-6 text-gray-700 font-semibold text-base leading-relaxed">
            For your security, please verify your email address to continue. We've sent a confirmation link to your email. Please check your inbox.
          </p>
          <p class="text-gray-700 text-base leading-relaxed">
            If you didn't receive any email, click the button below to resend the verification email.
          </p>
  
          <!-- Resend Verification Button -->
          <ButtonNext 
            color="white-orange" 
            :loading="resending" 
            :disabled="resending" 
            @click="resendVerificationEmail"
          >
            <template v-if="!resending">
              Resend Verification Email
            </template>
            <span v-else>Sending...</span>
          </ButtonNext>
  
          <!-- Proceed Instruction -->
          <p class="text-gray-700 text-base leading-relaxed">
            Already verified? Click the button below to proceed further.
          </p>
  
          <!-- Proceed Button -->
          <ButtonNext
            @click="retryVerification" 
            :disabled="checking"
            color="blue"
          >
            Proceed
          </buttonNext>
        </div>
      </div>
    </VOnboardingContainer>
  </template>
  
  <script>

  export default {
    layout: 'onboarding',
    auth: true,
    data() {
      return {
        resending: false,
        checking: false
      }
    },
    methods: {
      async resendVerificationEmail() {
        if (!this.$auth.loggedIn) return
  
        try {
          this.resending = true
          await this.$axios.post('/api/email/verify/resend')
          this.$toast.success('Verification email sent successfully. Please check your inbox.')
        } catch (error) {
          const message = error.response?.status === 429
            ? 'Please wait before requesting another email'
            : 'Failed to send verification email. Please try again later.'
          this.$toast.error(message)
        } finally {
          this.resending = false
        }
      },
      async retryVerification() {
        try {
          // Refresh the user data
          await this.$auth.fetchUser();
          if (this.$auth.user.is_verified) {
            this.$router.push('/dashboard');
          } else {
            this.$toast.error('Please verify your email address');
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      },
    }
  }
  </script>
  
  <style scoped>
  /* Add any extra styling if necessary */
  </style>
  