<template>
  <div>
    <VContainer>
      <VProgress :percentage="6" />
      <VHeading
        title="Optimise your Income"
        subtitle=""
        section="Manage Cashflow and Budgeting"
        image-src="/growth.svg"
      ></VHeading>
      <div class="flex items-center justify-between mt-3">
        <div class="w-24 mr-3">
          <p class="text-xs text-gray-dark">
            Net Income per {{ frequency | frequencyToNoun }}
          </p>
          <p class="gray-dark text-xl font-bold flex items-center space-x-2">
            <span>{{ netIncomePerFrequency | currency }}</span> <VPayModal />
          </p>
        </div>
        <VFrequencyToggle />
      </div>
    </VContainer>
    <VCard>
      <VCardTitle
        image-src="/icons/heat.svg"
        title="Compare your current spend"
        text-alignment="center"
      ></VCardTitle>
      <VCardDescription class="text-center text-lg">
        Living Expenses 60% <br />
        Fun and Party Money 10% <br />
        Get out of trouble and Save 20% <br />
        Invest 10% <br />
      </VCardDescription>
      <VSummary :show-comparison="true" class="mb-3" />
      <VAlert
        v-if="surplusWithoutSavingsAndInvestments > 0"
        class="mb-6"
        title="Surplus"
        :description="`You got <span class='font-bold'>${filteredSurplusWithoutSavingsAndInvestments}</span> left over in your pay! Assign this surplus to your savings or investments. If you have consumer debt we can help you knock it off fast. Just assign to savings and then use the Deal with Debt section to rapidly pay off your debt for good!`"
      >
      </VAlert>
      <VAlert
        v-if="surplusWithoutSavingsAndInvestments < 0"
        class="mb-6"
        variant="red"
        title="Deficit"
        :description="`You have spent more than your budget by <span class='font-bold'>${filteredSurplusWithoutSavingsAndInvestments}</span>. You need to reduce your spending.`"
      >
      </VAlert>
      <VButtonBox
        :title="
          (savings.totalPerFrequency + investment.totalPerFrequency) | currency
        "
        subtitle="Your living costs are nailed!<br />For saving and investing you have"
      >
        <ButtonContainer>
          <ButtonBack @click="$router.push('/expenses/page-02')" />
          <RewardAssigner
            :reward-id="1"
            v-slot="{ assigningReward, assignReward }"
            @success="$router.push('/section-index?step=2')"
          >
            <ButtonNext
              :show-icon="false"
              :disabled="assigningReward"
              color="blue-dark"
              @click="() => assignReward()"
            >
              SAVE YOUR PLAN AND PROCEED</ButtonNext
            >
          </RewardAssigner>
        </ButtonContainer>
      </VButtonBox>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters([
      'expenses',
      'savings',
      'investment',
      'netIncomePerYear',
      'netIncomePerFrequency',
      'surplusPerFrequency',
    ]),
    ...mapState(['frequency']),
    surplusWithoutSavingsAndInvestments() {
      return (
        this.surplusPerFrequency -
        this.savings.totalPerFrequency -
        this.investment.totalPerFrequency
      )
    },
    filteredSurplusWithoutSavingsAndInvestments() {
      return this.$options.filters.currency(
        Math.abs(this.surplusWithoutSavingsAndInvestments)
      )
    },
  },
}
</script>
