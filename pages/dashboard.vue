<template>
  <VCard color="blue">
    <VDashboardBudget />
    <VDashboardSafetyNet />
    <VDashboardDebt />
    <VDashboardGoals />
    <VDashboardInvestment />
    <VDashboardSuperFund />
    <VDashboardInsurances />
    <DashboardContainer
      :step="8"
      title="My Asset Protection"
      to="/learn/asset-protection"
    >
      <p class="text-gray-dark italic">
        Click
        <NuxtLink class="underline" to="/learn/asset-protection">here</NuxtLink>
        to find out more.
      </p>
    </DashboardContainer>
    <DashboardContainer
      :step="9"
      title="My Final To Do List"
      to="/to-dos/estate-planning"
    >
      <p class="text-gray-dark italic">
        Click
        <NuxtLink class="underline" to="/to-dos/estate-planning">here</NuxtLink>
        to find out more.
      </p>
    </DashboardContainer>
    <VDashboardNextButton />
    <ButtonNext
      class="mb-6"
      :show-icon="false"
      color="white"
      subtitle="Click to see how you're doing against your budget"
      @click="$router.push('/actual-expenses')"
      >How are you tracking this week?</ButtonNext
    >

    <VDashboardTodos class="mb-6" />
    <div class="mb-6">
      <NuxtLink
        to="/rewards"
        class="button-next orange relative w-full block text-center"
      >
        <p class="text-2xl mb-2">My Rewards</p>
        <div class="flex justify-center space-x-3">
          <img
            :class="!index ? 'h-20 -mt-4' : 'h-16'"
            v-for="(src, index) in [
              '/rewards/budget-nailed.png',
              '/rewards/safety-net-sorted.png',
              '/rewards/debt-free-plan-set.png',
              '/rewards/savings-goal-set.png',
              '/rewards/super-maximised.png',
            ]"
            :src="src"
            :key="src"
            aria-hidden="true"
          />
        </div>
      </NuxtLink>
    </div>
    <div>
        <a
        href="https://kua27hyqf3v.typeform.com/to/XKFg8Cq1"
        target="_blank"
        rel="noopener noreferrer"
        class="button-next orange relative w-full block text-center"
        >
            <p class="text-2xl mb-2">Obie App Feedback Survey</p>
        </a>
    </div>
  </VCard>
</template>

<script>
export default {
  name: 'DashboardIndex',
  created() {
    this.$store.dispatch('setValue', { key: 'bgGridPosition', value: 'bottom' })
  },
  destroyed() {
    this.$store.dispatch('setValue', { key: 'bgGridPosition', value: 'top' })
  },
}
</script>
