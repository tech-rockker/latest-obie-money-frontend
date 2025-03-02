<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-2">
                <p class="text-left text-orange-2 text-base font-bold">Update Password</p>
            </div>
        </div>

        <div class="p-3 relative">

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="old-password">Old Password</label>
                <input id="old-password" v-model="old_password" class="profile-input" type="password" required />
            </div>

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="password">New Password</label>
                <input id="password" v-model="password" class="profile-input" type="password" required />
            </div>

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="password_confirmation">Confirm New Password</label>
                <input id="password_confirmation" v-model="password_confirmation" class="profile-input" type="password"
                    required />
            </div>
            <div>
                <div v-if="password && password_confirmation != '' && password !== password_confirmation" class="text-red-500 p-3">
                    Passwords do not
                    match</div>
                <div v-if="password && password_confirmation && password === password_confirmation"
                    class="text-green-500 p-3">
                    Passwords match</div>
            </div>
        </div>

        <div class=" mt-20 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account')">Close</ButtonNext>
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleSubmit"
                :disabled="!password || !password_confirmation || !old_password || password !== password_confirmation">
                Update</ButtonNext>
        </div>



    </div>
</template>

<script>
export default {
    layout: "profile",
    data() {
        return {
            old_password: '',
            password: '',
            password_confirmation: '',
            error: '',
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            if (this.password !== this.password_confirmation) {
                this.error = 'Passwords do not match'
                return
            }

            try {
                this.loading = true
                await this.$axios.$put('/api/account/password', {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                this.$toast.success('Password updated successfully')
                this.password = '' // clear form
                this.password_confirmation = '' // clear form
                this.old_password = ''  // clear form
                // this.$router.push('/account')
            } catch (error) {
                this.error = error.response?.data?.error || 'Error updating password'
            } finally {
                this.loading = false
            }
        }
    }

};
</script>

<style></style>
