<template>
    <div class="p-4 flex items-center justify-between">
        <VObieYourMoney />
        <div class="text-right" v-if="$auth.loggedIn">
            <NuxtLink to="/profile" class="font-bold">{{ $auth.user.name }}</NuxtLink>
            <div class="flex space-x-2 justify-end">
                <NuxtLink v-if="$auth.user && $auth.user.role === 'admin'" to="/admin/users" class="text-xs">Admin
                </NuxtLink>
                <button @click="logOut()" class="text-xs text-red-500" type="button">
                    Log Out
                </button>
            </div>
        </div>
        <div v-else class="flex space-x-3">
            <nuxt-link to="/auth/login" type="button" :class="loginButtonClass">Log In</nuxt-link>
            <nuxt-link to="/auth/register/page-01" type="button" :class="registerButtonClass">Register</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        isLoginActive() {
            return this.$route.path === "/auth/login";
        },
        isRegisterActive() {
            return ["/auth/register/page-01", "/auth/register/page-02"].includes(this.$route.path);
        },
        loginButtonClass() {
            return this.isLoginActive ? "button-next blue-dark sm" : "button-next white sm";
        },
        registerButtonClass() {
            return this.isRegisterActive ? "button-next blue-dark sm" : "button-next white sm";
        }
    },
    methods: {
        async logOut() {
            await this.$auth.logout()
            this.$router.push('/')
        },
    },
}
</script>

<style></style>
