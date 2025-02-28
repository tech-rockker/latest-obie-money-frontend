<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-1">
                <p class="text-left text-orange-2 text-base font-bold">Update Email</p>
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="name">Old Email</label>
                <input id="name" readonly class="profile-input cursor-default focus:outline-none" :value="$auth.user.email" />
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="email">New Email</label>
                <input id="email" v-model="email" class="profile-input" type="text" required />
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="email_confirmation">Confirm New Email</label>
                <input id="email_confirmation" v-model="email_confirmation" class="profile-input" type="text" required />
            </div>
        </div>

        <div class=" mt-3 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one" :showIcon="false"  @click="$router.push('/profile')">Close</ButtonNext>
            <ButtonNext color="blue-one" :showIcon="false" @click="handleSubmit" :disabled="false">Update</ButtonNext>
        </div>



    </div>
</template>

<script>
export default {
    layout: "profile",
    data() {
        return {
            email: '',
            email_confirmation: '',
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.post('/api/profile/update/name', {
                    email: this.email,
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
