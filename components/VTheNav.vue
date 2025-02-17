<template>
  <div class="p-4 flex items-center justify-between">
    <VObieYourMoney />
    <div class="text-right" v-if="$auth.loggedIn">
      <p class="font-bold">{{ $auth.user.name }}</p>
      <div class="flex space-x-2 justify-end">
        <NuxtLink
          v-if="$auth.user && $auth.user.role === 'admin'"
          to="/admin/users"
          class="text-xs"
          >Admin</NuxtLink
        >
        <button @click="logOut()" class="text-xs text-red-500" type="button">
          Log Out
        </button>
      </div>
    </div>
    <div v-else class="flex space-x-3">
      <nuxt-link to="/login" type="button" class="button-next blue-dark sm"
        >Log In</nuxt-link
      >
      <nuxt-link
        to="/onboarding/page-01"
        type="button"
        class="button-next white sm"
        >Register</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logOut() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
