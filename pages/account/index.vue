<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <!-- Back Button -->
        <div class="p-4 flex items-center space-x-3 mt-5 mb-3">
            <NuxtLink to="/dashboard" class="flex items-center text-orange-2 text-base font-medium hover:underline">
                &#x276E;
            </NuxtLink>
            <p class="font-bold text-xl">Manage Account</p>
        </div>

        <!-- Profile Card -->
        <div class="bg-gray-100 rounded-lg p-6 flex items-center justify-between">
            <div>
                <h2 class="text-base text-blue-2 font-bold">{{ $auth.user.name }}</h2>
                <p class="text-blue-2 text-opacity-50 text-sm font-normal">{{ maskedEmail }}</p>
                <p class="mt-2 font-medium text-xs bg-orange-1 bg-opacity-25 text-orange-2 px-3 py-1 rounded-full">
                    Lifetime Access Plan
                </p>
            </div>
            <div
                class="w-16 h-16 flex items-center text-center justify-center rounded-full bg-white text-gray-600 text-xs p-2">
                Add Photo
            </div>
        </div>

        <!-- Menu Items -->
        <div class="p-4 space-y-3">
            <div class="py-2 flex items-center space-x-3 mt-5 mb-3 border-b">
                <NuxtLink to="/account/account-details" class="flex items-center text-base font-normal hover:underline">
                    Account Details &#x276F;
                </NuxtLink>
            </div>
            <div class="py-2 flex items-center space-x-3 mt-5 mb-3 border-b">
                <NuxtLink to="/account/subscription-and-billing"
                    class="flex items-center text-base font-normal hover:underline">
                    Billing & Subscriptions &#x276F;
                </NuxtLink>
            </div>
            <div class="py-2 flex items-center space-x-3 mt-5 mb-3 border-b">
                <NuxtLink to="/account/feedback" class="flex items-center text-base font-normal hover:underline">
                    Request A Feature / Report A Bug &#x276F;
                </NuxtLink>
            </div>
        </div>

        <!-- Log out Button -->
        <div class="p-4 space-y-3">
            <button @click="logOut()" class="text-sm font-normal text-red-1 flex items-center space-x-2" type="button">
                <svg
      class="w-5 h-5 text-red-1"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9.75m0 0l3-3m-3 3l3 3"
      />
    </svg>
                <span>Log Out</span>
            </button>
        </div>



        <!-- delete account button -->
        <!-- <div class="p-3 relative flex space-x-3">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account/delete-account')">
                Delete Account
            </ButtonNext>
        </div> -->

    </div>
</template>

<script>
export default {
    layout: "profile",
    computed: {
        maskedEmail() {
            if (!this.$auth.user.email) return "";
            const email = this.$auth.user.email;
            const [name, domain] = email.split("@");
            return `${name.substring(0, 3)}***@${domain}`;
        }
    },
    methods: {
        async logOut() {
            await this.$auth.logout()
            this.$router.push('/auth/login')
        },
    },
};
</script>

<style></style>
