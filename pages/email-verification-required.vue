<template>
    <VOnboardingContainer image-src="/onboarding/page-03.png" character-src="/onboarding/characters/Characters-3.png">
        <VOnboardingHeading class="mb-4" title="Verification Required"
            content="For your security, please verify your email address to continue. We've sent a confirmation link to your email inbox." />

        <div class="flex flex-col space-y-4 mt-6">
            <ButtonNext color="blue" :loading="resending" :disabled="resending" @click="resendVerificationEmail">
                <template v-if="!resending">

                    Resend Verification Email
                </template>
                <span v-else>Sending...</span>
            </ButtonNext>

            <button class="text-indigo-600 hover:text-indigo-700 text-sm font-medium" @click="retryVerification"
                :disabled="checking">
                Already verified? Check again
            </button>
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
                // Fetch user details again
                await this.$auth.fetchUser(); // This will refresh the user data

                // After fetching, redirect to the dashboard if the user is verified
                if (this.$auth.user.is_verified) {
                    this.$router.push('/dashboard');
                } else {
                    // If not verified, keep them on the current page and show error in toast
                    this.$toast.error('Please verify your email address');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                // Handle any errors if the user data fetch fails
            }
        },
    }
}
</script>

<style></style>
