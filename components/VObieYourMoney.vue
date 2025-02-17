<template>
  <div>
    <NuxtLink :to="$auth.loggedIn ? '/dashboard' : '/login'">
      <img class="w-20" src="/Obie.svg" alt="obie" />
    </NuxtLink>
    <!-- <p class="uppercase text-orange-1 text-xs font-bold">YOUR MONEY</p> -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
