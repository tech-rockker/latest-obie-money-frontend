<template>
  <VPageContainer>
    <VContainer>
      <VProgress :percentage="25" />
      <VHeading
        title="Creating Your Safety Net"
        section="Build a plan that creates your future"
        subtitle="Summary"
        image-src="/protection2.svg"
      ></VHeading>
      <div class="orange-currency-table">
        <table class="safety-net-table w-full">
          <tr>
            <td>Emergency Fund</td>
            <td>
              {{ safetyNet.emergencyFund.amount | currency }}
            </td>
          </tr>
          <tr>
            <td>Buffer for Lumpy Expenses</td>
            <td>
              {{ safetyNet.bufferForLumpyExpenses.amount | currency }}
            </td>
          </tr>
          <tr>
            <td>3 Months of Expenses</td>
            <td>
              {{ safetyNet.threeMonthsOfExpenses.amount | currency }}
            </td>
          </tr>
        </table>
      </div>
      <div class="table mb-6">
        <table class="safety-net-table-2 text-gray-dark">
          <tr>
            <th></th>
            <th class="text-orange-2 font-semibold">
              <span class="font-normal">Allocated from</span><br /><span
                >Cash Savings</span
              >
            </th>
            <th class="text-orange-2 font-semibold">Income</th>
          </tr>
          <tr>
            <td>Emergency Fund</td>
            <td class="text-lg font-bold">
              {{ safetyNet.emergencyFund.allocationSavings | currency }}
            </td>
            <td class="text-lg font-bold">
              {{ safetyNet.emergencyFund.allocationIncome | currency }}
            </td>
          </tr>
          <tr>
            <td>Buffer for Lumpy Expenses</td>
            <td class="text-lg font-bold">
              {{
                safetyNet.bufferForLumpyExpenses.allocationSavings | currency
              }}
            </td>
            <td class="text-lg font-bold">
              {{ safetyNet.bufferForLumpyExpenses.allocationIncome | currency }}
            </td>
          </tr>
          <tr>
            <td>3 Month Coverage</td>
            <td class="text-lg font-bold">
              {{ safetyNet.threeMonthsOfExpenses.allocationSavings | currency }}
            </td>
            <td class="text-lg font-bold">
              {{ safetyNet.threeMonthsOfExpenses.allocationIncome | currency }}
            </td>
          </tr>
        </table>
      </div>
      <div class="mb-6">
        <div class="bg-orange text-white flex justify-between p-3 mb-2">
          <p class="text-lg font-bold">Available Cash Savings</p>
          <p>
            <VBadge size="lg" color="heading-blue">{{
              cashSavingsAvailable | currency
            }}</VBadge>
          </p>
        </div>
        <div class="bg-orange text-white flex justify-between p-3">
          <p class="text-lg font-bold">Available Saving from Income</p>
          <p>
            <VBadge size="lg" color="heading-blue">{{
              incomeSavingsAvailable | currency
            }}</VBadge>
          </p>
        </div>
      </div>
      <VAlert
        class="mb-6"
        title="We add some tasks on your To Do list"
        description="Great! Automate your plan by setting up your safety net accounts, allocate in your savings and set up your automatic transfers. Done!"
      ></VAlert>
      <ButtonContainer>
        <ButtonBack @click="$router.push('/safety-net/page-06')"></ButtonBack>
        <RewardAssigner
          :reward-id="2"
          v-slot="{ assigningReward, assignReward }"
          @success="$router.push('/section-index?step=3')"
        >
          <ButtonNext
            :show-icon="false"
            subtitle="Proceed to dealing with debt"
            :disabled="assigningReward"
            color="orange"
            @click="() => assignReward()"
          >
            SAVE YOUR SAFETY NET</ButtonNext
          >
        </RewardAssigner>
      </ButtonContainer>
    </VContainer>
  </VPageContainer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['safetyNet']),
    ...mapGetters([
      'debts',
      'savings',
      'cashSavingsAvailable',
      'incomeSavings',
      'incomeSavingsAllocated',
      'incomeSavingsAvailable',
      'totalDebtAmountOwing',
      'totalDebtMinMonthlyRepayment',
      'safetyNetTotal',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.safety-net-table-2 {
  th {
    vertical-align: bottom;
    border-bottom: 1px solid rgba(91, 94, 141, 0.6);
  }
  td,
  th {
    @apply py-1;
  }
  tr {
    td:not(:last-child),
    th:not(:last-child) {
      @apply pr-3;
    }
  }
}
</style>
