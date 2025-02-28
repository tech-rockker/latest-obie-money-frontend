<template>
  <div :class="['relative font-sans text-sm antialiased max-w-md mx-auto', bgClass]">
    <VTheNav></VTheNav>
    <div>
      <nuxt></nuxt>
    </div>
    <VPrivacyRegisterModal></VPrivacyRegisterModal>
    <VPrivacyDataModal></VPrivacyDataModal>
    <VTermsAndConditionsModal></VTermsAndConditionsModal>
    <VDisclaimerModal></VDisclaimerModal>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  computed: {
        bgClass() {
            const normalizedPath = this.$route.path.replace(/\/$/, '');

            if (normalizedPath === '/auth/register/page-02' || normalizedPath === '/onboarding/page-06') {
                return 'bg-fef6ed';
            } else if (normalizedPath === '/onboarding/welcome') {
                return 'bg-ebeaff';
            }
            return ''; // Default case if none match
        },
    },
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

.bg-ebeaff {
    background-color: #EBEAFF;
    min-height: 100vh;
    /* Ensure it covers the full viewport height */
}
</style>
