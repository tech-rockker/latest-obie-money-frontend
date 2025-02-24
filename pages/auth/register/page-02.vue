<template>
    <div class="onboarding-page flex flex-col items-center justify-start pl-5 pr-5">
        <!-- Centered Image at the Top -->
        <div class="flex items-center justify-center mt-8">
            <img src="/icons/onboarding/early_access.svg" alt="Early Access" class="w-80 h-20 " />
        </div>
        <div class="mt-5">
            <div class="flex flex-col items-center justify-center border rounded-2xl px-4 py-6 bg-white shadow-md mt-4">
                <!-- Title -->
                <h2 class="text-2xl font-small text-gray-800 mb-2">
                    Early Lifetime Access
                </h2>
                <!-- Subtitle -->
                <p class="text-3xl font-normal text-gray-900 ">
                    A$49.99
                </p>
                <p class="text-lg font-normal text-gray-900 mb-5">
                    One time payment
                </p>
                <!-- Description -->
                <p class="text-lg font-normal text-gray-800 text-center mb-6">
                    Beta version. Includes budget and expense tracker, debt-free calculator, insurance dashboard, and
                    wealth check.
                </p>
                <!-- Divider -->
                <div class="w-64 border-t-2 border-gray-200 mb-4"></div>
                <!-- Feature List -->
                <p class="text-lg text-gray-800 text-center mb-6">
                    ✓ Submit Feature Requests <br />
                    ✓ Community Access <br />
                    ✓ Support
                </p>
                <!-- Button -->
                <button @click="handlePayment"
                    class="bg-gray-900 text-white font-bold text-sm py-3 px-6 rounded-lg w-full hover:bg-gray-800">
                    Proceed To Pay
                </button>
                <div class="mb-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    auth: false,
    middleware: ['authenticated'], // Redirect to dashboard if user is already logged in

    layout: 'onboarding',

    computed: {
        ...mapState('registration', ['registration', 'loading'])
    },

    methods: {
        ...mapActions('registration', ['createCheckoutSession', 'submitToZapier']),

        async handlePayment() {
            try {
                const response = await this.createCheckoutSession()

                if (response?.data?.message?.url) {
                    // await this.submitToZapier()
                    window.location.href = response.data.message.url
                }
            } catch (error) {
                console.error('Payment error:', error)
            }
        }
    }
}

</script>
<style></style>