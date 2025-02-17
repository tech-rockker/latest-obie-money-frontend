<template>
  <div>
    <VContainer>
      <VProgress :percentage="4" />
      <VHeading
        title="Review Your Current Spend"
        subtitle=""
        section="Manage Cashflow and Budgeting"
        image-src="/growth.svg"
      ></VHeading>
      <div class="flex items-center justify-between mt-3">
        <div class="w-24 mr-3">
          <p class="text-xs text-gray-dark">
            Net Income per {{ frequency | frequencyToNoun }}
          </p>
          <p class="text-gray-dark text-xl font-bold">
            {{ netIncomePerFrequency | currency }}
          </p>
        </div>
        <VFrequencyToggle />
      </div>
    </VContainer>
    <VCard>
      <VCardTitle title="Edit your current expenses here"></VCardTitle>
      <VCardDescription>
        <p>
          Review your expenses and set up your new spending plan. With your
          money upfront and centre, your in the drivers seat. Now you know where
          to roll it, hold it or rein it in. You decide.
        </p>
      </VCardDescription>

      <VExpense
        v-for="expense in expenses"
        :key="expense.uuid"
        class="mb-6"
        :expense="expense"
      />
      <VDebt class="mb-6" />
      <VSavings class="mb-6" />
      <VInvestment class="mb-6" />
      <ButtonNext
        :show-icon="false"
        color="blue-dark"
        @click="$router.push('/expenses/page-03')"
        >NEXT</ButtonNext
      >
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  computed: {
    ...mapGetters(['expenses', 'netIncomePerYear', 'netIncomePerFrequency']),
    ...mapState(['frequency']),
  },
}
</script>
