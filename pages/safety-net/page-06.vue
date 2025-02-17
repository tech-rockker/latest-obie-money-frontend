<template>
  <div>
    <VContainer>
      <VProgress :percentage="17" />
      <VHeading
        title="Creating Your 3 Months of Expenses"
        section="Build a plan that creates your future"
        subtitle="Step 4 of 4"
        image-src="/protection2.svg"
      ></VHeading>
      <VHeadingAvailableIncome />
    </VContainer>
    <VCard>
      <VSafetyNetCard
        class="mb-6"
        category="threeMonthsOfExpenses"
        category-key="allocationSavings"
      />
      <VSafetyNetCard
        class="mb-6"
        category="threeMonthsOfExpenses"
        category-key="allocationIncome"
      />
      <VButtonBox>
        <template slot="content">
          <div class="grid grid-cols-2 gap-3">
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{
                  (safetyNet.threeMonthsOfExpenses.amount -
                    safetyNet.threeMonthsOfExpenses.allocationSavings)
                    | currency
                }}
              </p>
              <p class="text-dark-purple font-semibold">
                You’ll need to top up to fullfill emergency fund
              </p>
            </div>
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{
                  safetyNet.threeMonthsOfExpenses.allocationIncome | currency
                }}
              </p>
              <p class="text-dark-purple font-semibold">
                Will be allocated monthly from your income
              </p>
            </div>
          </div>
        </template>
        <ButtonContainer>
          <ButtonBack @click="$router.push('/safety-net/page-05')"></ButtonBack>
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            @click="$router.push('/safety-net/page-07')"
            >NEXT</ButtonNext
          >
        </ButtonContainer>
      </VButtonBox>
    </VCard>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['safetyNet']),
    ...mapGetters([
      'debts',
      'savings',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
    ]),
  },
}
</script>

<style lang="scss" scoped>
table {
  td {
    @apply py-1;
  }
}
</style>
