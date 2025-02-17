<template>
  <div>
    <div class="flex items-center justify-between mt-3">
      <div class="mr-3">
        <VDashboardTitle to="/expenses/page-01">Budget</VDashboardTitle>
      </div>
      <VFrequencyToggle />
    </div>
    <!-- <div>
      <ApexChart
        width="500"
        type="donut"
        :options="options"
        :series="series"
      ></ApexChart>
    </div> -->
    <div class="flex items-end mb-5">
      <div class="w-full">
        <div class="mb-2">
          <div class="mr-3">
            <p class="text-xs text-gray-dark">Surplus</p>
            <p class="text-gray-dark text-xl font-bold">
              {{
                (netIncomePerFrequency - totalExpensesPerFrequency)
                  | currencyNoCents
              }}
              <span class="text-sm">/ {{ frequency | frequencyToNoun }}</span>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="mr-3">
            <p class="text-xs text-gray-dark">Your net income</p>
            <p
              class="text-gray-dark text-xl font-bold flex items-center space-x-2"
            >
              <span>{{ netIncomePerFrequency | currencyNoCents }}</span>
              <VPayModal />
            </p>
          </div>
          <div class="mr-3">
            <p class="text-xs text-gray-dark">Your expenses</p>
            <p class="text-gray-dark text-xl font-bold">
              {{ totalExpensesPerFrequency | currencyNoCents }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="rewardToShow" class="ml-auto mb-0.5">
        <NuxtLink class="hover:underline focus:underline" to="rewards">
          <div
            aria-hidden="true"
            class="h-16 w-16 bg-contain bg-center bg-no-repeat mb-1 mx-auto"
            :style="{
              backgroundImage: `url(/rewards/${rewardToShow.image_url})`,
            }"
          ></div>
          <span class="font-semibold whitespace-nowrap text-gray-dark">{{
            rewardToShow.title
          }}</span>
        </NuxtLink>
      </div>
    </div>
    <ButtonNext
      class="mb-6"
      :show-icon="false"
      color="orange"
      subtitle="Spend less. Save more. Invest regularly."
      @click="$router.push('/28-step-challenge')"
    >
      <span class="text-lg">28 Day Money Challenge.</span>
    </ButtonNext>
    <DashboardContainer
      :step="1"
      title="My New Spending Plan"
      to="/expenses/page-01"
    >
      <div>
        <div class="grid grid-cols-2 gap-3">
          <div
            class="rounded-md p-3 space-y-2"
            style="background-color: #fefbf7"
          >
            <VHeadingValues
              v-for="expense in expenses"
              :key="expense.uuid"
              class=""
              :title="expense.label"
              :primary-value="expense.percentageOfIncome"
              :secondary-value="expense.totalPerFrequency"
              secondary-filter="currencyNoCents"
            />
          </div>
          <div class="bg-orange-gradient rounded-md p-3 space-y-2">
            <VHeadingValues
              title="Savings"
              mode="white"
              :primary-value="savings.percentageOfIncome"
              :secondary-value="savings.totalPerFrequency"
              secondary-filter="currencyNoCents"
            />
            <VHeadingValues
              title="Investment"
              mode="white"
              :primary-value="investment.percentageOfIncome"
              :secondary-value="investment.totalPerFrequency"
              secondary-filter="currencyNoCents"
            />
            <VHeadingValues
              title="Debt"
              mode="white"
              :primary-value="debt.percentageOfIncome"
              :secondary-value="debt.totalPerFrequency"
              secondary-filter="currencyNoCents"
            />
          </div>
        </div>
      </div>
    </DashboardContainer>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'expenses',
      'savings',
      'debt',
      'investment',
      'netIncomePerYear',
      'netIncomePerFrequency',
      'totalExpensesPerFrequency',
      'allRewardsCompleted',
      'finalReward',
    ]),
    ...mapState(['frequency']),
    options() {
      return {
        labels: [
          ...this.expenses.map((expense) => expense.label),
          'Savings',
          'Investment',
          'Debt',
        ],
      }
    },
    series() {
      return [
        ...this.expenses.map((expense) => expense.percentageOfIncome),
        this.savings.percentageOfIncome,
        this.investment.percentageOfIncome,
        this.debt.percentageOfIncome,
      ]
    },
    lastRewardedReward() {
      const rewards = this.$auth.user.rewards
      return rewards.toReversed().find((reward) => reward.has_reward)
    },
    rewardToShow() {
      if (this.allRewardsCompleted) {
        return this.finalReward
      } else if (this.lastRewardedReward) {
        return this.lastRewardedReward
      } else {
        return null
      }
    },
  },
}
</script>
