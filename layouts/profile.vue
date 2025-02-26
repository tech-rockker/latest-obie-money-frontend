<template>
    <div class="relative font-sans text-sm antialiased max-w-md mx-auto bg-fef6ed">
      <VTheNav></VTheNav>
      <div>
        <nuxt></nuxt>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async created() {
      await this.$store.dispatch('setValuesFromProfile')
    },
  }
  </script>
  
  <style scoped>
  .bg-fef6ed {
      background-color: #FEF6ED;
      min-height: 100vh;
      /* Ensure it covers the full viewport height */
  }
  </style>
  