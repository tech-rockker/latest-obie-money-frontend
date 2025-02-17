<template>
  <div class="relative font-sans text-sm antialiased max-w-md mx-auto">
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
  async created() {
    await this.$store.dispatch('setValuesFromProfile')
  },
}
</script>

<style></style>
