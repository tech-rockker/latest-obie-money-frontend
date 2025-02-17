<template>
  <div>
    <NuxtLink class="text-white" to="/onboarding/page-01">Onboarding</NuxtLink>
    <NuxtLink class="text-white" to="/expenses/page-01">Expenses</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware({ redirect }) {
    return redirect('/onboarding/page-01')
  },
}
</script>

<style></style>
