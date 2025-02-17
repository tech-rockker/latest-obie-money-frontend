<template>
  <div>
    <VContainer>
      <VProgress :percentage="17" />
      <VHeading
        title="Creating Your Emergency Fund"
        section="Build a plan that creates your future"
        subtitle="Step 2 of 4"
        image-src="/protection2.svg"
      ></VHeading>
      <VHeadingAvailableIncome />
    </VContainer>
    <VCard>
      <VSafetyNetCard
        class="mb-6"
        category="emergencyFund"
        category-key="allocationSavings"
      />
      <VSafetyNetCard
        class="mb-6"
        category="emergencyFund"
        category-key="allocationIncome"
      />
      <VButtonBox>
        <template slot="content">
          <div class="grid grid-cols-2 gap-3">
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{
                  (safetyNet.emergencyFund.amount -
                    safetyNet.emergencyFund.allocationSavings)
                    | currency
                }}
              </p>
              <p class="text-dark-purple font-semibold">
                You’ll need to top up to fullfill emergency fund
              </p>
            </div>
            <div class="text-left">
              <p class="text-dark-purple text-2xl font-bold">
                {{ safetyNet.emergencyFund.allocationIncome | currency }}
              </p>
              <p class="text-dark-purple font-semibold">
                Will be allocated monthly from your income
              </p>
            </div>
          </div>
        </template>
        <ButtonContainer>
          <ButtonBack @click="$router.push('/safety-net/page-03')"></ButtonBack>
          <ButtonNext
            :show-icon="false"
            color="blue-dark"
            @click="$router.push('/safety-net/page-05')"
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
