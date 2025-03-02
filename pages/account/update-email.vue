<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <div class="p-3 relative">
            <div class="mt-3 mb-1">
                <p class="text-left text-orange-2 text-base font-bold">Update Email</p>
            </div>
            <div v-if="error" class="text-red-500 p-3">{{ error }}</div>

        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="name">Old Email</label>
                <input id="name" readonly class="profile-input cursor-default focus:outline-none"
                    :value="$auth.user.email" />
            </div>

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="email">New Email</label>
                <input id="email" v-model="email" class="profile-input" type="text" required />
            </div>

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="email_confirmation">Confirm New Email</label>
                <input id="email_confirmation" v-model="email_confirmation" class="profile-input" type="text"
                    required />
            </div>
            <div>
                <div v-if="email && email_confirmation != '' && email !== email_confirmation" class="text-red-500 p-3">Emails do not match</div>
                <div v-if="email && email_confirmation && email === email_confirmation" class="text-green-500 p-3">
                    Emails match</div>
            </div>

        </div>

        <div class=" mt-20 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account')">Close</ButtonNext>
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleSubmit"
                :disabled="!email || !email_confirmation || email !== email_confirmation">Update</ButtonNext>
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
            error: '',
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            if (this.email !== this.email_confirmation) {
                this.error = 'Emails do not match'
                return
            }

            try {
                this.loading = true
                await this.$axios.$put('/api/account/email', {
                    email_confirmation: this.email_confirmation,
                    email: this.email
                })
                await this.$auth.fetchUser()
                
                this.email = '' // clear form
                this.email_confirmation = '' // clear form  

                this.$toast.success('Email updated')
                // this.$toast.success('Email updated - please check your inbox to verify')
                // this.$router.push('/account')
            } catch (error) {
                this.error = error.response?.data?.error || 'Error updating email'
            } finally {
                this.loading = false
            }
        }
    }
};
</script>

<style></style>
