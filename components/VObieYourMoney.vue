<template>
  <div>
    <NuxtLink :to="$auth.loggedIn ? '/dashboard' : '/auth/login'">
      <img class="w-30" src="/Obie_logo.svg" alt="obie" />
    </NuxtLink>
    <!-- <p class="uppercase text-orange-1 text-xs font-bold">YOUR MONEY</p> -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
