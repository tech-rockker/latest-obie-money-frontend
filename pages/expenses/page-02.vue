<template>
  <div>
    <VContainer>
      <VProgress :percentage="8" />
      <VHeading
        title="Optimise your Income"
        section="Manage Cashflow and Budgeting"
        image-src="/growth.svg"
      ></VHeading>

      <div class="flex items-center justify-between mt-3">
        <div class="mr-3">
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
    <!-- <VContainer>
      <VProgress :percentage="8" />
      <div class="flex items-center justify-between mt-3 mb-2">
        <div class="mr-3">
          <VDashboardTitle>Budget</VDashboardTitle>
        </div>
        <VFrequencyToggle />
      </div>
      <div class="mt-3 mb-2">
        <p class="text-xs text-gray-dark">Surplus</p>
        <p class="text-gray-dark text-xl font-bold">
          {{ surplusPerFrequency | currency }}
          <span class="text-sm">/ {{ frequency | frequencyToNoun }}</span>
        </p>
      </div>
      <div class="grid grid-cols-2">
        <div>
          <VHeadingValues
            primary-filter="currency"
            class="mb-2"
            title="Your net income"
            :primary-value="netIncomePerFrequency"
          >
            <template slot="button">
              <VPayModal class="ml-2" />
            </template>
          </VHeadingValues>
        </div>
        <div>
          <VHeadingValues
            primary-filter="currency"
            class="mb-2"
            title="Your expenses"
            :primary-value="totalExpensesPerFrequency"
          />
        </div>
      </div>
    </VContainer> -->
    <VCard>
      <VCardTitle title="Edit your current expenses here"></VCardTitle>
      <VCardDescription>
        Review your expenses and set up your new spending plan. With your money
        upfront and centre, you're in the drivers seat. Now you know where to
        roll it, hold it or rein it in. You decide.
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
      <ButtonContainer>
        <ButtonBack @click="$router.push('/expenses/page-01')" />
        <ButtonNext color="blue-dark" @click="$router.push('/expenses/page-03')"
          >NEXT</ButtonNext
        >
      </ButtonContainer>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SandboxPage',
  computed: {
    ...mapGetters([
      'expenses',
      'savings',
      'debt',
      'investment',
      'netIncomePerYear',
      'netIncomePerFrequency',
      'surplusPerFrequency',
      'totalExpensesPerFrequency',
    ]),
    ...mapState(['frequency']),
  },
}
</script>
