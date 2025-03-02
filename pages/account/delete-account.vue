<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-2">
                <p class="text-left text-orange-2 text-base font-bold">Delete Account</p>
            </div>
        </div>

        <div class="p-3 relative">
            <p class="font-normal text-base text-[#100937]">Please confirm that you’d like to delete your account and data. Deleting your account
                will also cancel
                any subscriptions.</p>
        </div>

        <div class=" mt-40 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account')">Close</ButtonNext>
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleSubmit" :disabled="false">Delete</ButtonNext>
        </div>


    </div>
</template>

<script>
export default {
    layout: "profile",
    data() {
        return {
            loading: false,
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.$delete('/api/account')
                // await this.$auth.logout()
                this.$router.push('/login')
                // this.$toast.success('Account deleted successfully')
            } catch (error) {
                this.error = error.response?.data?.error || 'Error deleting account'
            } finally {
                this.loading = false
            }
        }
    },
};
</script>

<style></style>
