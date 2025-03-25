<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <!-- Back Button -->
        <div class="p-4 flex items-center space-x-3 mt-5 mb-3">
            <NuxtLink to="/account" class="flex items-center text-blue-2 text-base font-medium hover:underline">
                &#x276E;
            </NuxtLink>
            <p class="font-bold text-xl text-blue-2">Subscription & Billing</p>
        </div>

        <div class="p-3 relative">
            <!-- Subscription Card -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                <div class="flex justify-between items-center">
                    <h3 class="text-base font-bold text-blue-2">Lifetime Access Plan</h3>
                    <span class="text-xs bg-purple-2 text-purple-1 font-medium px-2 py-1 rounded-lg">Active</span>
                </div>
                <p class="text-xs text-black font-medium mt-1 ">Activated 08 May 2024</p>
                <p class="text-xs text-blue-2 font-medium mt-2">
                    You're getting all premium features including unlimited updates, future releases, and priority
                    support.
                </p>
                <button class="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800">
                    Cancel Subscription
                </button>
            </div>
            <!-- Payment Method Card -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Payment Method</h3>
                <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-300">
                    <div class="flex items-center space-x-3">
                        <span class="text-gray-600 text-xl">💳</span>
                        <div>
                            <p class="text-sm text-gray-900">Visa ending in 4242</p>
                            <p class="text-xs text-gray-500">Expires 06/2026</p>
                        </div>
                    </div>
                    <span class="text-xs bg-purple-100 text-purple-600 font-medium px-2 py-1 rounded">Default</span>
                </div>
                <button class="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800">
                    Add Payment Method
                </button>
            </div>

            <!-- delete account button -->
            <div class="mt-20 p-3 relative flex space-x-3">
                <ButtonNext color="blue" :showIcon="false" @click="$router.push('/account/delete-account')">
                    Delete Account
                </ButtonNext>
            </div>
        </div>




    </div>
</template>

<script>
export default {
    layout: "profile",

    data() {
        return {
            loading: false,
            error: '',

        }
    },

    computed: {

    },

};
</script>

<style></style>
