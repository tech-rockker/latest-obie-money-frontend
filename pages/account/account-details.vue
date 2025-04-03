<template>
    <div class="profile-container min-h-screen flex flex-col px-3">

        <!-- Back Button -->
        <div class="p-4 flex items-center space-x-3 mt-5 mb-3">
            <NuxtLink to="/account" class="flex items-center text-blue-2 text-base font-medium hover:underline">
                &#x276E;
            </NuxtLink>
            <p class="font-bold text-xl text-blue-2">Account Details</p>
        </div>

        <!-- email -->
        <div class="p-3 relative">
                <p class="text-left text-blue-2 text-lg font-normal">Change Email Address</p>
        </div>

        <div class="px-3 relative">

            <div class="onboarding-input-container">
                <input id="email" v-model="email" class="onboarding-input" type="email" placeholder="New Email"
                    required />
            </div>
            <div class="onboarding-input-container">
                <input id="email_confirmation" v-model="email_confirmation" class="onboarding-input"
                    placeholder="Confirm New Email" type="email" required />

                <div v-if="email && email_confirmation != '' && email !== email_confirmation" class="text-red-500 px-3">
                    Emails do not match</div>
                <div v-if="email && email_confirmation && email === email_confirmation" class="text-green-500 px-3">
                    Emails match</div>
            </div>

        </div>

        <div class=" px-3 relative flex ">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleEmailSubmit"
                :disabled="!email || !email_confirmation || email !== email_confirmation">Update Email Address
            </ButtonNext>
        </div>

        <hr class="my-10 border-t border-gray-300">

        <!-- password -->
        <div class="p-3 relative">
            <p class="text-left text-blue-2 text-lg font-normal">Change Password</p>
        </div>
        <div class="px-3 relative">

            <div class="onboarding-input-container">
                <InputPassword v-model="old_password" name="current_password"></InputPassword>
            </div>
            <div class="onboarding-input-container">
                <InputPassword v-model="password" name="new_password"></InputPassword>
            </div>
            <div class="onboarding-input-container">
                <InputPassword v-model="password_confirmation" name="confirm_new_password"></InputPassword>

                <div v-if="password && password_confirmation != '' && password !== password_confirmation"
                    class="text-red-500 px-3">
                    Passwords do not
                    match</div>
                <div v-if="password && password_confirmation && password === password_confirmation"
                    class="text-green-500 px-3">
                    Passwords match</div>
            </div>
        </div>

        <div class="px-3 relative flex">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handlePasswordSubmit"
                :disabled="!password || !password_confirmation || !old_password || password !== password_confirmation">
                Update</ButtonNext>
        </div>

        <hr class="my-10 border-t border-gray-300">

        <!-- name and dob -->
        <div class="p-3 relative">
                <p class="text-left text-blue-2 text-lg font-normal">Edit info</p>
        </div>


        <div class="px-3 relative">

            <div class="onboarding-input-container">
                <input id="name" v-model="name" class="profile-input" type="text" placeholder="Enter New Name..."
                    required />
            </div>
        </div>

        <div class="px-3 relative flex space-x-20">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleNameSubmit" :disabled="!name">Update Name
            </ButtonNext>
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

            email: '',
            email_confirmation: '',

            old_password: '',
            password: '',
            password_confirmation: '',

            name: '',
        }
    },

    computed: {

    },

    methods: {
        async handleEmailSubmit() {
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
        },
        async handlePasswordSubmit() {
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
        },

        async handleNameSubmit() {
            try {
                this.loading = true
                await this.$axios.$put('/api/account/name', { name: this.name })
                await this.$auth.fetchUser()
                this.name = ''  // clear form
                this.$toast.success('Name updated successfully')
                // this.$router.push('/account')
            } catch (error) {
                this.$toast.error(error.response?.data?.message || 'Error updating name')
            } finally {
                this.loading = false
            }
        }
    },
};
</script>

<style></style>
