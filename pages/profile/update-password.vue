<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-1">
                <p class="text-left text-orange-2 text-base font-bold">Update Email</p>
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="name">Old Password</label>
                <input id="name" readonly class="profile-input cursor-default focus:outline-none" :value="$auth.user.password" />
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="password">New Password</label>
                <input id="password" v-model="password" class="profile-input" type="text" required />
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="password_confirmation">Confirm New Password</label>
                <input id="password_confirmation" v-model="password_confirmation" class="profile-input" type="text" required />
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
