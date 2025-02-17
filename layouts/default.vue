<template>
  <div
    class="main-background relative min-h-screen font-sans text-sm antialiased"
  >
    <div
      class="geo-background w-full h-full absolute top-0 right-0 pointer-events-none"
      :class="[bgGridPosition]"
    ></div>
    <div class="relative max-w-md mx-auto min-h-screen flex flex-col">
      <VTheNav></VTheNav>
      <transition name="fade" mode="out-in">
        <div key="loading" v-if="loading" class="mt-16">
          <img class="mx-auto" src="/loader.svg" alt="loading" />
        </div>
        <div class="flex-1 flex flex-col" key="content" v-else>
          <VDashboardTopnav v-if="completedBudget" />
          <nuxt></nuxt>
          <VDashboardBottomNav />
        </div>
      </transition>
    </div>
    <VActualExpenseModal></VActualExpenseModal>
    <VActualExpenseImageModal></VActualExpenseImageModal>
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'LayoutDefault',
  computed: {
    ...mapGetters({
      completedBudget: 'completedBudget',
    }),
    ...mapState(['bgGridPosition', 'subcategoryCategories']),
  },
  data() {
    return {
      loading: false,
    }
  },
  async created() {
    this.loading = true
    await this.$store.dispatch('loadAllData')
    this.loading = false
  },
}
</script>

<style></style>
