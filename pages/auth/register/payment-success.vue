<template>
    <VOnboardingContainer>
        <!-- <VOnboardingHeading></VOnboardingHeading> -->
        <div class=" bg-gray-50 flex items-center justify-center px-4">
            <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <div class="text-center">
                    <!-- Success Icon -->
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>

                    <h1 class="mt-4 text-3xl font-extrabold text-gray-900">
                        Payment Successful! 🎉
                    </h1>

                    <div class="mt-6">
                        <p class="text-lg text-gray-600">
                            Thank you <span class="font-semibold text-indigo-600">{{ name }}</span>!
                        </p>
                        <p class="mt-4 text-gray-600">
                            You're now part of the Obie Money community.
                        </p> 
                        <p class="text-base font-normal text-center mt-6 text-600 text-[#100937]">
                            We've sent you a verification email. Please verify your email address before login.
                        </p>
                        <!-- <p class="mt-2 font-medium text-indigo-600 break-all">{{ email }}</p> -->
                    </div>

                    <div class="mt-2">
                        <!-- <div class="text-sm">
                            <p class="text-gray-600">
                                Didn't receive the email?
                                <button @click="resendVerification"
                                    class="font-medium text-indigo-600 hover:text-indigo-500" :disabled="resending">
                                    {{ resending ? 'Sending...' : 'Resend Verification' }}
                                </button>
                            </p>
                        </div> -->

                        <div class="mt-6">
                            <nuxt-link to="/auth/login"
                                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#100937]">
                                Proceed to Login
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </VOnboardingContainer>
</template>





<script>
export default {
    auth: false,
    layout: 'onboarding',
    data() {
        return {
            name: '',
            email: '',
            resending: false
        }
    },
    mounted() {
        // Extract query parameters
        this.name = this.$route.query.name || ''
        this.email = this.$route.query.email || ''
    },
    methods: {
        async resendVerification() {
            try {
                this.resending = true
                await this.$axios.post('/api/email/verification-notification', {
                    email: this.email
                })
                this.$toast.success('Verification email resent successfully!')
            } catch (error) {
                this.$toast.error(error.response?.data?.message || 'Error resending verification email')
            } finally {
                this.resending = false
            }
        }
    }
}
</script>

<style></style>
