<template>
  <VContainer>
    <div>
      <!-- <div v-if="$route.path === '/dashboard'" class="flex items-start mb-4">
        <VObieYourMoney />
        <div class="text-black ml-3">
          <h1 class="text-3xl font-bold leading-none mt-0.5">Dashboard</h1>
        </div>
      </div> -->
      <div class="flex justify-between">
        <div class="text-center">
          <NuxtLink
            class="text-gray-dark text-center font-bold pb-1"
            to="/expenses/page-01"
            >Budget</NuxtLink
          >
        </div>
        <div class="text-center">
          <NuxtLink
            class="text-gray-dark text-center font-bold pb-1"
            to="/safety-net/page-01"
            >Safety Net</NuxtLink
          >
        </div>
        <div class="text-center">
          <NuxtLink
            class="text-gray-dark text-center font-bold pb-1"
            to="/debt/page-01"
            >Debt</NuxtLink
          >
        </div>
        <div class="text-center">
          <NuxtLink
            class="text-gray-dark text-center font-bold pb-1"
            to="/goals/page-01"
            >Goals</NuxtLink
          >
        </div>
        <div class="text-center">
          <NuxtLink
            class="text-gray-dark text-center font-bold pb-1"
            to="/invest/page-01"
            >Invest</NuxtLink
          >
        </div>
      </div>
    </div>
  </VContainer>
</template>

<script>
export default {}
</script>

<style></style>
