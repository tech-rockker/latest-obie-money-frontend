<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-1">
                <p class="text-left text-orange-2 text-base font-bold">Delete Account</p>
            </div>
        </div>

        <div class="p-3 relative">
            <p class="font-normal">Please confirm that you’d like to delete your account and data. Deleting your account will also cancel
                any subscriptions.</p>
        </div>

        <div class=" mt-3 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one" :showIcon="false" @click="$router.push('/profile')">Close</ButtonNext>
            <ButtonNext color="blue-one" :showIcon="false" @click="handleSubmit" :disabled="false">Delete</ButtonNext>
        </div>


    </div>
</template>

<script>
export default {
    layout: "profile",
    data() {
        return {
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.post('/api/profile/update/name', {
                    password: this.password,
                })

                // Fetch user details again
                await this.$auth.fetchUser(); // This will refresh the user data

            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },
    },
};
</script>

<style></style>
