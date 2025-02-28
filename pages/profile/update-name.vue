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
                <input id="old-name" readonly class="profile-input cursor-default focus:outline-none" :value="$auth.user.name" />
            </div>
        </div>

        <div class="p-3 relative">
            <div class="onboarding-input-container">
                <label class="onboarding-label" for="name">New Name</label>
                <input id="name" v-model="name" class="profile-input" type="text" required />
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
            name: '',
        }
    },
    methods: {
        async handleSubmit() {
            try {
                this.loading = true
                await this.$axios.post('/api/profile/update/name', {
                    name: this.name,
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
