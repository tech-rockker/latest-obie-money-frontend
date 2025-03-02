<template>
    <div class="profile-container min-h-screen flex flex-col px-3">
        <!-- Existing content here -->

        <div class="p-3 relative">
            <div class="mt-3 mb-1">
                <p class="text-left text-orange-2 text-base font-bold">Update Name</p>
            </div>
        </div>

        <div class="p-3 relative">

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="old-name">Old Name</label>
                <input id="old-name" readonly class="profile-input cursor-default focus:outline-none"
                    :value="$auth.user.name" />
            </div>

            <div class="onboarding-input-container">
                <label class="onboarding-label" for="name">New Name</label>
                <input id="name" v-model="name" class="profile-input" type="text" placeholder="enter new name..."
                    required />
            </div>
        </div>

        <div class=" mt-20 p-3 relative flex space-x-20">
            <ButtonNext color="blue-one-small" :showIcon="false" @click="$router.push('/account')">Close</ButtonNext>
            <ButtonNext color="blue-one-small" :showIcon="false" @click="handleSubmit" :disabled="!name">Update
            </ButtonNext>
        </div>



    </div>
</template>

<script>
export default {
    layout: "profile",
    data() {
        return {
            name: '',
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
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
