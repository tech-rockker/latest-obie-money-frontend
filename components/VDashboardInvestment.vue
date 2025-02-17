<template>
  <DashboardContainer
    :step="5"
    title="My Investment Goals"
    to="/invest/page-01"
  >
    <div>
      <div>
        <div class="mb-4">
          <VHeadingValues
            title="Monthly Contribution"
            :primary-value="incomeInvestmentsAllocatedMonthly"
            primary-filter="currencyNoCents"
          ></VHeadingValues>
        </div>
        <div v-if="investmentGoals.length">
          <VInvestmentGoalCard
            v-for="(goal, index) in investmentGoals"
            :key="goal.uuid"
            :index="index"
            :goal="goal"
            class="mb-4"
            :show-edit="false"
            :show-open="true"
            @open-goal="$router.push('/invest/page-02')"
          />
        </div>
        <div class="text-gray-dark italic" v-else>
          You have not yet added any investment goals.
        </div>
      </div>
    </div>
  </DashboardContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'goals',
      'incomeInvestmentsAllocatedMonthly',
      'investmentGoals',
    ]),
    ...mapState(['safetyNet']),
  },
}
</script>
