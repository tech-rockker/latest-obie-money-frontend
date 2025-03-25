<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-2">
                <p class="text-center text-blue-2 text-lg font-bold">Are you Sure?</p>
            </div>
        </div>

        <div class="p-3 relative">
            <p class="text-center font-normal text-base text-blue-2">If you delete your account you’ll lose access to Obiemoney as well as your Lifetime Access benefits.</p>
        </div>

        <div class=" p-3 relative flex">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account/subscription-and-billing')">Keep My Account</ButtonNext>
        </div>
        <div class="p-3 relative flex">
            <ButtonNext color="blue" :showIcon="false" @click="handleSubmit" :disabled="false">Yes, Delete</ButtonNext>
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
                this.loading = true
                await this.$axios.$delete('/api/account')
                // await this.$auth.logout()
                this.$auth.setUser(false);
                this.$router.push('/auth/login')
                // this.$toast.success('Account deleted successfully')
            
        }
    },
};
</script>

<style></style>
