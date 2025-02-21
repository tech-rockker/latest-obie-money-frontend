<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
            <!-- Warning Icon -->
            <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-yellow-100 mb-6">
                <svg class="h-12 w-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>

            <h1 class="text-3xl font-bold text-gray-900 mb-4">
                Payment Canceled
            </h1>

            <p class="text-gray-600 mb-6">
                Your payment process was interrupted. Don't worry - your account hasn't been charged.
            </p>

            <div class="space-y-4">
                <button @click="retryPayment"
                    class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Restart Registration Process
                </button>
            </div>

            <p class="mt-8 text-sm text-gray-600">
                Need help? <nuxt-link to="/contact" class="text-indigo-600 hover:underline">Contact support</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    layout: 'onboarding',
    methods: {
        retryPayment() {
            // Replace with your actual registration page path
            this.$router.push('/auth/register/page-01');
        }
    }
}
</script>

<style scoped>
/* Add any custom animations if needed */
</style>